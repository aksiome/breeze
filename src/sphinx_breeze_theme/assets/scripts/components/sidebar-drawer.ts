import { defineComponent } from "../utils/component";

defineComponent("[data-drawer]", el => {
  const toggle = document.getElementById(el.dataset?.drawer ?? "") as HTMLInputElement;
  if (!toggle) return;

  const label = document.querySelector<HTMLElement>(`label[role="button"][for="${toggle.id}"]`)

  el.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
    link.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.checked = false;
        link.click();
      }
    });
  });

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      const focusable = getFocusableElements(el);
      if (focusable.length === 0) return;
      setTimeout(() => focusable[0].focus(), 10);
    }
  });

  el.addEventListener('keydown', e => {
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
  });
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
