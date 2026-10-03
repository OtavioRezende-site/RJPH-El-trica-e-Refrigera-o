import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE } from '../../config/siteConfig.ts';
import { openGHLChatWidget } from '../../utils/chatWidget.ts';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  onOpenModal: () => void;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Precisa de instalação, refrigeração ou serviço elétrico?",
  subtitle = "Entre em contato com a RJPH e informe o serviço que você precisa. Atendimento conduzido com pontualidade e transparência técnica.",
  onOpenModal,
  className = ""
}) => {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-[#0B192C] via-[#07264a] to-[#0B2545] text-white py-16 md:py-20 ${className}`}>
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <circle cx="700" cy="100" r="240" stroke="#00B4D8" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="100" cy="300" r="180" stroke="#00B4D8" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00B4D8]">
            Atendimento Direto RJPH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Action Buttons: GoHighLevel Form and Chat Widget */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          {/* Main CTA: Form Modal */}
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#00B4D8]/20 hover:brightness-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA: GoHighLevel Chat Widget */}
          <button
            type="button"
            onClick={openGHLChatWidget}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 active:scale-95 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#00B4D8]" />
            <span>Falar no Chat Online</span>
          </button>
        </div>

        {/* Quick Phone & Availability info */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-700/60 max-w-md mx-auto">
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span className="font-semibold text-slate-200">{SITE.phoneDisplay}</span>
          </a>
          <span>·</span>
          <span>{SITE.hours.summary}</span>
        </div>
      </div>
    </section>
  );
};
