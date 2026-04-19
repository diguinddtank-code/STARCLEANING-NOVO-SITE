"use client";

import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { supabase } from '@/lib/supabase';

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
  
  const [activeTab, setActiveTab] = useState<'all' | 'top' | 'needs_review'>('all');
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

  const handleClearAll = async () => {
    const isConfirmed = window.confirm("ATENÇÃO: Você tem certeza que deseja EXCLUIR TODOS os leads da lista? Isso não pode ser desfeito.");
    if (!isConfirmed) return;

    try {
      setIsLoading(true);
      
      const validPins = ['7827', 'star20'];
      if (!validPins.includes(pin)) {
        throw new Error('PIN Inválido');
      }

      const { error } = await supabase
        .from('job_applications')
        .delete()
        .gte('qualification_score', -1);
        
      if (error) throw new Error(error.message);

      setApplicants([]);
      setSelectedApplicant(null);
    } catch (err) {
      console.error("Error clearing applicants:", err);
      alert("Erro ao limpar a lista. Talvez restrições de permissão estejam ativas no Supabase.");
    } finally {
      setIsLoading(false);
    }
  };

  const getWaLink = (phone: string) => {
    if (!phone) return '#';
    // Mantenha apenas números
    let cleanPhone = phone.replace(/\D/g, '');
    // Se o número tiver 10 dígitos (padrão americano sem DDI), adiciona 1 no começo
    if (cleanPhone.length === 10) cleanPhone = '1' + cleanPhone;
    return `https://wa.me/${cleanPhone}`;
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

  const avgScore = applicants.length > 0 ? Math.round(applicants.reduce((acc, curr) => acc + (curr.qualification_score || 0), 0) / applicants.length) : 0;
  const topCandidatesNum = applicants.filter(a => a.qualification_score >= 80).length;

  const filteredApplicants = applicants.filter(app => {
    if (activeTab === 'top') return app.qualification_score >= 80;
    if (activeTab === 'needs_review') return app.qualification_score < 80 && app.qualification_score >= 50;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Gestão de Candidatos</h1>
            <p className="text-gray-500 font-medium mt-1">Gerencie e entre em contato com seus candidatos a Cleaning Technician.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleClearAll} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-lg hover:bg-red-100 transition-colors">
              <i className="fas fa-trash-alt"></i> Limpar Fila
            </button>
            <button onClick={() => performFetch(pin)} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-colors">
              <i className="fas fa-sync-alt"></i> Atualizar
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total de Leads</p>
              <h2 className="text-4xl font-black text-gray-900">{applicants.length}</h2>
            </div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
              <i className="fas fa-users"></i>
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

        {/* Filters/Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeTab === 'all' ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            Todos os Leads ({applicants.length})
          </button>
          <button 
            onClick={() => setActiveTab('top')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${activeTab === 'top' ? 'bg-green-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-green-600 hover:border-green-200'}`}
          >
            <i className="fas fa-star text-xs"></i> Maior Afinidade ({topCandidatesNum})
          </button>
          <button 
            onClick={() => setActiveTab('needs_review')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeTab === 'needs_review' ? 'bg-orange-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600'}`}
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
              <i className="fas fa-inbox"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Nenhum candidato</h3>
            <p className="text-gray-500">Não há resultados para exibir neste filtro no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplicants.map((app) => (
              <div key={app.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-5 border-b border-gray-50 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg truncate pr-2" title={app.full_name}>{app.full_name || 'N/A'}</h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5"><i className="fas fa-map-marker-alt"></i> {app.city || 'Desconhecida'}</p>
                  </div>
                  <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-full font-black text-lg shadow-inner ${
                    app.qualification_score >= 80 ? 'bg-green-100 text-green-700' : 
                    app.qualification_score >= 50 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {app.qualification_score}
                  </div>
                </div>
                
                <div className="p-5 flex-grow space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0"><i className="fas fa-briefcase"></i></div>
                    <div className="font-medium text-gray-700 capitalize">{tVal(app.experience)}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${app.has_transport ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                      <i className={`fas ${app.has_transport ? 'fa-car' : 'fa-ban'}`}></i>
                    </div>
                    <div className="font-medium text-gray-700">{app.has_transport ? 'Possui Veículo Próprio' : 'Sem Transporte'}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${app.work_auth ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-500'}`}>
                      <i className={`fas ${app.work_auth ? 'fa-id-card' : 'fa-ban'}`}></i>
                    </div>
                    <div className="font-medium text-gray-700">{app.work_auth ? 'Trabalhador Autorizado (EUA)' : 'Sem Autorização'}</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-3 mt-auto">
                    <button 
                      onClick={() => setSelectedApplicant(app)}
                      className="py-2.5 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                    <a 
                      href={getWaLink(app.phone)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#1ebd5a] transition-colors flex items-center justify-center gap-2 shadow-sm shadow-green-600/20"
                    >
                      <i className="fab fa-whatsapp text-lg"></i> Chamar
                    </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedApplicant(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col">
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-start justify-between sticky top-0 bg-white/90 backdrop-blur z-10">
              <div>
                <h2 className="text-2xl font-black text-gray-900">{selectedApplicant.full_name}</h2>
                <p className="text-gray-500 text-sm mt-1">Preencheu {selectedApplicant.created_at ? formatDistanceToNow(new Date(selectedApplicant.created_at), { locale: ptBR, addSuffix: true }) : ''} via {selectedApplicant.language_used?.toUpperCase() || 'EN'}</p>
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
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 border-b pb-2">Perguntas & Respostas</h4>
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
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2"><i className="fas fa-quote-left text-gray-300 mr-2"></i> Por que deseja trabalhar conosco?</p>
                <p className="text-gray-800 italic leading-relaxed text-sm">
                  "{selectedApplicant.why_us}"
                </p>
              </div>

            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-4 sticky bottom-0">
               <a 
                  href={getWaLink(selectedApplicant.phone)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#25D366] text-white font-bold text-center rounded-xl hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-green-600/20"
                >
                  <i className="fab fa-whatsapp text-xl mr-2 align-middle"></i> Abrir Conversa no WhatsApp
                </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
