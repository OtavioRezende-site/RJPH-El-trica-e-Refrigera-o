import { useEffect } from 'react';

interface GHLChatLoaderProps {
  currentPath: string;
}

export const GHLChatLoader: React.FC<GHLChatLoaderProps> = ({ currentPath }) => {
  useEffect(() => {
    // Hide chat widget on /thank-you page
    const isThankYou = currentPath === '/thank-you';

    if (isThankYou) {
      const existingContainer = document.querySelector('chat-widget, #leadconnector-chat-widget, iframe[src*="leadconnectorhq"]');
      if (existingContainer) {
        (existingContainer as HTMLElement).style.display = 'none';
      }
      return;
    } else {
      const existingContainer = document.querySelector('chat-widget, #leadconnector-chat-widget, iframe[src*="leadconnectorhq"]');
      if (existingContainer) {
        (existingContainer as HTMLElement).style.display = '';
      }
    }

    const scriptId = 'ghl-chat-widget-script';
    let loaded = false;

    // Helper to constrain chat widget dimensions so it doesn't take full screen
    const applySizeConstraints = () => {
      const isMobile = window.innerWidth <= 640;
      const targetMaxWidth = isMobile ? 'calc(100vw - 28px)' : '390px';
      const targetMaxHeight = isMobile ? 'min(530px, 75vh)' : '560px';
      const targetBottom = isMobile ? 'calc(76px + env(safe-area-inset-bottom, 0px))' : '24px';
      const targetRight = isMobile ? '14px' : '24px';

      // 1. Check custom element <chat-widget>
      const chatWidgetEl = document.querySelector('chat-widget') as HTMLElement | null;
      if (chatWidgetEl) {
        // If it has shadowRoot, inject stylesheet inside
        if (chatWidgetEl.shadowRoot && !chatWidgetEl.shadowRoot.getElementById('ghl-custom-size-rules')) {
          const styleEl = document.createElement('style');
          styleEl.id = 'ghl-custom-size-rules';
          styleEl.textContent = `
            .chat-window, .chat-card, .chat-box, .chat-container, iframe, .window {
              max-width: ${targetMaxWidth} !important;
              max-height: ${targetMaxHeight} !important;
              width: ${targetMaxWidth} !important;
              height: ${targetMaxHeight} !important;
              border-radius: 16px !important;
              box-shadow: 0 20px 35px -5px rgba(0,0,0,0.35) !important;
              right: ${targetRight} !important;
              bottom: ${targetBottom} !important;
              top: auto !important;
              left: auto !important;
            }
          `;
          chatWidgetEl.shadowRoot.appendChild(styleEl);
        }

        // If the host element itself has expanded styles (e.g. height 100% or top 0)
        const hostStyle = chatWidgetEl.getAttribute('style') || '';
        if (hostStyle.includes('100%') || hostStyle.includes('100vh') || hostStyle.includes('top: 0') || hostStyle.includes('top:0') || hostStyle.includes('inset: 0')) {
          chatWidgetEl.style.setProperty('max-width', targetMaxWidth, 'important');
          chatWidgetEl.style.setProperty('max-height', targetMaxHeight, 'important');
          chatWidgetEl.style.setProperty('width', targetMaxWidth, 'important');
          chatWidgetEl.style.setProperty('height', targetMaxHeight, 'important');
          chatWidgetEl.style.setProperty('top', 'auto', 'important');
          chatWidgetEl.style.setProperty('left', 'auto', 'important');
          chatWidgetEl.style.setProperty('right', targetRight, 'important');
          chatWidgetEl.style.setProperty('bottom', targetBottom, 'important');
        }
      }

      // 2. Check if an external container or iframe exists outside shadowRoot
      const chatIframes = document.querySelectorAll('iframe[src*="chat-widget"], #leadconnector-chat-widget');
      chatIframes.forEach((node) => {
        const el = node as HTMLElement;
        const style = el.getAttribute('style') || '';
        // Only clamp if it is opened (e.g., expanded beyond the launcher button)
        if (el.offsetHeight > 120 || style.includes('100%') || style.includes('100vh') || style.includes('top: 0') || style.includes('top:0')) {
          el.style.setProperty('max-width', targetMaxWidth, 'important');
          el.style.setProperty('max-height', targetMaxHeight, 'important');
          el.style.setProperty('width', targetMaxWidth, 'important');
          el.style.setProperty('height', targetMaxHeight, 'important');
          el.style.setProperty('top', 'auto', 'important');
          el.style.setProperty('left', 'auto', 'important');
          el.style.setProperty('right', targetRight, 'important');
          el.style.setProperty('bottom', targetBottom, 'important');
          el.style.setProperty('border-radius', '16px', 'important');
        }
      });
    };

    const loadChatScript = () => {
      if (loaded || document.getElementById(scriptId)) return;
      loaded = true;

      // Clean up event listeners
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '6abe750893bdc8881e8ca6ba');
      script.async = true;
      document.body.appendChild(script);

      // Periodically and on mutation ensure size constraints are applied
      const observer = new MutationObserver(() => {
        applySizeConstraints();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'open', 'opened']
      });

      const interval = setInterval(applySizeConstraints, 500);

      // Stop polling after 45s to conserve resources, but keep observer active
      setTimeout(() => clearInterval(interval), 45000);
    };

    const handleInteraction = () => {
      loadChatScript();
    };

    // Load after 6s timeout or first interaction
    const timer = setTimeout(loadChatScript, 6000);

    window.addEventListener('scroll', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [currentPath]);

  return null;
};
