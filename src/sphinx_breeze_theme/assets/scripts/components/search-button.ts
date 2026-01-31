import { defineComponent } from "../component";


defineComponent(".bz-search-button", el => {
  const link = el.querySelector("a");
  if (!link) return;

  const handleClick = (e: MouseEvent) => {
    if (document.getElementsByTagName("readthedocs-search").length > 0) {
      e.preventDefault();
      e.stopPropagation();
      const event  = new CustomEvent("readthedocs-search-show");
      document.dispatchEvent(event);
    }
  };

  link.addEventListener("click", handleClick);

  return () => link.removeEventListener("click", handleClick);
});
