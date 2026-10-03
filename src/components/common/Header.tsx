import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SITE } from '../../config/siteConfig.ts';
import { SERVICES_LIST } from '../../data/servicesData.ts';
import { openGHLChatWidget } from '../../utils/chatWidget.ts';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const isHome = currentPath === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-gradient-to-b from-[#060D17]/80 via-[#060D17]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ZONE 1: BRAND LOGO */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-xl"
            aria-label="RJPH Elétrica e Refrigeração - Início"
          >
            <Logo
              variant={isScrolled || !isHome ? 'dark' : 'light'}
              size="md"
            />
          </a>

          {/* ZONE 2: NAVIGATION LINKS (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`text-sm font-semibold transition-colors hover:text-[#00B4D8] ${
                isHome
                  ? isScrolled ? 'text-[#004B87]' : 'text-[#00B4D8]'
                  : isScrolled || !isHome ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Início
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/services')}
                className={`text-sm font-semibold transition-colors hover:text-[#00B4D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-lg py-1 ${
                  currentPath.startsWith('/services')
                    ? isScrolled || !isHome ? 'text-[#004B87]' : 'text-[#00B4D8]'
                    : isScrolled || !isHome ? 'text-slate-700' : 'text-slate-200'
                }`}
                aria-expanded={isServicesDropdownOpen}
              >
                <span>Serviços</span>
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 overflow-hidden">
                    <a
                      href="/services"
                      onClick={(e) => handleLinkClick(e, '/services')}
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#004B87] hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 mb-1"
                    >
                      Todos os Serviços →
                    </a>
                    {SERVICES_LIST.map((srv) => (
                      <a
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={(e) => handleLinkClick(e, `/services/${srv.slug}`)}
                        className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-[#004B87] transition-colors">
                          {srv.name}
                        </span>
                        <span className="text-xs text-slate-500 line-clamp-1">
                          {srv.shortDescription}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className={`text-sm font-semibold transition-colors hover:text-[#00B4D8] ${
                currentPath === '/about'
                  ? isScrolled || !isHome ? 'text-[#004B87]' : 'text-[#00B4D8]'
                  : isScrolled || !isHome ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Sobre
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className={`text-sm font-semibold transition-colors hover:text-[#00B4D8] ${
                currentPath === '/contact'
                  ? isScrolled || !isHome ? 'text-[#004B87]' : 'text-[#00B4D8]'
                  : isScrolled || !isHome ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Contato
            </a>
          </nav>

          {/* ZONE 3: ACTIONS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.phoneTel}
              className={`flex items-center gap-2 text-sm font-bold tracking-tight transition-colors hover:text-[#00B4D8] ${
                isScrolled || !isHome ? 'text-[#0B2545]' : 'text-white'
              }`}
              title="Ligar para a RJPH"
            >
              <div className="w-8 h-8 rounded-full bg-[#004B87]/15 flex items-center justify-center text-[#0077B6]">
                <Phone className="w-4 h-4" />
              </div>
              <span>{SITE.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenModal}
              type="button"
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#004B87]/25 hover:brightness-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE.phoneTel}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled || !isHome
                  ? 'text-[#004B87] hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Ligar para RJPH"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] ${
                isScrolled || !isHome
                  ? 'text-[#0B2545] hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-5 py-6 space-y-4">
            <div className="space-y-1">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className={`block px-3 py-2.5 rounded-lg font-semibold text-base ${
                  isHome ? 'bg-slate-100 text-[#004B87]' : 'text-slate-700'
                }`}
              >
                Início
              </a>

              <div className="py-2 border-y border-slate-100 my-2">
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick(e, '/services')}
                  className="block px-3 py-2 rounded-lg font-bold text-sm text-[#004B87] uppercase tracking-wider"
                >
                  Serviços
                </a>
                <div className="pl-4 space-y-1 mt-1">
                  {SERVICES_LIST.map((srv) => (
                    <a
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      onClick={(e) => handleLinkClick(e, `/services/${srv.slug}`)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                        currentPath === `/services/${srv.slug}`
                          ? 'bg-slate-100 text-[#004B87] font-semibold'
                          : 'text-slate-600 hover:text-[#004B87]'
                      }`}
                    >
                      {srv.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className={`block px-3 py-2.5 rounded-lg font-semibold text-base ${
                  currentPath === '/about' ? 'bg-slate-100 text-[#004B87]' : 'text-slate-700'
                }`}
              >
                Sobre
              </a>

              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`block px-3 py-2.5 rounded-lg font-semibold text-base ${
                  currentPath === '/contact' ? 'bg-slate-100 text-[#004B87]' : 'text-slate-700'
                }`}
              >
                Contato
              </a>
            </div>

            {/* Direct Contact & CTA in Mobile Menu */}
            <div className="pt-4 space-y-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] text-white font-bold text-sm uppercase tracking-wider shadow-md text-center"
              >
                Solicitar Orçamento
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openGHLChatWidget();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-blue-50 text-[#004B87] font-semibold border border-blue-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#0077B6]" />
                  <span>Chat Online</span>
                </button>
                <a
                  href={SITE.phoneTel}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-semibold border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-[#0077B6]" />
                  <span>Ligar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
