import { defineComponent } from "../utils/component";


defineComponent("label[role=button][for]", el => {
  const forId = el.getAttribute("for");
  if (!forId) return;
  const target = document.getElementById(forId);
  if (!target) return;

  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "0");
  }

  el.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      target.click?.();
      event.preventDefault();
    }
  });
});
