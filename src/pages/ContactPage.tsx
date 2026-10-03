import React from 'react';
import { Phone, MessageCircle, Instagram, Clock, ExternalLink } from 'lucide-react';
import { SITE } from '../config/siteConfig.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { GHLForm } from '../components/common/GHLForm.tsx';
import { openGHLChatWidget } from '../utils/chatWidget.ts';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      <SEOHead
        title="Contato | RJPH Elétrica e Refrigeração"
        description="Fale diretamente com a RJPH Elétrica e Refrigeração. Solicite orçamento pelo formulário ou tire dúvidas no chat online."
        pathname="/contact"
      />

      {/* Hero */}
      <div className="bg-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Contato' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B4D8]">
              Canais Oficiais
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Fale com a RJPH
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Solicite seu orçamento pelo formulário integrado ou converse com nossa equipe no chat online.
            </p>
          </div>
        </div>
      </div>

      {/* DEGRADÊ SUAVE: Transição de Banner Escuro (#0B192C) para Conteúdo Claro (#F8FAFC) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-[#0B192C] via-[#1E293B]/25 via-slate-100 to-[#F8FAFC] pointer-events-none" />

      {/* Main Content: Info on left, GHL form on right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Atendimento Direto
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                Estamos prontos para atender sua solicitação
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Utilize o canal de sua preferência. Respondemos suas dúvidas sobre instalação de ar-condicionado, refrigeração e serviços elétricos.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Chat Online Card */}
              <button
                type="button"
                onClick={openGHLChatWidget}
                className="group w-full text-left flex items-start gap-4 p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004B87] to-[#0077B6] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                    Atendimento Imediato
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B87] transition-colors">
                    Iniciar Chat Online
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Converse em tempo real com nossa equipe pelo assistente do site.
                  </p>
                </div>
              </button>

              {/* Phone Card */}
              <a
                href={SITE.phoneTel}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0077B6] hover:bg-white transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004B87] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                    Telefone Oficial
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B87] transition-colors">
                    {SITE.phoneDisplay}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Ligação direta para alinhamento rápido.
                  </p>
                </div>
              </a>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#00B4D8] flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Disponibilidade
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {SITE.hours.summary}
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0077B6] hover:bg-white transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Rede Social Oficial
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#004B87] transition-colors inline-flex items-center gap-1.5">
                    <span>{SITE.instagram.handle}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Acompanhe o perfil profissional de Rafael Santos.
                  </p>
                </div>
              </a>

            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 space-y-4">
            <GHLForm
              onSuccess={() => onNavigate('/thank-you')}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
