/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary.tsx';
import { Header } from './components/common/Header.tsx';
import { Footer } from './components/common/Footer.tsx';
import { EstimateModal } from './components/common/EstimateModal.tsx';
import { GHLChatLoader } from './components/common/GHLChatLoader.tsx';
import { MobileConversionBar } from './components/common/MobileConversionBar.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ThankYouPage } from './pages/ThankYouPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';

const KNOWN_ROUTES = [
  '/services/instalacao-ar-condicionado',
  '/services/refrigeracao',
  '/services/servicos-eletricos',
  '/services',
  '/about',
  '/contact',
  '/thank-you',
  '/privacy-policy',
  '/terms'
];

/**
 * Detects if the app is hosted under a GitHub Pages subdirectory (e.g. /my-repo-name/)
 */
function detectBaseRepoPath(): string {
  try {
    const pathname = window.location.pathname || '';
    for (const route of KNOWN_ROUTES) {
      if (pathname.endsWith(route)) {
        return pathname.slice(0, -route.length);
      }
    }
    const trimmed = pathname.replace(/\/$/, '');
    if (trimmed && trimmed !== '/') {
      return trimmed;
    }
  } catch {
    // Fallback if window is undefined or restricted
  }
  return '';
}

/**
 * Resolves the clean logical route irrespective of whether hosted at root (/) or in a GitHub repository subfolder
 */
function resolveNormalizedRoute(): string {
  try {
    // 1. Support hash-based fallback (e.g. #/services or #services)
    if (window.location.hash) {
      const rawHash = window.location.hash.replace(/^#/, '');
      const cleanHash = rawHash.startsWith('/') ? rawHash : '/' + rawHash;
      const stripped = cleanHash.replace(/\/$/, '') || '/';
      if (stripped === '/' || KNOWN_ROUTES.includes(stripped)) {
        return stripped;
      }
    }

    // 2. Match known routes against pathname
    const pathname = window.location.pathname || '/';
    for (const route of KNOWN_ROUTES) {
      if (pathname.endsWith(route)) {
        return route;
      }
    }
  } catch {
    // Fallback
  }

  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => resolveNormalizedRoute());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(resolveNormalizedRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Safe navigation function supporting both custom domains and GitHub repository subpaths
  const navigate = useCallback((path: string) => {
    try {
      const cleanPath = path.startsWith('/') ? path : '/' + path;
      const base = detectBaseRepoPath();
      const targetFullUrl = base ? `${base}${cleanPath === '/' ? '/' : cleanPath}` : cleanPath;

      if (window.location.pathname !== targetFullUrl) {
        window.history.pushState({}, '', targetFullUrl);
      }
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // If pushState fails (e.g. file:// protocol), fallback to hash
      window.location.hash = path;
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openModal = useCallback((serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedServiceForModal(undefined);
  }, []);

  // Intercept standard internal <a> clicks for client-side navigation without full page reload
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (
        href &&
        (href.startsWith('/') || href.startsWith('#')) &&
        !href.startsWith('//') &&
        !target.hasAttribute('download') &&
        target.target !== '_blank'
      ) {
        e.preventDefault();
        const cleanPath = href.startsWith('#')
          ? href.slice(1).startsWith('/')
            ? href.slice(1)
            : '/' + href.slice(1)
          : href;
        navigate(cleanPath);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  // Route resolution
  const renderCurrentPage = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    if (path === '/') {
      return <HomePage onNavigate={navigate} onOpenModal={openModal} />;
    }

    if (path === '/services') {
      return <ServicesPage onNavigate={navigate} onOpenModal={openModal} />;
    }

    if (path === '/services/instalacao-ar-condicionado') {
      return (
        <ServiceDetailPage
          slug="instalacao-ar-condicionado"
          onNavigate={navigate}
          onOpenModal={openModal}
        />
      );
    }

    if (path === '/services/refrigeracao') {
      return (
        <ServiceDetailPage
          slug="refrigeracao"
          onNavigate={navigate}
          onOpenModal={openModal}
        />
      );
    }

    if (path === '/services/servicos-eletricos') {
      return (
        <ServiceDetailPage
          slug="servicos-eletricos"
          onNavigate={navigate}
          onOpenModal={openModal}
        />
      );
    }

    if (path === '/about') {
      return <AboutPage onNavigate={navigate} onOpenModal={openModal} />;
    }

    if (path === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (path === '/thank-you') {
      return <ThankYouPage onNavigate={navigate} />;
    }

    if (path === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    if (path === '/terms') {
      return <TermsPage onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  const isThankYou = currentPath === '/thank-you';

  return (
    <ErrorBoundary>
      <div className={`min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] ${!isThankYou ? 'pb-mobile-bar' : ''}`}>
        {/* 1. Header (Desktop & Mobile Drawer) */}
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenModal={() => openModal()}
        />

        {/* 2. Main Page Content */}
        <main className="flex-1 w-full">
          {renderCurrentPage()}
        </main>

        {/* 3. Footer */}
        <Footer
          onNavigate={navigate}
          onOpenModal={() => openModal()}
        />

        {/* 4. GoHighLevel Estimate Modal */}
        <EstimateModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={selectedServiceForModal}
        />

        {/* 5. GoHighLevel Chat Widget Loader (non-blocking, hidden on /thank-you) */}
        <GHLChatLoader currentPath={currentPath} />

        {/* 6. Mobile Conversion Bar (bottom sticky, hidden on /thank-you) */}
        <MobileConversionBar
          onOpenModal={() => openModal()}
          currentPath={currentPath}
        />
      </div>
    </ErrorBoundary>
  );
}
