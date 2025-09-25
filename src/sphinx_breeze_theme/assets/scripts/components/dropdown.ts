import { defineComponent } from "../utils/component";


defineComponent(".bz-dropdown", (el) => {
  const button = el.querySelector("button");
  const content = el.querySelector("[role=menu]");
  if (!button || !content) return;

  button.setAttribute("aria-expanded", "false");
  content.setAttribute("aria-hidden", "true");

  const open = () => {
    button.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
  }

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
  }

  el.addEventListener("mouseenter", () => open());
  el.addEventListener("mouseleave", () => close());

  el.addEventListener("keydown", e => {
    const items = Array.from(content.querySelectorAll<HTMLElement>("[role=menuitem]"));
    if (!items.length) return;

    if (e.key === "Escape") {
      close();
      button.focus();
    } else if (e.key === "ArrowDown") {
      open();
      const i = items.indexOf(document.activeElement as HTMLElement);
      items[(i + 1) % items.length].focus();
    } else if (e.key === "ArrowUp") {
      open();
      const i = Math.max(items.indexOf(document.activeElement as HTMLElement), 0);
      items[(i - 1 + items.length) % items.length].focus();
    }
  });

  el.addEventListener('focusout', (e: FocusEvent) => {
    const newFocus = e.relatedTarget as Node | null;
    if (!newFocus || !el.contains(newFocus)) {
      close();
    }
  });
});
