import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { GHLForm } from './GHLForm.tsx';
import { SITE } from '../../config/siteConfig.ts';
import { openGHLChatWidget } from '../../utils/chatWidget.ts';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  serviceName
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previouslyFocusedElement.current) {
          previouslyFocusedElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#060D17]/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-[#F8FAFC]">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#0077B6]">
              Atendimento RJPH
            </span>
            <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-[#0B192C]">
              {serviceName ? `Orçamento: ${serviceName}` : 'Solicitar Orçamento'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6]"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Direct Contact Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-2.5 bg-blue-50/70 border-b border-blue-100 text-xs text-slate-700">
          <span className="font-medium text-slate-800">
            Prefere atendimento imediato?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                openGHLChatWidget();
              }}
              className="inline-flex items-center gap-1 font-bold text-[#004B87] hover:text-[#0077B6] underline underline-offset-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat Online</span>
            </button>
            <span className="text-slate-300">·</span>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#004B87]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Form Container with vertical scroll */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Preencha os dados abaixo com o serviço desejado para que a equipe da RJPH entre em contato com você.
          </p>
          <GHLForm serviceHint={serviceName} />
        </div>
      </div>
    </div>
  );
};
