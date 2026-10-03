import React from 'react';
import { CheckCircle2, Home, Phone, Clock } from 'lucide-react';
import { SITE } from '../config/siteConfig.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';

interface ThankYouPageProps {
  onNavigate: (path: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#F8FAFC]">
      <SEOHead
        title="Recebemos sua Solicitação | RJPH Elétrica e Refrigeração"
        description="Obrigado por entrar em contato com a RJPH Elétrica e Refrigeração. Recebemos seus dados e entraremos em contato."
        pathname="/thank-you"
        noIndex={true}
      />

      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">
            Solicitação Registrada
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
            Recebemos sua solicitação.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Seus dados foram enviados com sucesso para o sistema de atendimento da RJPH. Nossa equipe técnica avaliará as informações e entrará em contato no seu telefone.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-700">
          <Clock className="w-4 h-4 text-[#0077B6]" />
          <span>Horário de atendimento: <strong>{SITE.hours.summary}</strong></span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={SITE.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#004B87] hover:bg-[#003866] text-white font-bold text-sm tracking-wide transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar para a RJPH</span>
          </a>

          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </div>
    </div>
  );
};
