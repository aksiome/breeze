import { defineComponent } from "../component";

defineComponent("[data-drawer]", el => {
  const toggle = document.getElementById(el.dataset?.drawer ?? "");
  if (!(toggle instanceof HTMLInputElement)) return;

  const label = document.querySelector<HTMLElement>(`label[role="button"][for="${toggle.id}"]`)

  const linkHandlers = new Map<HTMLAnchorElement, (e: KeyboardEvent) => void>();

  el.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
    const handleLinkKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.checked = false;
        link.click();
      }
    };
    linkHandlers.set(link, handleLinkKeydown);
    link.addEventListener('keydown', handleLinkKeydown);
  });

  const handleToggleChange = () => {
    if (toggle.checked) {
      const focusable = getFocusableElements(el);
      if (focusable.length === 0) return;
      setTimeout(() => focusable[0].focus(), 10);
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (!toggle.checked) return;
    if (e.key === 'Escape') {
      toggle.checked = false;
      label?.focus();
    } else if (e.key === 'Tab') {
      const focusable = getFocusableElements(el);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  toggle.addEventListener('change', handleToggleChange);
  el.addEventListener('keydown', handleKeydown);

  return () => {
    linkHandlers.forEach((handler, link) => {
      link.removeEventListener('keydown', handler);
    });
    toggle.removeEventListener('change', handleToggleChange);
    el.removeEventListener('keydown', handleKeydown);
  };
});


const getFocusableElements = (
  container: HTMLElement,
): HTMLElement[] => Array.from(
  container.querySelectorAll<HTMLElement>([
    'a[href]',
    'summary',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')),
).filter(el => {
  if (el.offsetParent === null) return false;
  const details = el.closest('details');
  if (details && !details.open) {
    if (!el.matches('summary')) return false;
  }
  return true;
});
