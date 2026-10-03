import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES_DATA, SERVICES_LIST } from '../data/servicesData.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { FAQAccordion } from '../components/common/FAQAccordion.tsx';
import { CTASection } from '../components/common/CTASection.tsx';
import {
  AirConditionerIllustration,
  RefrigerationIllustration,
  ElectricalIllustration
} from '../components/illustrations/TechnicalIllustrations.tsx';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenModal }) => {
  const acService = SERVICES_DATA['instalacao-ar-condicionado'];
  const refService = SERVICES_DATA['refrigeracao'];
  const elecService = SERVICES_DATA['servicos-eletricos'];

  const servicesFaqs = [
    {
      question: 'Como funciona o agendamento de um serviço?',
      answer: 'Você entra em contato pelo formulário ou pelo chat online informando qual serviço precisa e em qual dia/horário prefere. A disponibilidade é combinada diretamente com a RJPH.'
    },
    {
      question: 'Posso solicitar a instalação de ar-condicionado e a preparação da tomada/disjuntor juntos?',
      answer: 'Sim, uma das grandes vantagens da RJPH é atuar em elétrica e climatização de forma conjunta, garantindo que o circuito elétrico e a instalação do aparelho estejam devidamente dimensionados.'
    },
    {
      question: 'Qual é o horário de atendimento?',
      answer: 'O atendimento da RJPH funciona todos os dias da semana, de Segunda a Domingo, das 09:00 às 18:00.'
    }
  ];

  return (
    <div className="w-full pt-20">
      <SEOHead
        title="Serviços | RJPH Elétrica e Refrigeração"
        description="Conheça os serviços técnicos da RJPH: Instalação de ar-condicionado, refrigeração e serviços elétricos com atendimento direto e profissional."
        pathname="/services"
      />

      {/* Page Header Banner */}
      <div className="bg-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Serviços' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00B4D8]">
              Áreas de Atuação
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Serviços de Elétrica, Refrigeração e Climatização
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atendimento técnico conduzido de forma direta e transparente para residências e comércios.
            </p>
          </div>
        </div>
      </div>

      {/* DEGRADÊ SUAVE: Transição de Banner Escuro (#0B192C) para Conteúdo Claro (#FFFFFF) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-[#0B192C] via-[#1E293B]/25 via-slate-100 to-white pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Service 1: Instalação de Ar-Condicionado */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004B87] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              <span>{acService.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              {acService.name}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {acService.intro[0]}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {acService.scope.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate(`/services/${acService.slug}`)}
                className="py-2.5 px-5 rounded-xl bg-[#004B87] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#003866] transition-colors inline-flex items-center gap-2"
              >
                <span>Página do Serviço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenModal(acService.name)}
                className="py-2.5 px-5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 flex items-center justify-center">
            <div className="w-full aspect-[4/3]">
              <AirConditionerIllustration className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Service 2: Refrigeração */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 flex items-center justify-center">
            <div className="w-full aspect-[4/3]">
              <RefrigerationIllustration className="w-full h-full" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0077B6] bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
              <span>{refService.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              {refService.name}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {refService.intro[0]}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {refService.scope.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate(`/services/${refService.slug}`)}
                className="py-2.5 px-5 rounded-xl bg-[#004B87] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#003866] transition-colors inline-flex items-center gap-2"
              >
                <span>Página do Serviço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenModal(refService.name)}
                className="py-2.5 px-5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </section>

        {/* Service 3: Serviços Elétricos */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545] bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
              <span>{elecService.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              {elecService.name}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {elecService.intro[0]}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {elecService.scope.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate(`/services/${elecService.slug}`)}
                className="py-2.5 px-5 rounded-xl bg-[#004B87] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#003866] transition-colors inline-flex items-center gap-2"
              >
                <span>Página do Serviço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenModal(elecService.name)}
                className="py-2.5 px-5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 flex items-center justify-center">
            <div className="w-full aspect-[4/3]">
              <ElectricalIllustration className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-8 space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Perguntas Frequentes sobre os Serviços
            </h2>
          </div>
          <FAQAccordion items={servicesFaqs} />
        </section>

      </div>

      {/* DEGRADÊ SUAVE: Transição de Conteúdo Claro para CTA Escuro (#0B192C) */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-white via-slate-100 via-slate-200/60 via-[#1E293B]/40 to-[#0B192C] pointer-events-none" />

      {/* CTA Section */}
      <CTASection onOpenModal={() => onOpenModal()} />
    </div>
  );
};
