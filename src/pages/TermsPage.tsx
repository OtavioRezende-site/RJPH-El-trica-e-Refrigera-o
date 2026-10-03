import React from 'react';
import { SITE } from '../config/siteConfig.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      <SEOHead
        title="Termos de Uso | RJPH Elétrica e Refrigeração"
        description="Termos e condições gerais de uso do website da RJPH Elétrica e Refrigeração."
        pathname="/terms"
      />

      <div className="bg-[#0B192C] text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Termos de Uso' }]}
            onNavigate={onNavigate}
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Termos de Uso
          </h1>
          <p className="text-slate-300 text-sm">
            Última atualização: Outubro de 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e navegar pelo website da <strong>{SITE.name}</strong>, você concorda com as disposições e condições aqui estabelecidas. Caso não concorde com algum dos termos, recomendamos a interrupção da navegação.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            2. Natureza das Informações
          </h2>
          <p>
            O conteúdo disponibilizado neste website possui finalidade informativa e comercial, apresentando as modalidades de serviços prestados em climatização, refrigeração e eletricidade. Os detalhes específicos de cada serviço, como prazos, materiais e valores de execução, são definidos individualmente após a avaliação de cada demanda.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            3. Solicitação de Atendimento e Orçamento
          </h2>
          <p>
            O envio de informações através do formulário do site ou pelo WhatsApp representa uma solicitação de contato inicial, não constituindo por si só um contrato de prestação de serviços até que as condições sejam acordadas diretamente entre as partes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. Propriedade Intelectual
          </h2>
          <p>
            Os textos, logotipos, elementos gráficos e estrutura do website são de titularidade da {SITE.name} ou devidamente licenciados, sendo vedada sua reprodução sem autorização prévia.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. Contato
          </h2>
          <p>
            Para esclarecimentos sobre os termos de uso ou informações sobre serviços, entre em contato pelo telefone ou WhatsApp: <strong>{SITE.phoneDisplay}</strong>.
          </p>
        </section>

      </div>
    </div>
  );
};
