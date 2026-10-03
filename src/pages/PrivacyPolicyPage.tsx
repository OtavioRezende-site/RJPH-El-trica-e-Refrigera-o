import React from 'react';
import { SITE } from '../config/siteConfig.ts';
import { SEOHead } from '../components/common/SEOHead.tsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      <SEOHead
        title="Política de Privacidade | RJPH Elétrica e Refrigeração"
        description="Conheça a política de privacidade da RJPH Elétrica e Refrigeração e como tratamos as informações enviadas por nossos canais de contato."
        pathname="/privacy-policy"
      />

      <div className="bg-[#0B192C] text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[{ label: 'Política de Privacidade' }]}
            onNavigate={onNavigate}
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Política de Privacidade
          </h1>
          <p className="text-slate-300 text-sm">
            Última atualização: Outubro de 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            1. Informações Gerais
          </h2>
          <p>
            A <strong>{SITE.name}</strong> valoriza a privacidade de seus visitantes e clientes. Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos as informações fornecidas por você ao interagir com nosso website e nossos canais de atendimento.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            2. Coleta de Informações
          </h2>
          <p>
            Coletamos informações pessoais que você nos fornece voluntariamente ao solicitar um orçamento ou tirar dúvidas através de nossos formulários de contato, chamadas telefônicas ou mensagens pelo WhatsApp. Essas informações podem incluir:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Nome completo</li>
            <li>Número de telefone / WhatsApp</li>
            <li>Detalhes da demanda ou serviço desejado</li>
            <li>Informações sobre o local ou fotos do equipamento enviadas para avaliação</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            3. Finalidade do Uso dos Dados
          </h2>
          <p>
            As informações coletadas são utilizadas estritamente para:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Responder a pedidos de orçamento e dúvidas sobre serviços técnicos;</li>
            <li>Realizar agendamentos de visitas e alinhamentos de atendimento;</li>
            <li>Manter registro de contato para acompanhamento dos serviços solicitados.</li>
          </ul>
          <p>
            Não comercializamos, alugamos ou compartilhamos suas informações com terceiros para fins publicitários não solicitados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. Segurança das Informações
          </h2>
          <p>
            Adotamos medidas adequadas para proteger os dados sob nossa responsabilidade contra acessos não autorizados, perdas ou alterações indevidas. O envio de dados via formulário ocorre através de conexão criptografada (HTTPS).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. Canais de Contato
          </h2>
          <p>
            Caso você tenha qualquer dúvida sobre esta Política de Privacidade ou deseje solicitar a atualização ou exclusão de seus dados de contato, fale conosco diretamente pelo telefone ou WhatsApp: <strong>{SITE.phoneDisplay}</strong>.
          </p>
        </section>

      </div>
    </div>
  );
};
