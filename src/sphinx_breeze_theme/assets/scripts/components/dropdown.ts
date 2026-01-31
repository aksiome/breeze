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

  const handleMouseEnter = () => open();
  const handleMouseLeave = () => close();

  const handleKeydown = (e: KeyboardEvent) => {
    const items = Array.from(content.querySelectorAll<HTMLElement>("[role=menuitem]"));
    if (!items.length) return;

    const activeElement = document.activeElement;

    if (e.key === "Enter") {
      open();
      e.preventDefault();
    } else if (e.key === "Escape") {
      close();
      button.focus();
    } else if (e.key === "ArrowDown") {
      const i = activeElement instanceof HTMLElement ? items.indexOf(activeElement) : -1;
      items[(i + 1) % items.length].focus();
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      const i = activeElement instanceof HTMLElement ? Math.max(items.indexOf(activeElement), 0) : 0;
      items[(i - 1 + items.length) % items.length].focus();
      e.preventDefault();
    }
  };

  const handleFocusout = (e: FocusEvent) => {
    const newFocus = e.relatedTarget as Node | null;
    if (!newFocus || !el.contains(newFocus)) {
      close();
    }
  };

  el.addEventListener("mouseenter", handleMouseEnter);
  el.addEventListener("mouseleave", handleMouseLeave);
  el.addEventListener("keydown", handleKeydown);
  el.addEventListener('focusout', handleFocusout);

  return () => {
    el.removeEventListener("mouseenter", handleMouseEnter);
    el.removeEventListener("mouseleave", handleMouseLeave);
    el.removeEventListener("keydown", handleKeydown);
    el.removeEventListener("focusout", handleFocusout);
  };
});
