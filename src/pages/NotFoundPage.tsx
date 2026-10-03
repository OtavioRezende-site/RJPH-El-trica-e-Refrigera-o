import React from 'react';
import { Home, Wrench, PhoneCall } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead.tsx';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center pt-24 pb-16 px-4 bg-[#F8FAFC]">
      <SEOHead
        title="Página Não Encontrada | RJPH Elétrica e Refrigeração"
        description="A página que você tentou acessar não existe ou foi movida."
        pathname="/404"
        noIndex={true}
      />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#004B87] font-extrabold text-2xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Página não encontrada
          </h1>
          <p className="text-sm text-slate-600">
            O endereço acessado não foi encontrado ou não está mais disponível.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#004B87] hover:bg-[#003866] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Ir para o Início</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Wrench className="w-4 h-4 text-[#0077B6]" />
            <span>Ver Nossos Serviços</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#0077B6]" />
            <span>Fale Conosco</span>
          </button>
        </div>
      </div>
    </div>
  );
};
