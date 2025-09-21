import "../styles/breeze.css";

import { setupScrollSpy } from "./scrollspy.js";
import { setupDropdownButtons } from "./dropdown.js";
import { Theme, setupThemeSwitchers } from "./theme.js";
import { populateVersionSwitchers } from "./version.js";


const onDocumentReady = (callback: () => void) => {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
};


const media = window.matchMedia("(prefers-color-scheme: dark)");
media.addEventListener("change", (e) => {
  const mode = localStorage.getItem("mode");
  if (mode === Theme.AUTO) {
    const preferred = e.matches ? Theme.DARK : Theme.LIGHT;
    document.documentElement.dataset.theme = preferred;
  }
});



const setupSearchShortcut = (): void => {
  const builder = DOCUMENTATION_OPTIONS?.BUILDER || "html";

  console.log(builder)

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();

      // Get the content root from <html data-content_root="...">
      const root = document.documentElement.dataset.content_root || "./";
      let searchPage = "";
      if (builder === "dirhtml") {
        searchPage = `${root}search/`;
      } else {
        searchPage = `${root}search.html`;
      }

      // Navigate to search.html#q relative to the content root
      window.location.href = `${searchPage}#q`;
    }
  });
};


document.addEventListener("keydown", (e: KeyboardEvent) => {
  const builder = DOCUMENTATION_OPTIONS?.BUILDER || "html";

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    const root = document.documentElement.dataset.content_root || "./";
    let searchPage = "";
      if (builder === "dirhtml") {
        searchPage = `${root}search/`;
      } else {
        searchPage = `${root}search.html`;
      }
    window.location.href = `${searchPage}#q`;
  }
});

onDocumentReady(() => {
  enhanceLabelButtons();
  setupSearchShortcut();

  /* const searchs = document.querySelectorAll("input[name=q]");
  Array.from(searchs).forEach(search => createSearch(search as HTMLInputElement)); */

  setupScrollSpy(
    Array.from(document.querySelectorAll<HTMLAnchorElement>(
      ".bz-sidebar-toc ul a[href^='#']:not([href='#'])",
    ),
    ));

  setupThemeSwitchers(
    Array.from(document.querySelectorAll<HTMLButtonElement>(
      ".bz-theme-switcher button",
    ),
    ));

  setupDropdownButtons(
    Array.from(document.querySelectorAll<HTMLButtonElement>(
      ".bz-dropdown button",
    ),
    ));

  /* remove array usse directly foreach on nodelist and create individual components insstead of whole ssetup */
  populateVersionSwitchers(
    Array.from(document.querySelectorAll<HTMLButtonElement>(
      ".bz-version-switcher button",
    ),
    ));

  const toggles = Array.from(
    document.querySelectorAll<HTMLInputElement>('#bz-sidebar-primary-toggle, #bz-sidebar-secondary-toggle')
  );
  const focusableSelectors = [
    'a[href]',
    'summary',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];

  function getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
    ).filter(el => {
      // hidden or disabled
      if (el.offsetParent === null) return false;

      // inside closed <details>?
      const detailsParent = el.closest('details');
      if (detailsParent && !detailsParent.open) {
        // allow summary but not other children
        if (!el.matches('summary')) return false;
      }

      return true;
    });
  }


  toggles.forEach(toggle => {
    let keyListener: ((e: KeyboardEvent) => void) | null = null;
    const drawer = toggle.parentElement;
    if (!drawer) return;

    drawer.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      link.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle.checked = false;
          link.click();
        }
      });
    });

    toggle.addEventListener('change', () => {
      const label = document.querySelector<HTMLElement>(`label[role="button"][for="${toggle.id}"]`);

      if (toggle.checked) {
        const focusable = getFocusableElements(drawer);
        console.log(focusable)
        if (focusable.length === 0) return;

        setTimeout(() => {
          focusable[0].focus();
        }, 1);

        // Trap focus inside drawer
        keyListener = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            // Close drawer on Escape
            toggle.checked = false;
            drawer.removeEventListener('keydown', keyListener!);
            keyListener = null;
            label?.focus();
          } else if (e.key === 'Tab') {
            const focusable = getFocusableElements(drawer);
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

        drawer.addEventListener('keydown', keyListener);
      } else if (!toggle.checked && keyListener) {
        // Remove listener when drawer closes
        drawer.removeEventListener('keydown', keyListener);
        keyListener = null;
      }
    });
  });

  const moreMenu = document.querySelector<HTMLElement>(".bz-header-nav-menu");
  const dropdownUl = moreMenu?.querySelector<HTMLUListElement>("ul")!;
  const tabsUL = document.querySelector<HTMLUListElement>(".bz-header-nav > ul")!;
  const tabsLI = tabsUL.querySelectorAll<HTMLLIElement>("li");

  tabsUL.style.overflowX = "hidden";
  tabsLI.forEach((el, i) => {
    if (!el.dataset.tabId) el.dataset.tabId = String(i);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const li = entry.target as HTMLLIElement;
      const id = li.dataset.tabId!;

      if (!entry.isIntersecting) {
        // Add to dropdown if not already there
        if (dropdownUl.querySelector(`[data-tab-id="${id}"]`)) return;
        const clone = li.cloneNode(true) as HTMLLIElement;
        clone.dataset.tabId = id;
        const next = Array.from(dropdownUl.children).find(
          (child) => Number((child as HTMLElement).dataset.tabId) > Number(id)
        );

        if (next) {
          dropdownUl.insertBefore(clone, next);
        } else {
          dropdownUl.appendChild(clone);
        }
        li.style.visibility = "hidden";
      } else {
        // Restore visibility
        li.style.visibility = "";
        // Remove matching clone from dropdown
        const clone = dropdownUl.querySelector(`[data-tab-id="${id}"]`);
        if (clone) clone.remove();
      }
    });
  }, {
    root: tabsUL,
    threshold: 1
  });

  tabsLI.forEach(el => observer.observe(el));
});



function enhanceLabelButtons(): void {
  const labels = document.querySelectorAll<HTMLLabelElement>('label[role="button"][for]');

  labels.forEach(label => {
    // Make sure label is keyboard-focusable
    if (!label.hasAttribute('tabindex')) {
      label.setAttribute('tabindex', '0');
    }

    // Find the element referenced by "for"
    const forId = label.getAttribute('for');
    if (!forId) return;

    const target = document.getElementById(forId) as HTMLElement | null;
    if (!target) return;

    // Handle keyboard events
    label.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        target.click?.();
        event.preventDefault();
      }
    });
  });
}
