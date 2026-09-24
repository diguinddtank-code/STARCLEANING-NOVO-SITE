"use client";

import React, { useState, useEffect } from 'react';
import { formatDistanceToNow, isToday, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { supabase } from '@/lib/supabase';

// Data de corte: Leads criados antes de 01/09/2026 são considerados "Antigos (Até Agosto)"
const CUTOFF_DATE = new Date('2026-09-01T00:00:00');

const isOldLead = (app: any) => {
  if (!app?.created_at) return false;
  const d = new Date(app.created_at);
  return d < CUTOFF_DATE;
};

const tVal = (val: string | undefined | null) => {
  if (!val) return 'N/A';
  const map: Record<string, string> = {
    '1_plus_years': 'Mais de 1 ano',
    'less_than_1_year': 'Menos de 1 ano',
    'none': 'Sem experiência',
    'full_time': 'Tempo integral',
    'part_time': 'Meio período',
    'no': 'Não',
    'yes': 'Sim',
    'prefer_team': 'Prefere em equipe',
    'more_or_less': 'Mais ou menos',
    'immediately': 'Imediatamente',
    'within_2_weeks': 'Em até 2 semanas',
    'more_than_2_weeks': 'Mais de 2 semanas'
  };
  return map[val] || val.replace(/_/g, ' ');
};

export default function RecruitingDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const [applicants, setApplicants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Controle de Tela: 'new' (Setembro em diante) vs 'archive' (Agosto pra trás) vs 'all' (Tudo)
  const [viewSection, setViewSection] = useState<'new' | 'archive' | 'all'>('new');
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'needs_review' | 'today'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);

  const validPins = ['7827', 'star20', 'star', 'star2026', 'star2025', 'star2024', 'admin', '1234', '78270', '2026'];

  const performFetch = async (currentPin: string, isSilent = false) => {
    if (!isSilent) setIsLoading(true);
    setIsRefreshing(true);
    try {
      const normalizedPin = (currentPin || '').trim().toLowerCase();
      if (!validPins.includes(normalizedPin) && !validPins.includes(currentPin)) {
        throw new Error('Senha ou PIN incorreto. Tente novamente.');
      }

      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw new Error(error.message);

      setApplicants(data || []);
      setIsAuthenticated(true);
      setError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('star_recruiting_auth', 'true');
      }
    } catch (err: any) {
      console.error("Error fetching applicants:", err);
      setError(err.message || 'Senha Inválida ou Falha na Conexão');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    try {
      const savedAuth = typeof window !== 'undefined' ? sessionStorage.getItem('star_recruiting_auth') : null;
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
        performFetch('7827', true);
      }
    } catch (e) {
      console.warn("Storage check failed", e);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    performFetch(pin);
  };

  const handleClearSection = async () => {
    const sectionLabel = viewSection === 'new' 
      ? 'todos os NOVOS LEADS (Setembro em diante)' 
      : viewSection === 'archive' 
      ? 'todos os leads do ARQUIVO ANTIGO (Até Agosto)' 
      : 'TODOS os leads da base';

    const isConfirmed = window.confirm(`ATENÇÃO: Você tem certeza que deseja EXCLUIR ${sectionLabel}? Isso não pode ser desfeito.`);
    if (!isConfirmed) return;

    try {
      setIsLoading(true);
      
      const normalizedPin = (pin || '').trim().toLowerCase();
      if (!validPins.includes(normalizedPin) && !validPins.includes(pin)) {
        throw new Error('Senha incorreta');
      }

      let query = supabase.from('job_applications').delete();

      if (viewSection === 'new') {
        query = query.gte('created_at', '2026-09-01T00:00:00');
      } else if (viewSection === 'archive') {
        query = query.lt('created_at', '2026-09-01T00:00:00');
      } else {
        query = query.gte('qualification_score', -1);
      }
        
      const { error } = await query;
      if (error) throw new Error(error.message);

      await performFetch(pin, true);
      setSelectedApplicant(null);
    } catch (err) {
      console.error("Error clearing applicants:", err);
      alert("Erro ao limpar a lista. Verifique permissões do Supabase.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteApplicant = async (id: number) => {
    const isConfirmed = window.confirm("Tem certeza que deseja apagar este candidato?");
    if (!isConfirmed) return;

    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', id);

      if (error) throw new Error(error.message);

      setApplicants(prev => prev.filter(a => a.id !== id));
      if (selectedApplicant?.id === id) {
        setSelectedApplicant(null);
      }
    } catch (err) {
      console.error("Error deleting applicant:", err);
      alert("Erro ao apagar. Verifique sua conexão e permissões.");
    }
  };

  const getWaLink = (phone: string, name?: string) => {
    if (!phone) return '#';
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length === 10) cleanPhone = '1' + cleanPhone;
    const greeting = name ? `Olá ${name}, tudo bem? Sou da equipe da Star Cleaning SC a respeito da sua candidatura!` : 'Olá, tudo bem? Sou da Star Cleaning SC!';
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(greeting)}`;
  };

  const getTelLink = (phone: string) => {
    if (!phone) return '#';
    const cleanPhone = phone.replace(/\D/g, '');
    return `tel:${cleanPhone}`;
  };

  const formatDateInfo = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
      const d = new Date(dateString);
      if (isToday(d)) {
        return `Hoje às ${format(d, 'HH:mm')}`;
      }
      return `${format(d, 'dd/MM/yyyy')} (${formatDistanceToNow(d, { locale: ptBR, addSuffix: true })})`;
    } catch {
      return dateString;
    }
  };

  const formatShortDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const d = new Date(dateString);
      if (isToday(d)) {
        return `Hoje ${format(d, 'HH:mm')}`;
      }
      return format(d, 'dd/MM/yy');
    } catch {
      return '';
    }
  };

  // Travar scroll do body quando o modal estiver aberto no mobile
  useEffect(() => {
    if (selectedApplicant) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedApplicant]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-blue-500 selection:text-white">
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center border border-slate-800/10">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-600 shadow-inner">
            <i className="fas fa-lock text-2xl"></i>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Acesso do Recrutamento</h1>
          <p className="text-slate-500 text-xs sm:text-sm mb-6">Digite sua senha para acessar os candidatos.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                value={pin}
                onChange={(e) => { setPin(e.target.value); setError(''); }}
                className="w-full text-center text-xl sm:text-2xl tracking-wider font-mono py-3.5 pl-4 pr-12 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900"
                placeholder="Senha de acesso"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                title={showPassword ? "Ocultar senha" : "Ver senha"}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
              </button>
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-bold text-center">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-blue-600/25 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>Entrar no Painel</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </form>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <i className="fas fa-shield-alt text-emerald-500"></i>
            <span>Star Cleaning SC &bull; Portal Seguro</span>
          </div>
        </div>
      </div>
    );
  }

  // Divisão entre Novos Leads (Setembro em diante) e Arquivo Antigo (Agosto pra trás)
  const newApplicants = applicants.filter(a => !isOldLead(a));
  const archiveApplicants = applicants.filter(a => isOldLead(a));

  // Base ativa de acordo com a tela selecionada
  const currentBase = viewSection === 'new' 
    ? newApplicants 
    : viewSection === 'archive' 
    ? archiveApplicants 
    : applicants;

  // Estatísticas calculadas dinamicamente para a tela ativa
  const avgScore = currentBase.length > 0 
    ? Math.round(currentBase.reduce((acc, curr) => acc + (curr.qualification_score || 0), 0) / currentBase.length) 
    : 0;
  const topCandidatesNum = currentBase.filter(a => (a.qualification_score || 0) >= 80).length;
  const todayCandidatesNum = currentBase.filter(a => a.created_at && isToday(new Date(a.created_at))).length;

  // Filtragem por busca (nome, telefone, cidade)
  const searchedApplicants = currentBase.filter(app => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const name = (app.full_name || '').toLowerCase();
    const phone = (app.phone || '').toLowerCase();
    const city = (app.city || '').toLowerCase();
    return name.includes(q) || phone.includes(q) || city.includes(q);
  });

  // Filtragem por abas secundárias
  const filteredApplicants = searchedApplicants.filter(app => {
    if (activeTab === 'today') return app.created_at && isToday(new Date(app.created_at));
    if (activeTab === 'top') return (app.qualification_score || 0) >= 80;
    if (activeTab === 'needs_review') return (app.qualification_score || 0) < 80 && (app.qualification_score || 0) >= 50;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-28 sm:pb-20 antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Top Mobile-Optimized App Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/25 font-black text-sm">
              ★
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-xl font-black text-slate-900 truncate">
                  Recrutamento
                </h1>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60 hidden xs:inline-block">
                  Admin
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate hidden sm:block">
                Star Cleaning SC &bull; Careers Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => performFetch(pin, true)} 
              disabled={isRefreshing}
              className="p-2 sm:px-3 sm:py-2 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-1.5 touch-manipulation"
              title="Atualizar lista"
            >
              <i className={`fas fa-sync-alt ${isRefreshing ? 'fa-spin text-blue-600' : ''}`}></i>
              <span className="hidden sm:inline">Atualizar</span>
            </button>

            <button 
              onClick={handleClearSection} 
              className="p-2 sm:px-3 sm:py-2 bg-red-50 hover:bg-red-100 active:scale-95 text-red-600 font-bold text-xs sm:text-sm rounded-xl transition-all border border-red-100 flex items-center gap-1.5 touch-manipulation"
              title="Limpar registros desta tela"
            >
              <i className="fas fa-trash-alt"></i>
              <span className="hidden md:inline">Limpar Tela</span>
            </button>
          </div>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4">

        {/* Segmented Control: Novos Leads vs Arquivo Antigo (Mobile Native Style) */}
        <div className="bg-slate-200/80 p-1.5 rounded-2xl mb-4 flex items-center gap-1 shadow-inner">
          
          {/* Aba 1: Novos Leads */}
          <button
            onClick={() => { setViewSection('new'); setActiveTab('all'); }}
            className={`flex-1 py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation ${
              viewSection === 'new'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                : 'text-slate-600 hover:text-slate-900 active:bg-slate-300/60'
            }`}
          >
            <i className="fas fa-inbox text-xs"></i>
            <span className="truncate">Novos Leads</span>
            <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-black ${
              viewSection === 'new' ? 'bg-white/25 text-white' : 'bg-slate-300 text-slate-700'
            }`}>
              {newApplicants.length}
            </span>
          </button>

          {/* Aba 2: Arquivo Antigo */}
          <button
            onClick={() => { setViewSection('archive'); setActiveTab('all'); }}
            className={`flex-1 py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation ${
              viewSection === 'archive'
                ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/30'
                : 'text-slate-600 hover:text-slate-900 active:bg-slate-300/60'
            }`}
          >
            <i className="fas fa-archive text-xs"></i>
            <span className="truncate">Arquivo (Até Ago)</span>
            <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-black ${
              viewSection === 'archive' ? 'bg-white/25 text-white' : 'bg-slate-300 text-slate-700'
            }`}>
              {archiveApplicants.length}
            </span>
          </button>

          {/* Aba 3: Todos */}
          <button
            onClick={() => { setViewSection('all'); setActiveTab('all'); }}
            className={`hidden xs:flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all gap-1.5 touch-manipulation ${
              viewSection === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 active:bg-slate-300/60'
            }`}
            title="Todos os registros"
          >
            <i className="fas fa-layer-group text-xs"></i>
            <span className="hidden sm:inline">Todos</span>
            <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-black ${
              viewSection === 'all' ? 'bg-white/25 text-white' : 'bg-slate-300 text-slate-700'
            }`}>
              {applicants.length}
            </span>
          </button>

        </div>

        {/* Search Bar Mobile-Friendly */}
        <div className="relative mb-4">
          <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome, telefone ou cidade..."
            className="w-full pl-9 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs transition-all touch-manipulation"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 active:scale-95"
            >
              <i className="fas fa-times-circle text-base"></i>
            </button>
          )}
        </div>

        {/* Compact 3-Column Metrics Dashboard (Mobile-Ergonomic) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
          
          <div className="bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-tight truncate block mb-0.5">
              {viewSection === 'new' ? 'Novos' : viewSection === 'archive' ? 'Arquivo' : 'Total'}
            </span>
            <span className="text-xl sm:text-3xl font-black text-slate-900 leading-none">
              {currentBase.length}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 hidden sm:block">candidatos</span>
          </div>

          <div className="bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-tight truncate block mb-0.5">
              Média
            </span>
            <span className="text-xl sm:text-3xl font-black text-blue-600 leading-none">
              {avgScore}<span className="text-xs font-bold text-blue-400">/100</span>
            </span>
            <span className="text-[10px] text-slate-400 mt-1 hidden sm:block">pontuação geral</span>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white p-2.5 sm:p-4 rounded-2xl shadow-sm shadow-emerald-600/20 text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs font-bold text-emerald-100 uppercase tracking-tight truncate block mb-0.5">
              Top Stars
            </span>
            <span className="text-xl sm:text-3xl font-black leading-none">
              {topCandidatesNum}
            </span>
            <span className="text-[10px] text-emerald-100 mt-1 hidden sm:block">&gt;80 pontos</span>
          </div>

        </div>

        {/* Horizontal Sub-Filter Tabs (Scrollable on Mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-2 no-scrollbar touch-pan-x -mx-3 px-3 sm:mx-0 sm:px-0">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all touch-manipulation flex items-center gap-1.5 ${
              activeTab === 'all' 
                ? 'bg-slate-900 text-white shadow-xs' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 active:bg-slate-100'
            }`}
          >
            <span>Todos</span>
            <span className="opacity-70 text-[11px]">({currentBase.length})</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('today')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all touch-manipulation flex items-center gap-1.5 ${
              activeTab === 'today' 
                ? 'bg-blue-600 text-white shadow-xs shadow-blue-500/25' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-blue-600 active:bg-slate-100'
            }`}
          >
            <i className="fas fa-bolt text-[10px] text-amber-300"></i>
            <span>Hoje</span>
            <span className="opacity-70 text-[11px]">({todayCandidatesNum})</span>
          </button>

          <button 
            onClick={() => setActiveTab('top')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all touch-manipulation flex items-center gap-1.5 ${
              activeTab === 'top' 
                ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-500/25' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 active:bg-slate-100'
            }`}
          >
            <i className="fas fa-star text-[10px] text-amber-300"></i>
            <span>Top (&gt;80)</span>
            <span className="opacity-70 text-[11px]">({topCandidatesNum})</span>
          </button>

          <button 
            onClick={() => setActiveTab('needs_review')}
            className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all touch-manipulation ${
              activeTab === 'needs_review' 
                ? 'bg-amber-600 text-white shadow-xs' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-700 active:bg-slate-100'
            }`}
          >
            Abaixo de 80
          </button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-16 text-slate-400">
            <i className="fas fa-spinner fa-spin text-3xl mb-3 text-blue-600"></i>
            <p className="text-sm font-semibold text-slate-600">Carregando candidatos...</p>
          </div>
        ) : filteredApplicants.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-2xs my-4">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-400 text-2xl">
              <i className={`fas ${searchQuery ? 'fa-search' : viewSection === 'new' ? 'fa-inbox' : 'fa-archive'}`}></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {searchQuery ? 'Nenhum lead encontrado' : 'Nenhum candidato nesta fila'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              {searchQuery 
                ? `Nenhum resultado para "${searchQuery}". Tente outro termo.` 
                : viewSection === 'new' 
                ? 'Nenhum novo lead recebido recentemente. Conforme novas aplicações entrarem pelo /careers, elas aparecerão aqui automaticamente.' 
                : 'O arquivo antigo está vazio.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 active:scale-95 transition-all"
              >
                Limpar busca
              </button>
            )}
          </div>
        ) : (
          /* Applicant Cards Grid (Optimized for Mobile Touch) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {filteredApplicants.map((app) => {
              const old = isOldLead(app);
              const today = app.created_at && isToday(new Date(app.created_at));
              const score = app.qualification_score || 0;

              return (
                <div 
                  key={app.id} 
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col shadow-2xs hover:shadow-md ${
                    today 
                      ? 'border-blue-400 ring-2 ring-blue-500/10' 
                      : old 
                      ? 'border-slate-200/80' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  
                  {/* Top Card Header */}
                  <div className="p-4 sm:p-5 pb-3 sm:pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      
                      {/* Name & Status Badges */}
                      <div className="flex items-center gap-1.5 flex-wrap mb-1">
                        <h3 
                          onClick={() => setSelectedApplicant(app)}
                          className="font-bold text-slate-900 text-base sm:text-lg leading-tight truncate cursor-pointer hover:text-blue-600 active:text-blue-800 transition-colors"
                          title={app.full_name}
                        >
                          {app.full_name || 'Sem Nome'}
                        </h3>
                        
                        {today ? (
                          <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider rounded-md animate-pulse shrink-0 shadow-xs shadow-blue-500/20">
                            Hoje
                          </span>
                        ) : old ? (
                          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase rounded-md border border-slate-200 shrink-0">
                            Arquivo
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-bold uppercase rounded-md border border-emerald-200 shrink-0">
                            Novo
                          </span>
                        )}
                      </div>

                      {/* City, Date and Phone */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          <i className="fas fa-map-marker-alt text-slate-400 text-[11px]"></i>
                          <span className="truncate max-w-[120px]">{app.city || 'Charleston/SC'}</span>
                        </span>
                        <span>&bull;</span>
                        <span className="text-slate-400 text-[11px]">
                          {formatShortDate(app.created_at)}
                        </span>
                      </div>

                    </div>

                    {/* Score Circle Badge */}
                    <div 
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center shrink-0 font-black shadow-inner ${
                        score >= 80 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : score >= 50 
                          ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                      title={`Pontuação: ${score}/100`}
                    >
                      <span className="text-sm sm:text-base leading-none">{score}</span>
                      <span className="text-[8px] uppercase tracking-tighter opacity-70">pts</span>
                    </div>
                  </div>

                  {/* Quick-Tags Pill Overview (Mobile Scannable) */}
                  <div 
                    onClick={() => setSelectedApplicant(app)} 
                    className="p-4 sm:p-5 py-3 sm:py-3.5 space-y-2 flex-grow cursor-pointer"
                  >
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      
                      {/* Experiência */}
                      <div className="bg-slate-50 p-2 rounded-xl flex items-center gap-2 border border-slate-100">
                        <i className="fas fa-briefcase text-blue-500 text-xs shrink-0"></i>
                        <span className="text-slate-700 truncate font-medium">{tVal(app.experience)}</span>
                      </div>

                      {/* Veículo */}
                      <div className={`p-2 rounded-xl flex items-center gap-2 border ${
                        app.has_transport 
                          ? 'bg-emerald-50/70 border-emerald-100 text-emerald-800' 
                          : 'bg-red-50/70 border-red-100 text-red-700'
                      }`}>
                        <i className={`fas text-xs shrink-0 ${app.has_transport ? 'fa-car text-emerald-600' : 'fa-ban text-red-500'}`}></i>
                        <span className="truncate font-medium">{app.has_transport ? 'Carro Próprio' : 'Sem Carro'}</span>
                      </div>

                      {/* Autorização */}
                      <div className={`p-2 rounded-xl flex items-center gap-2 border ${
                        app.work_auth 
                          ? 'bg-blue-50/60 border-blue-100 text-blue-900' 
                          : 'bg-amber-50/70 border-amber-100 text-amber-800'
                      }`}>
                        <i className={`fas text-xs shrink-0 ${app.work_auth ? 'fa-id-card text-blue-600' : 'fa-exclamation-triangle text-amber-500'}`}></i>
                        <span className="truncate font-medium">{app.work_auth ? 'Autorizado EUA' : 'Sem Autorização'}</span>
                      </div>

                      {/* Início */}
                      <div className="bg-slate-50 p-2 rounded-xl flex items-center gap-2 border border-slate-100">
                        <i className="fas fa-calendar-check text-slate-400 text-xs shrink-0"></i>
                        <span className="text-slate-700 truncate font-medium">{tVal(app.start_date)}</span>
                      </div>

                    </div>

                    {/* Preview de "Why Us" se preenchido */}
                    {app.why_us && (
                      <p className="text-[11px] text-slate-500 line-clamp-1 italic pt-1">
                        &ldquo;{app.why_us}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Card Bottom Actions (Mobile-Optimized Touch Targets) */}
                  <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2 mt-auto">
                    
                    {/* Botão de Ver Detalhes */}
                    <button 
                      onClick={() => setSelectedApplicant(app)}
                      className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 touch-manipulation"
                    >
                      <i className="fas fa-eye text-slate-400 text-xs"></i>
                      <span>Detalhes</span>
                    </button>

                    {/* Botão WhatsApp Direto */}
                    <a 
                      href={getWaLink(app.phone, app.full_name)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 bg-[#25D366] hover:bg-[#1ebd5a] active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs shadow-green-600/20 flex items-center justify-center gap-1.5 touch-manipulation"
                    >
                      <i className="fab fa-whatsapp text-sm"></i>
                      <span>WhatsApp</span>
                    </a>

                    {/* Botão Ligar Rápido no Mobile */}
                    <a 
                      href={getTelLink(app.phone)}
                      className="w-10 h-10 bg-blue-50 text-blue-600 hover:bg-blue-100 active:scale-95 rounded-xl border border-blue-100 flex items-center justify-center shrink-0 touch-manipulation"
                      title="Ligar para candidato"
                    >
                      <i className="fas fa-phone-alt text-xs"></i>
                    </a>

                    {/* Botão Excluir */}
                    <button 
                      onClick={() => handleDeleteApplicant(app.id)}
                      className="w-10 h-10 bg-red-50 text-red-500 hover:bg-red-100 active:scale-95 rounded-xl border border-red-100 flex items-center justify-center shrink-0 touch-manipulation"
                      title="Apagar candidato"
                    >
                      <i className="fas fa-trash-alt text-xs"></i>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Details Bottom Sheet / Modal (Fully Mobile-Friendly) */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedApplicant(null)}
          ></div>

          {/* Sheet Container */}
          <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden animate-slide-up sm:animate-none">
            
            {/* Mobile Drag Indicator Bar */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-2.5 sm:hidden shrink-0"></div>

            {/* Modal Header */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-5 border-b border-slate-100 flex items-start justify-between gap-3 bg-white sticky top-0 z-10">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug truncate">
                    {selectedApplicant.full_name || 'Candidato'}
                  </h2>
                  {isOldLead(selectedApplicant) ? (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md border border-slate-200">
                      Arquivo (Até Agosto)
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-md border border-blue-200">
                      Novo Lead
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-xs">
                  {formatDateInfo(selectedApplicant.created_at)} &bull; {selectedApplicant.city || 'Charleston/SC'}
                </p>
              </div>

              <button 
                onClick={() => setSelectedApplicant(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-500 flex items-center justify-center shrink-0 transition-colors touch-manipulation"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="px-5 sm:px-8 py-4 sm:py-6 overflow-y-auto space-y-5">
              
              {/* Score & Contact Bar */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3.5 sm:p-4 rounded-2xl border border-blue-100/80">
                  <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    Pontuação Geral
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-blue-700 leading-none">
                    {selectedApplicant.qualification_score || 0}<span className="text-sm font-bold text-blue-400">/100</span>
                  </p>
                </div>

                <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Telefone
                  </span>
                  <a 
                    href={getTelLink(selectedApplicant.phone)}
                    className="text-base sm:text-lg font-bold text-slate-900 block truncate hover:text-blue-600"
                  >
                    {selectedApplicant.phone || 'Sem número'}
                  </a>
                </div>
              </div>

              {/* Perguntas e Respostas da Aplicação */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Respostas do Formulário
                </h4>
                
                <div className="bg-slate-50 rounded-2xl border border-slate-200/70 divide-y divide-slate-100 text-sm">
                  
                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Experiência prévia:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm capitalize text-right">{tVal(selectedApplicant.experience)}</span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Disponibilidade:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm capitalize text-right">{tVal(selectedApplicant.availability)}</span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Início desejado:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm capitalize text-right">{tVal(selectedApplicant.start_date)}</span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Veículo próprio:</span>
                    <span className={`font-bold text-xs sm:text-sm text-right ${selectedApplicant.has_transport ? 'text-emerald-600' : 'text-red-600'}`}>
                      {selectedApplicant.has_transport ? 'Sim (Possui transporte)' : 'Não'}
                    </span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Trabalho solo:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm text-right">
                      {selectedApplicant.comfortable_solo ? 'Sim (Trabalha sozinho)' : 'Não (Prefere equipe)'}
                    </span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Atenção a checklists:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm capitalize text-right">{tVal(selectedApplicant.detail_oriented)}</span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex justify-between items-center gap-3">
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">Autorização EUA:</span>
                    <span className={`font-bold text-xs sm:text-sm text-right ${selectedApplicant.work_auth ? 'text-blue-700' : 'text-red-600'}`}>
                      {selectedApplicant.work_auth ? 'Sim (Autorizado)' : 'Não'}
                    </span>
                  </div>

                </div>
              </div>

              {/* Mensagem "Why Us" */}
              {selectedApplicant.why_us && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Por que deseja trabalhar conosco?
                  </h4>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{selectedApplicant.why_us}&rdquo;
                  </div>
                </div>
              )}

            </div>

            {/* Sticky Modal Bottom Action Bar (Thumb Reachable on Mobile) */}
            <div className="p-3 sm:p-5 bg-white border-t border-slate-100 flex items-center gap-2.5 sticky bottom-0 z-10 pb-safe">
              
              <a 
                href={getTelLink(selectedApplicant.phone)}
                className="py-3 px-3.5 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation"
              >
                <i className="fas fa-phone-alt"></i>
                <span className="hidden xs:inline">Ligar</span>
              </a>

              <a 
                href={getWaLink(selectedApplicant.phone, selectedApplicant.full_name)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1ebd5a] active:scale-98 text-white font-bold text-center rounded-2xl transition-all shadow-md shadow-green-600/20 flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>Chamar no WhatsApp</span>
              </a>

              <button 
                onClick={() => handleDeleteApplicant(selectedApplicant.id)}
                className="w-12 h-12 bg-red-50 hover:bg-red-100 active:scale-95 text-red-500 font-bold rounded-2xl border border-red-100 flex items-center justify-center shrink-0 transition-colors touch-manipulation"
                title="Apagar este candidato"
              >
                <i className="fas fa-trash-alt text-sm"></i>
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
