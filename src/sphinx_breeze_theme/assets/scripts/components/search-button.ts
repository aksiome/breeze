import { defineComponent } from "../utils/component";


defineComponent(".bz-search-button", el => {
  const link = el.querySelector("a");
  if (!link) return;

  link.addEventListener("click", e => {
    if (document.getElementsByTagName("readthedocs-search").length > 0) {
      e.preventDefault();
      e.stopPropagation();
      const event  = new CustomEvent("readthedocs-search-show");
      document.dispatchEvent(event);
    }
  });
});
