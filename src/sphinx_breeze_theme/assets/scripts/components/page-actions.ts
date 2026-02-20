import { defineComponent } from "../component";

const ICON_COPY = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path><path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path></svg>`;
const ICON_SPINNER = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 9 9"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.6s" repeatCount="indefinite"/></path></svg>`;
const ICON_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

defineComponent(".bz-page-actions", (el) => {
  el.querySelectorAll<HTMLElement>("[data-copy-source]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const sourceUrl = btn.dataset.copySource;
      if (sourceUrl) copyPageSource(sourceUrl, btn);
    });
  });
});

function setIcon(el: HTMLElement, icon: string): void {
  const svg = el.querySelector("svg");
  if (svg) svg.outerHTML = icon;
}

async function copyPageSource(url: string, btn: HTMLElement): Promise<void> {
  setIcon(btn, ICON_SPINNER);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    await navigator.clipboard.writeText(await response.text());
    setIcon(btn, ICON_CHECK);
    setTimeout(() => setIcon(btn, ICON_COPY), 2000);
  } catch (error) {
    console.error("Failed to copy page source:", error);
    setIcon(btn, ICON_COPY);
  }
}
