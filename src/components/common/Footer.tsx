import React from 'react';
import { Phone, MessageCircle, Instagram, Clock, ExternalLink } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SITE } from '../../config/siteConfig.ts';
import { SERVICES_LIST } from '../../data/servicesData.ts';
import { openGHLChatWidget } from '../../utils/chatWidget.ts';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenModal }) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-xl"
            >
              <Logo variant="light" size="md" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Instalação de ar-condicionado, refrigeração e serviços elétricos com atendimento técnico direto e agendamento simplificado.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#00B4D8] transition-colors py-1.5 px-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-[#00B4D8]/50"
              >
                <Instagram className="w-4 h-4 text-[#00B4D8]" />
                <span>{SITE.instagram.handle}</span>
              </a>
              <a
                href={SITE.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#00B4D8] transition-colors py-1.5 px-3 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-[#00B4D8]/50"
                title="Perfil no Google"
              >
                <span>Google</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Serviços */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick(e, '/services')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Visão Geral dos Serviços
                </a>
              </li>
              {SERVICES_LIST.map((srv) => (
                <li key={srv.slug}>
                  <a
                    href={`/services/${srv.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${srv.slug}`)}
                    className="hover:text-[#00B4D8] transition-colors inline-block"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navegação Institucional */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Sobre a RJPH
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleLinkClick(e, '/terms')}
                  className="hover:text-[#00B4D8] transition-colors inline-block"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Atendimento Oficial */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento Oficial
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Horário de Funcionamento</span>
                  <span className="text-xs text-slate-400">Segunda a Domingo: 09:00 às 18:00 (todos os dias)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Telefone para Contato</span>
                  <a
                    href={SITE.phoneTel}
                    className="text-xs text-slate-300 hover:text-[#00B4D8] font-mono transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacidade
            </a>
            <span>·</span>
            <a
              href="/terms"
              onClick={(e) => handleLinkClick(e, '/terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Termos
            </a>
            <span>·</span>
            <button
              type="button"
              onClick={openGHLChatWidget}
              className="hover:text-[#00B4D8] text-slate-400 inline-flex items-center gap-1 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Chat Online</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
