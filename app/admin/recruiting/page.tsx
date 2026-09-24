"use client";

import React, { useState } from 'react';
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
  const [error, setError] = useState('');
  
  const [applicants, setApplicants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Controle de Tela: 'new' (Setembro em diante) vs 'archive' (Agosto pra trás) vs 'all' (Tudo)
  const [viewSection, setViewSection] = useState<'new' | 'archive' | 'all'>('new');
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'needs_review' | 'today'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);

  const performFetch = async (currentPin: string) => {
    setIsLoading(true);
    try {
      const validPins = ['7827', 'star20'];
      if (!validPins.includes(currentPin)) {
        throw new Error('PIN Inválido');
      }

      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw new Error(error.message);

      setApplicants(data || []);
      setIsAuthenticated(true);
      setError('');
    } catch (err: any) {
      console.error("Error fetching applicants:", err);
      setError(err.message || 'Senha Inválida ou Falha na Conexão');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

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
      
      const validPins = ['7827', 'star20'];
      if (!validPins.includes(pin)) {
        throw new Error('PIN Inválido');
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

      await performFetch(pin);
      setSelectedApplicant(null);
    } catch (err) {
      console.error("Error clearing applicants:", err);
      alert("Erro ao limpar a lista. Talvez restrições de permissão estejam ativas no Supabase.");
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

  const getWaLink = (phone: string) => {
    if (!phone) return '#';
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length === 10) cleanPhone = '1' + cleanPhone;
    return `https://wa.me/${cleanPhone}`;
  };

  const formatDateInfo = (dateString?: string) => {
    if (!dateString) return 'Data não disponível';
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 selection:bg-blue-500 selection:text-white">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-lock text-blue-600 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">Acesso da Equipe</h1>
          <p className="text-gray-500 text-sm mb-6">Digite o PIN para acessar o recrutamento.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={pin}
                onChange={(e) => { setPin(e.target.value); setError(''); }}
                className="w-full text-center text-2xl tracking-[0.5em] font-mono px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••"
                autoFocus
              />
              {error && <p className="text-red-500 text-xs font-bold mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all">
              Desbloquear
            </button>
          </form>
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-black text-gray-900">Gestão de Candidatos</h1>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                Careers Hub
              </span>
            </div>
            <p className="text-gray-500 font-medium mt-1 text-sm sm:text-base">
              Gerencie, filtre e contate os candidatos a Cleaning Technician da Star Cleaning SC.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={handleClearSection} 
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold text-sm rounded-xl hover:bg-red-100 transition-colors border border-red-100"
              title={`Limpar fila de ${viewSection === 'new' ? 'novos leads' : viewSection === 'archive' ? 'arquivo antigo' : 'todos'}`}
            >
              <i className="fas fa-trash-alt"></i> 
              <span>Limpar Esta Tela</span>
            </button>
            <button 
              onClick={() => performFetch(pin)} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-bold text-sm rounded-xl hover:bg-blue-100 transition-colors border border-blue-100"
            >
              <i className="fas fa-sync-alt"></i> 
              <span>Atualizar</span>
            </button>
          </div>
        </header>

        {/* Seletor Principal de Telas (Novos Leads vs Arquivo Antigo de Agosto) */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200/80 mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1.5 overflow-x-auto no-scrollbar">
            
            {/* Tela 1: Novos Leads (Setembro em diante) */}
            <button
              onClick={() => { setViewSection('new'); setActiveTab('all'); }}
              className={`flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                viewSection === 'new'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fas fa-inbox text-sm"></i>
              <span>Novos Leads</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                viewSection === 'new' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                {newApplicants.length}
              </span>
            </button>

            {/* Tela 2: Arquivo Antigo (De Agosto pra trás) */}
            <button
              onClick={() => { setViewSection('archive'); setActiveTab('all'); }}
              className={`flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                viewSection === 'archive'
                  ? 'bg-slate-800 text-white shadow-md shadow-slate-900/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fas fa-archive text-sm"></i>
              <span>Arquivo Antigo (Até Agosto)</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                viewSection === 'archive' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                {archiveApplicants.length}
              </span>
            </button>

            {/* Tela 3: Todos os Leads (Unificado) */}
            <button
              onClick={() => { setViewSection('all'); setActiveTab('all'); }}
              className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                viewSection === 'all'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Visualizar todos os registros de uma só vez"
            >
              <i className="fas fa-layer-group text-sm"></i>
              <span>Todos</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                viewSection === 'all' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-800'
              }`}>
                {applicants.length}
              </span>
            </button>
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative flex-1 lg:max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, telefone ou cidade..."
              className="w-full pl-9 pr-9 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
        </div>

        {/* Banner Explicativo da Tela Atual */}
        {viewSection === 'new' ? (
          <div className="bg-blue-50/80 border border-blue-200/70 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                <i className="fas fa-sparkles"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Fila Ativa: Novos Leads (Setembro em Diante)</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Esta tela exibe apenas os novos candidatos recebidos recentemente. Leads anteriores estão arquivados separadamente para manter sua fila limpa e organizada.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-xl border border-blue-200 shrink-0">
              {newApplicants.length} leads novos
            </span>
          </div>
        ) : viewSection === 'archive' ? (
          <div className="bg-slate-100 border border-slate-300/80 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm shadow-slate-900/20">
                <i className="fas fa-archive"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Arquivo Histórico: Leads Anteriores (Até Agosto)</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Registros recebidos até 31 de Agosto de 2026. Armazenados com segurança nesta tela exclusiva para não poluir sua triagem diária.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-300 shrink-0">
              {archiveApplicants.length} no arquivo
            </span>
          </div>
        ) : (
          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0">
                <i className="fas fa-layer-group"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Visão Unificada: Todos os Candidatos</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Exibindo todos os registros combinados (novos leads e arquivo histórico de agosto).
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-gray-800 bg-white px-3 py-1.5 rounded-xl border border-gray-300 shrink-0">
              Total: {applicants.length}
            </span>
          </div>
        )}

        {/* Stats Row (Adaptado dinamicamente para a tela ativa) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                {viewSection === 'new' ? 'Novos Leads' : viewSection === 'archive' ? 'Leads no Arquivo' : 'Total de Leads'}
              </p>
              <h2 className="text-4xl font-black text-gray-900">{currentBase.length}</h2>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
              viewSection === 'new' ? 'bg-blue-100 text-blue-600' : viewSection === 'archive' ? 'bg-slate-200 text-slate-800' : 'bg-gray-100 text-gray-700'
            }`}>
              <i className={`fas ${viewSection === 'new' ? 'fa-inbox' : viewSection === 'archive' ? 'fa-archive' : 'fa-users'}`}></i>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Média de Qualificação</p>
              <h2 className="text-4xl font-black text-blue-600">{avgScore} / 100</h2>
            </div>
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-lg border border-green-400 flex items-center justify-between text-white">
            <div>
              <p className="text-xs font-bold text-green-100 uppercase tracking-widest mb-1">Super Candidatos</p>
              <h2 className="text-4xl font-black text-white">{topCandidatesNum} <span className="text-lg font-medium text-green-200">leads &gt;80 pts</span></h2>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
              <i className="fas fa-star text-white"></i>
            </div>
          </div>
        </div>

        {/* Sub-Filters / Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
              activeTab === 'all' 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Todos Nesta Tela ({currentBase.length})
          </button>
          <button 
            onClick={() => setActiveTab('today')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'today' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'
            }`}
          >
            <i className="fas fa-calendar-day text-xs"></i> Hoje ({todayCandidatesNum})
          </button>
          <button 
            onClick={() => setActiveTab('top')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'top' 
                ? 'bg-green-500 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-600 hover:border-green-200'
            }`}
          >
            <i className="fas fa-star text-xs"></i> Maior Afinidade ({topCandidatesNum})
          </button>
          <button 
            onClick={() => setActiveTab('needs_review')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
              activeTab === 'needs_review' 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            Abaixo da Média
          </button>
        </div>

        {/* Applicants Grid */}
        {isLoading ? (
          <div className="text-center py-20 text-gray-400 font-medium">
            <i className="fas fa-spinner fa-spin text-3xl mb-4 text-blue-500"></i>
            <p>Carregando seus leads...</p>
          </div>
        ) : filteredApplicants.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
              <i className={`fas ${searchQuery ? 'fa-search' : viewSection === 'new' ? 'fa-inbox' : 'fa-archive'}`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {searchQuery ? 'Nenhum lead encontrado' : 'Nenhum candidato nesta tela'}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {searchQuery 
                ? `Nenhum resultado corresponde à busca "${searchQuery}".` 
                : viewSection === 'new' 
                ? 'Não há novos leads recebidos recentemente no momento. Assim que novos candidatos se aplicarem em /careers, eles aparecerão aqui automaticamente.' 
                : 'Não há registros no arquivo antigo.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors"
              >
                Limpar busca
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplicants.map((app) => {
              const old = isOldLead(app);
              const today = app.created_at && isToday(new Date(app.created_at));

              return (
                <div 
                  key={app.id} 
                  className={`bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow flex flex-col ${
                    old ? 'border-slate-200' : 'border-blue-100/80 ring-1 ring-blue-50'
                  }`}
                >
                  <div className="p-5 border-b border-gray-50 flex justify-between items-start">
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <h3 className="font-bold text-gray-900 text-lg truncate" title={app.full_name}>
                          {app.full_name || 'N/A'}
                        </h3>
                        {today ? (
                          <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full animate-pulse whitespace-nowrap shadow-sm shadow-blue-500/20">
                            Novo Hoje
                          </span>
                        ) : old ? (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full border border-slate-200 whitespace-nowrap">
                            Arquivo (Até Ago)
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded-full border border-emerald-200 whitespace-nowrap">
                            Novo Lead
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-gray-400"></i> {app.city || 'Desconhecida'}
                        </span>
                        <span>&bull;</span>
                        <span className="text-gray-400">
                          {app.created_at ? format(new Date(app.created_at), 'dd/MM/yy') : ''}
                        </span>
                      </div>
                    </div>

                    <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-full font-black text-lg shadow-inner ${
                      (app.qualification_score || 0) >= 80 ? 'bg-green-100 text-green-700' : 
                      (app.qualification_score || 0) >= 50 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {app.qualification_score}
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow space-y-3.5">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                        <i className="fas fa-briefcase text-xs"></i>
                      </div>
                      <div className="font-medium text-gray-700 capitalize">{tVal(app.experience)}</div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${app.has_transport ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                        <i className={`fas text-xs ${app.has_transport ? 'fa-car' : 'fa-ban'}`}></i>
                      </div>
                      <div className="font-medium text-gray-700">{app.has_transport ? 'Possui Veículo Próprio' : 'Sem Transporte'}</div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${app.work_auth ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-500'}`}>
                        <i className={`fas text-xs ${app.work_auth ? 'fa-id-card' : 'fa-ban'}`}></i>
                      </div>
                      <div className="font-medium text-gray-700">{app.work_auth ? 'Trabalhador Autorizado (EUA)' : 'Sem Autorização'}</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2 mt-auto">
                    <button 
                      onClick={() => setSelectedApplicant(app)}
                      className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                    <a 
                      href={getWaLink(app.phone)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#1ebd5a] transition-colors flex items-center justify-center gap-2 shadow-sm shadow-green-600/20"
                    >
                      <i className="fab fa-whatsapp text-lg"></i> Chamar
                    </a>
                    <button 
                      onClick={() => handleDeleteApplicant(app.id)}
                      className="px-3 bg-red-50 text-red-600 font-bold text-sm rounded-xl hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center shrink-0"
                      title="Apagar Candidato"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedApplicant(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col">
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-start justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-2xl font-black text-gray-900">{selectedApplicant.full_name}</h2>
                  {isOldLead(selectedApplicant) ? (
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full border border-slate-200">
                      Arquivo (Até Agosto)
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                      Novo Lead
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Inscrição: {formatDateInfo(selectedApplicant.created_at)} &bull; Idioma: {selectedApplicant.language_used?.toUpperCase() || 'EN'}
                </p>
              </div>
              <button onClick={() => setSelectedApplicant(null)} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Pontuação</p>
                  <p className="text-2xl font-black text-blue-700">{selectedApplicant.qualification_score} / 100</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Telefone</p>
                  <p className="text-lg font-bold text-gray-900">{selectedApplicant.phone}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 border-b pb-2">Perguntas &amp; Respostas</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                    <span className="text-gray-500 font-medium text-sm">Experiência:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900 capitalize">{tVal(selectedApplicant.experience)}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Disponibilidade:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900 capitalize">{tVal(selectedApplicant.availability)}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Início:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900 capitalize">{tVal(selectedApplicant.start_date)}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Veículo Próprio:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900">{selectedApplicant.has_transport ? 'Sim' : 'Não'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Confortável Sozinho:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900">{selectedApplicant.comfortable_solo ? 'Sim' : 'Não (Prefere Equipe)'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Detalhes/Checklists:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900 capitalize">{tVal(selectedApplicant.detail_oriented)}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-50 pt-3">
                    <span className="text-gray-500 font-medium text-sm">Autorização nos EUA:</span>
                    <span className="sm:col-span-2 font-bold text-gray-900">{selectedApplicant.work_auth ? 'Sim' : 'Não'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  <i className="fas fa-quote-left text-gray-300 mr-2"></i> Por que deseja trabalhar conosco?
                </p>
                <p className="text-gray-800 italic leading-relaxed text-sm">
                  &ldquo;{selectedApplicant.why_us}&rdquo;
                </p>
              </div>

            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-4 sticky bottom-0">
               <button 
                  onClick={() => handleDeleteApplicant(selectedApplicant.id)}
                  className="px-6 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center gap-2 shrink-0 hidden sm:flex"
                >
                  <i className="fas fa-trash-alt"></i> Apagar
                </button>
               <button 
                  onClick={() => handleDeleteApplicant(selectedApplicant.id)}
                  className="w-12 h-12 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors border border-red-100 flex items-center justify-center shrink-0 sm:hidden"
                  title="Apagar Candidato"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
               <a 
                  href={getWaLink(selectedApplicant.phone)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#25D366] text-white font-bold text-center rounded-xl hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp text-xl mr-2"></i> Chamar
                </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
