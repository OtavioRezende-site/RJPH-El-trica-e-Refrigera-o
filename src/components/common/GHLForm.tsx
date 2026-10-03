import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { SITE } from '../../config/siteConfig.ts';

interface GHLFormProps {
  className?: string;
  onSuccess?: () => void;
  serviceHint?: string;
}

export const GHLForm: React.FC<GHLFormProps> = ({
  className = '',
  onSuccess,
  serviceHint
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    // Ensure GoHighLevel form embed script is loaded
    const scriptId = 'ghl-form-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for form submission messages from GoHighLevel
    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (
            data.action === 'form-submit' ||
            data.type === 'form_submission' ||
            data.formId === SITE.formId
          ) {
            if (onSuccess) onSuccess();
          }
        } else if (typeof event.data === 'object' && event.data !== null) {
          if (
            event.data.action === 'form-submit' ||
            event.data.type === 'form_submission' ||
            event.data.formId === SITE.formId
          ) {
            if (onSuccess) onSuccess();
          }
        }
      } catch {
        // Ignore non-json messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onSuccess]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-100/80 overflow-hidden flex flex-col ${className}`}
    >
      {/* Top Header Card Styling (Integrated into Site Identity) */}
      <div className="bg-gradient-to-r from-[#0B192C] via-[#004B87] to-[#0077B6] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#90E0EF] block leading-none">
              Formulário Oficial
            </span>
            <span className="text-xs font-bold text-white tracking-wide">
              {serviceHint ? `Demanda: ${serviceHint}` : 'RJPH Atendimento Direto'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-200 bg-black/20 py-1 px-2.5 rounded-lg border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Envio Seguro</span>
        </div>
      </div>

      {/* Loading Skeleton Indicator */}
      {!isIframeLoaded && (
        <div className="p-6 space-y-4 animate-pulse">
          <div className="h-4 bg-slate-100 rounded-md w-1/3" />
          <div className="h-11 bg-slate-100 rounded-xl w-full" />
          <div className="h-4 bg-slate-100 rounded-md w-1/4" />
          <div className="h-11 bg-slate-100 rounded-xl w-full" />
          <div className="h-4 bg-slate-100 rounded-md w-1/2" />
          <div className="h-20 bg-slate-100 rounded-xl w-full" />
          <div className="h-12 bg-blue-100/70 rounded-xl w-full" />
        </div>
      )}

      {/* Official GoHighLevel Form Iframe with Enhanced Styling */}
      <div className={`w-full min-h-[540px] relative transition-opacity duration-300 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/V2getowmokHr4p59Ke9V"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '540px',
            border: 'none',
            borderRadius: '0 0 16px 16px'
          }}
          id="inline-V2getowmokHr4p59Ke9V"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Formulário do website"
          data-height="539"
          data-layout-iframe-id="inline-V2getowmokHr4p59Ke9V"
          data-form-id="V2getowmokHr4p59Ke9V"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Formulário do website"
          onLoad={() => setIsIframeLoaded(true)}
        />
      </div>

      {/* Bottom Trust & Confirmation Bar */}
      <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Recebimento direto no CRM da RJPH</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>Atendimento: {SITE.hours.summary}</span>
        </div>
      </div>
    </div>
  );
};
