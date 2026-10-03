import React from 'react';
import { ArrowRight, MessageCircle, Phone, CheckCircle2, ChevronRight, Instagram, ExternalLink } from 'lucide-react';
import { SITE } from '../config/siteConfig.ts';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { FAQAccordion } from '../components/common/FAQAccordion.tsx';
import { CTASection } from '../components/common/CTASection.tsx';
import { openGHLChatWidget } from '../utils/chatWidget.ts';
import {
  AirConditionerIllustration,
  RefrigerationIllustration,
  ElectricalIllustration
} from '../components/illustrations/TechnicalIllustrations.tsx';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenModal }) => {
  const acService = SERVICES_DATA['instalacao-ar-condicionado'];
  const refService = SERVICES_DATA['refrigeracao'];
  const elecService = SERVICES_DATA['servicos-eletricos'];

  const homeFaqs = [
    {
      question: 'Como solicitar um orçamento ou atendimento com a RJPH?',
      answer: 'Você pode solicitar atendimento clicando em "Solicitar Orçamento" no site para preencher os dados do serviço ou abrir uma conversa diretamente no chat online.'
    },
    {
      question: 'Qual é o horário oficial de funcionamento?',
      answer: 'O atendimento da RJPH funciona de Segunda a Domingo, das 09:00 às 18:00, todos os dias da semana.'
    },
    {
      question: 'A RJPH atende tanto a parte elétrica quanto a instalação do ar-condicionado?',
      answer: 'Sim, a empresa atua de forma integrada em elétrica, refrigeração e climatização, permitindo cuidar da instalação das unidades e também da adequação de circuitos elétricos e disjuntores.'
    },
    {
      question: 'Posso enviar fotos do local ou do equipamento?',
      answer: 'Sim. Você pode descrever seu equipamento no formulário de orçamento ou iniciar o atendimento pelo chat online para orientações sobre o envio de fotos do espaço pretendido ou do quadro elétrico.'
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="RJPH Elétrica e Refrigeração | Ar-Condicionado e Elétrica"
        description="Instalação de ar-condicionado, refrigeração e serviços elétricos com atendimento direto e profissional da RJPH. Fale conosco pelo WhatsApp ou telefone."
        pathname="/"
        schemaType="LocalBusiness"
      />

      {/* 1. HERO SECTION (FULL SCREEN: 100svh / 100dvh) */}
      <section className="relative w-full min-h-[100svh] min-h-[100dvh] flex items-center bg-[#071321] text-white overflow-hidden pt-20 pb-16">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#004B87] rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00B4D8] bg-[#004B87]/25 px-3 py-1.5 rounded-lg border border-[#00B4D8]/30">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
                <span>RJPH Elétrica e Refrigeração</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Instalação de ar-condicionado, refrigeração e serviços elétricos.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Solicite atendimento da RJPH para serviços de climatização, refrigeração e elétrica com contato direto e facilidade para agendamento.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenModal()}
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] hover:from-[#005a9e] hover:to-[#0088cc] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#004B87]/30 hover:shadow-xl active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={openGHLChatWidget}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 shadow-md active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#00B4D8]" />
                  <span>Falar no Chat Online</span>
                </button>
              </div>

              {/* Direct Phone & Hours Verification */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-200 hover:text-[#00B4D8] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <span>·</span>
                <span>Atendimento diário: 09:00 às 18:00</span>
              </div>
            </div>

            {/* Right Visual Column (High-Fidelity Technical Illustration Container) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0F1E36] to-[#0B1728] p-4 sm:p-6 border border-slate-700/60 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00B4D8]" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-slate-300">
                      SISTEMAS & INSTALAÇÃO TÉCNICA
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00B4D8]">
                    RJPH
                  </span>
                </div>

                <div className="aspect-[4/3] w-full flex items-center justify-center">
                  <AirConditionerIllustration className="w-full h-full object-contain" />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Equipamentos Split & Inverter</span>
                  <span className="text-emerald-400 font-medium">Atendimento Direto</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Smooth Gradient Transition to Faixa Factual */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-[#0B192C] pointer-events-none" />
      </section>

      {/* 2. FAIXA FACTUAL PÓS-HERO (Section 17) */}
      <section className="bg-[#0B192C] text-slate-300 py-5 overflow-x-auto relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
              <span>Instalação de Ar-Condicionado</span>
            </div>
            <span className="hidden md:inline text-slate-600">·</span>
            <div className="flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
              <span>Refrigeração</span>
            </div>
            <span className="hidden md:inline text-slate-600">·</span>
            <div className="flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
              <span>Serviços Elétricos</span>
            </div>
            <span className="hidden md:inline text-slate-600">·</span>
            <div className="flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
              <span>Atendimento via Chat e Formulário</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Faixa Escura (#0B192C) para Introdução Clara (#FFFFFF) */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-[#0B192C] via-[#1E293B]/25 via-slate-100 to-white pointer-events-none" />

      {/* 3. INTRODUÇÃO EDITORIAL DA RJPH (Section 18) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                Sobre o Atendimento
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                Soluções para climatização, refrigeração e elétrica.
              </h2>
              <div className="w-12 h-1 bg-[#00B4D8] rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                A <strong className="text-slate-900 font-semibold">RJPH Elétrica e Refrigeração</strong> atende necessidades em serviços técnicos para residências e empresas, com foco em instalação adequada de ar-condicionado, diagnóstico em sistemas de refrigeração e adequações elétricas seguras.
              </p>
              <p>
                Com atendimento conduzido diretamente pelo profissional <strong className="text-slate-900 font-semibold">Rafael Santos</strong>, prezamos pelo alinhamento claro e sem complicação com o cliente. Você expõe o serviço desejado, envia as informações necessárias e combina a execução de forma prática.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#004B87] hover:text-[#0077B6] transition-colors"
                >
                  <span>Conhecer mais sobre a RJPH</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Introdução Clara (#FFFFFF) para Serviços (#F1F5F9) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pointer-events-none" />

      {/* 4. SERVIÇOS EM DESTAQUE NA HOME (Section 19) */}
      <section className="py-12 sm:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Áreas de Atuação
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight mt-1">
              Serviços técnicos executados com critério.
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Conheça os principais serviços prestados pela RJPH e escolha a opção que melhor atende à sua necessidade.
            </p>
          </div>

          {/* Marquee Featured Service: Instalação de Ar-Condicionado */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:shadow-lg">
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004B87] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                  <span>{acService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                  {acService.name}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {acService.shortDescription}
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>Fixação segura das unidades</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>Conexão correta das linhas de cobre</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>Verificação do ponto de alimentação</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                    <span>Caimento e escoamento do dreno</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate(`/services/${acService.slug}`)}
                  className="py-2.5 px-5 rounded-xl bg-[#004B87] hover:bg-[#003866] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Ver Detalhes do Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenModal(acService.name)}
                  className="py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
              <div className="w-full max-w-sm aspect-[4/3]">
                <AirConditionerIllustration className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Complementary Services: Refrigeração & Serviços Elétricos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Refrigeração */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="aspect-[16/9] w-full bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center">
                  <RefrigerationIllustration className="w-full h-full object-contain" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                  {refService.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                  {refService.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {refService.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate(`/services/${refService.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#0077B6] uppercase tracking-wider transition-colors"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-slate-300">·</span>
                <button
                  type="button"
                  onClick={() => onOpenModal(refService.name)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider"
                >
                  Pedir Orçamento
                </button>
              </div>
            </div>

            {/* Serviços Elétricos */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="aspect-[16/9] w-full bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center">
                  <ElectricalIllustration className="w-full h-full object-contain" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                  {elecService.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                  {elecService.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {elecService.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate(`/services/${elecService.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#0077B6] uppercase tracking-wider transition-colors"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-slate-300">·</span>
                <button
                  type="button"
                  onClick={() => onOpenModal(elecService.name)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider"
                >
                  Pedir Orçamento
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Serviços (#F1F5F9) para Como Funciona (#FFFFFF) */}
      <div className="w-full h-14 sm:h-20 bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-white pointer-events-none" />

      {/* 5. SEÇÃO COMO FUNCIONA (Section 25) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Processo de Atendimento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
              Como funciona o atendimento com a RJPH
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Um fluxo direto e sem burocracia para você resolver seu problema de climatização ou eletricidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#004B87] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                1. Entre em Contato
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explique sua necessidade pelo formulário do site ou pelo chat online oficial.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0077B6] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                2. Informe o Serviço
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Forneça as informações necessárias para o entendimento inicial da demanda (como modelo, local ou fotos).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                3. Combine o Atendimento
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A continuidade e o agendamento da visita são combinados diretamente com a RJPH com pontualidade.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Como Funciona (#FFFFFF) para Instagram (slate-50) */}
      <div className="w-full h-12 sm:h-16 bg-gradient-to-b from-white to-slate-50 pointer-events-none" />

      {/* 6. INSTAGRAM & CANAIS OFICIAIS (Section 27) */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#0077B6]">
                <Instagram className="w-4 h-4 text-[#00B4D8]" />
                <span>Presença Oficial</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Acompanhe o trabalho da RJPH no Instagram
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Confira registros de atendimentos realizados e o perfil oficial de Rafael Santos pelo canal oficial.
              </p>
            </div>

            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#004B87] transition-colors shrink-0 shadow-sm"
            >
              <span>{SITE.instagram.handle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de Instagram (slate-50) para FAQ (#FFFFFF) */}
      <div className="w-full h-12 sm:h-16 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />

      {/* 7. FAQ SECTION (Section 29) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
              Perguntas sobre o atendimento da RJPH
            </h2>
          </div>

          <FAQAccordion items={homeFaqs} />

          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Ainda tem alguma dúvida sobre o seu caso?{' '}
              <button
                type="button"
                onClick={openGHLChatWidget}
                className="font-semibold text-[#004B87] hover:underline cursor-pointer"
              >
                Inicie uma conversa no chat online.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* DEGRADÊ SUAVE: Transição de FAQ (#FFFFFF) para CTA Final (#0B192C) */}
      <div className="w-full h-16 sm:h-24 bg-gradient-to-b from-white via-slate-100 via-slate-200/60 via-[#1E293B]/40 to-[#0B192C] pointer-events-none" />

      {/* 8. FINAL CTA (Section 73) */}
      <CTASection onOpenModal={() => onOpenModal()} />
    </div>
  );
};
