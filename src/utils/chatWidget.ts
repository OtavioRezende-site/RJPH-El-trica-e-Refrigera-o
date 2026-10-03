/**
 * Utility to programmatically open the GoHighLevel Chat Widget
 */
export const openGHLChatWidget = () => {
  // 1. Check if <chat-widget> web component is present
  const chatWidget = document.querySelector('chat-widget') as HTMLElement | null;
  if (chatWidget) {
    if (chatWidget.shadowRoot) {
      const launcher = chatWidget.shadowRoot.querySelector(
        'button, .chat-launcher, .chat-bubble, [aria-label*="chat"], .launcher'
      ) as HTMLElement | null;
      if (launcher) {
        launcher.click();
        return;
      }
    }
    chatWidget.click();
    return;
  }

  // 2. Check for iframe or container
  const container = document.querySelector(
    '#leadconnector-chat-widget, iframe[src*="chat-widget"], [id*="chat-widget"]'
  ) as HTMLElement | null;
  if (container) {
    container.click();
    return;
  }

  // 3. If script hasn't triggered yet, trigger interaction to load it immediately
  window.dispatchEvent(new Event('click'));
  window.dispatchEvent(new Event('scroll'));

  // Retry shortly once loaded
  setTimeout(() => {
    const el = document.querySelector('chat-widget, #leadconnector-chat-widget') as HTMLElement | null;
    if (el) {
      if ((el as any).shadowRoot) {
        const btn = (el as any).shadowRoot.querySelector('button, .chat-bubble') as HTMLElement | null;
        if (btn) btn.click();
        else el.click();
      } else {
        el.click();
      }
    }
  }, 400);
};
