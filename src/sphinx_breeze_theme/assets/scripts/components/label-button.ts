import { defineComponent } from "../component";


defineComponent("label[role=button][for]", el => {
  const forId = el.getAttribute("for");
  if (!forId) return;
  const target = document.getElementById(forId);
  if (!target) return;

  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "0");
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      target.click?.();
      event.preventDefault();
    }
  };

  el.addEventListener('keydown', handleKeydown);

  return () => el.removeEventListener('keydown', handleKeydown);
});
