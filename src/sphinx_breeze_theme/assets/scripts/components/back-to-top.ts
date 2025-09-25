import { defineComponent } from "../utils/component";


let lastScrollY = window.scrollY;

defineComponent(".bz-back-to-top", el => {
  const update = () => {
    const currentScrollY = window.scrollY;
    const showBackToTop = currentScrollY < lastScrollY && currentScrollY > 0;
    el.classList.toggle("active", showBackToTop);
    lastScrollY = currentScrollY;
  }

  window.addEventListener("scroll", update);
  return () => window.removeEventListener("scroll", update)
});
