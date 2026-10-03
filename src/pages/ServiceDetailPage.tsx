import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { FAQAccordion } from '../components/common/FAQAccordion.tsx';
import { CTASection } from '../components/common/CTASection.tsx';
import { SITE } from '../config/siteConfig.ts';
import { openGHLChatWidget } from '../utils/chatWidget.ts';
import {
  AirConditionerIllustration,
  RefrigerationIllustration,
  ElectricalIllustration
} from '../components/illustrations/TechnicalIllustrations.tsx';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenModal
}) => {
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className="pt-28 pb-16 text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-800">Serviço não encontrado</h1>
        <p className="text-slate-600 mt-2">O serviço que você procura não está disponível.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="mt-4 px-4 py-2 bg-[#004B87] text-white rounded-lg text-sm font-semibold"
        >
          Ver todos os serviços
        </button>
      </div>
    );
  }

  const renderIllustration = () => {
    switch (service.illustrationType) {
      case 'air_conditioning':
        return <AirConditionerIllustration className="w-full h-full object-contain" />;
      case 'refrigeration':
        return <RefrigerationIllustration className="w-full h-full object-contain" />;
      case 'electrical':
        return <ElectricalIllustration className="w-full h-full object-contain" />;
      default:
        return <AirConditionerIllustration className="w-full h-full object-contain" />;
    }
  };

  return (
    <div className="w-full pt-20">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        pathname={`/services/${service.slug}`}
        schemaType="Service"
        serviceData={{
          name: service.name,
          description: service.shortDescription,
          faqs: service.faq
        }}
      />

      {/* Hero Section */}
      <div className="bg-[#0B192C] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Serviços', path: '/services' },
              { label: service.name }
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4D8] bg-[#004B87]/30 px-3 py-1 rounded-md border border-[#00B4D8]/30">
                {service.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.heroTitle}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenModal(service.name)}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={openGHLChatWidget}
                  className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs tracking-wide border border-white/20 transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>Falar no Chat Online</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#10223D] to-[#0B1728] p-6 rounded-2xl border border-slate-700/60 shadow-xl flex items-center justify-center">
              <div className="w-full aspect-[4/3] max-w-md">
                {renderIllustration()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DEGRADÊ SUAVE: Transição de Banner Escuro (#0B192C) para Conteúdo Claro (#FFFFFF) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-[#0B192C] via-[#1E293B]/25 via-slate-100 to-white pointer-events-none" />

      {/* Content Section: Intro & Reasons */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction Text */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Apresentação Técnica
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Entenda como a RJPH conduz este serviço
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg pt-2">
              {service.intro.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Reasons / When to consider professional service */}
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Critérios Importantes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mt-1">
                Por que a execução técnica faz a diferença
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 space-y-2 hover:border-[#0077B6]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#0077B6] font-bold text-sm">
                    <span className="w-6 h-6 rounded-md bg-blue-100/70 text-[#004B87] flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-8">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scope and Precautions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Scope / O que envolve */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
              <h3 className="text-xl font-bold text-[#0B2545]">
                O que envolve o serviço
              </h3>
              <ul className="space-y-3">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Precautions / Cuidados Importantes */}
            <div className="lg:col-span-5 bg-amber-50/50 rounded-2xl p-6 sm:p-8 border border-amber-200/60 space-y-5">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold">Cuidados importantes</h3>
              </div>
              <ul className="space-y-3">
                {service.precautions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-amber-200/50 text-xs text-slate-600 flex items-center justify-between gap-2">
                <span>Precisa de orientação sobre o seu caso?</span>
                <button
                  type="button"
                  onClick={openGHLChatWidget}
                  className="font-bold text-[#004B87] hover:underline"
                >
                  Abrir Chat Online
                </button>
              </div>
            </div>

          </div>

          {/* FAQ specific to this service */}
          <div className="pt-8 space-y-6 max-w-4xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Perguntas Frequentes
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Dúvidas comuns sobre {service.name.toLowerCase()}
              </h2>
            </div>
            <FAQAccordion items={service.faq} />
          </div>

          {/* Related Services */}
          <div className="pt-8 space-y-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              Serviços Relacionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.relatedSlugs.map((rSlug) => {
                const related = SERVICES_DATA[rSlug];
                if (!related) return null;
                return (
                  <div
                    key={rSlug}
                    onClick={() => onNavigate(`/services/${related.slug}`)}
                    className="p-5 rounded-xl border border-slate-200 hover:border-[#004B87] hover:bg-slate-50/80 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-[#004B87] transition-colors">
                        {related.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {related.shortDescription}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#004B87] transition-colors shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Conteúdo Claro para CTA Escuro (#0B192C) */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-white via-slate-100 via-slate-200/60 via-[#1E293B]/40 to-[#0B192C] pointer-events-none" />

      {/* Final CTA */}
      <CTASection
        title={`Precisa de atendimento em ${service.name}?`}
        subtitle="Entre em contato com a RJPH para alinhar os detalhes e solicitar seu orçamento diretamente."
        onOpenModal={() => onOpenModal(service.name)}
      />
    </div>
  );
};
