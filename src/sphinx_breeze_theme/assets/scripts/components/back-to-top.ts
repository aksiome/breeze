import { defineComponent } from "../component";


let lastScrollY = window.scrollY;

defineComponent(".bz-back-to-top", el => {
  const update = () => {
    const currentScrollY = window.scrollY;
    const showBackToTop = currentScrollY < lastScrollY && currentScrollY > 0;
    el.classList.toggle("active", showBackToTop);
    lastScrollY = currentScrollY;
  }

  const throttledUpdate = (() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };
  })();

  window.addEventListener("scroll", throttledUpdate);

  return () => window.removeEventListener("scroll", throttledUpdate)
});
