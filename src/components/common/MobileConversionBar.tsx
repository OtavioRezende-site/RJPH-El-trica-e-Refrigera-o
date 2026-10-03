import React from 'react';
import { Phone, ClipboardCheck } from 'lucide-react';
import { SITE } from '../../config/siteConfig.ts';

interface MobileConversionBarProps {
  onOpenModal: () => void;
  currentPath: string;
}

export const MobileConversionBar: React.FC<MobileConversionBarProps> = ({
  onOpenModal,
  currentPath
}) => {
  // Do not show on /thank-you page
  if (currentPath === '/thank-you') {
    return null;
  }

  return (
    <aside
      aria-label="Ações de contato rápido"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B192C]/95 backdrop-blur-md border-t border-slate-700/80 px-4 py-2.5 shadow-2xl transition-transform"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Now Button */}
        <a
          href={SITE.phoneTel}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 text-white font-semibold text-xs tracking-wide uppercase border border-slate-700 hover:bg-slate-700 active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 text-[#00B4D8] shrink-0" />
          <span className="truncate">Ligar Agora</span>
        </a>

        {/* Request Estimate Button */}
        <button
          onClick={onOpenModal}
          type="button"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#004B87] to-[#0077B6] text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-[#004B87]/30 hover:brightness-110 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
        >
          <ClipboardCheck className="w-4 h-4 text-[#90E0EF] shrink-0" />
          <span className="truncate">Orçamento</span>
        </button>
      </div>
    </aside>
  );
};
