import React from 'react';
import { Phone, MessageCircle, Instagram, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import { SITE } from '../config/siteConfig.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { CTASection } from '../components/common/CTASection.tsx';
import { openGHLChatWidget } from '../utils/chatWidget.ts';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="w-full pt-20">
      <SEOHead
        title="Sobre a RJPH | RJPH Elétrica e Refrigeração"
        description="Conheça a RJPH Elétrica e Refrigeração. Atendimento direto e técnico com Rafael Santos para serviços de ar-condicionado, refrigeração e elétrica."
        pathname="/about"
      />

      {/* Hero */}
      <div className="bg-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Sobre' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B4D8]">
              Institucional
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Conheça a RJPH Elétrica e Refrigeração
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Atendimento técnico conduzido de forma próxima, clara e focada na solução do cliente.
            </p>
          </div>
        </div>
      </div>

      {/* DEGRADÊ SUAVE: Transição de Banner Escuro (#0B192C) para Conteúdo Claro (#FFFFFF) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-[#0B192C] via-[#1E293B]/25 via-slate-100 to-white pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Identidade & Propósito
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                Atendimento próximo e comunicação direta com o profissional
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                A <strong className="text-slate-900 font-semibold">RJPH Elétrica e Refrigeração</strong> foi concebida para oferecer serviços especializados em climatização, refrigeração e instalações elétricas, eliminando intermediários e burocracias no atendimento.
              </p>
              <p>
                Com a atuação e liderança direta do profissional <strong className="text-slate-900 font-semibold">Rafael Santos</strong>, o cliente conversa diretamente com quem compreende as variáveis técnicas do serviço: desde a fixação e tubulação de um ar-condicionado até a revisão segura de um quadro elétrico.
              </p>
              <p>
                Nossa prioridade é orientar o cliente com clareza, esclarecer dúvidas antes da execução e realizar um trabalho limpo, organizado e com respeito às normas práticas de segurança técnica.
              </p>
            </div>

            <div className="pt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <span>Atendimento via Chat e Formulário</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <span>Pontualidade no agendamento</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <span>Transparência na avaliação</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <span>Cuidado com o ambiente do cliente</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Profile & Information Card */}
          <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="space-y-2 pb-4 border-b border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Responsável Técnico
              </div>
              <h3 className="text-2xl font-bold text-[#0B2545]">
                {SITE.contactPerson}
              </h3>
              <p className="text-sm text-slate-500">
                Especialista à frente da RJPH Elétrica e Refrigeração
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0077B6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Horário Oficial</span>
                  <span>{SITE.hours.summary}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0077B6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Telefone / Ligação</span>
                  <a href={SITE.phoneTel} className="text-[#004B87] font-semibold hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Chat Online Oficial</span>
                  <button
                    type="button"
                    onClick={openGHLChatWidget}
                    className="text-[#004B87] font-semibold hover:underline cursor-pointer text-left"
                  >
                    Iniciar conversa no Chat
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-[#0077B6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Instagram</span>
                  <a
                    href={SITE.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004B87] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{SITE.instagram.handle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md text-center transition-all"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* DEGRADÊ SUAVE: Transição de Conteúdo Claro para CTA Escuro (#0B192C) */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-white via-slate-100 via-slate-200/60 via-[#1E293B]/40 to-[#0B192C] pointer-events-none" />

      <CTASection onOpenModal={onOpenModal} />
    </div>
  );
};
