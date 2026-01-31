import { defineComponent } from "../component";

// Sphinx search global object type declaration
declare const Search: {
  performSearch(query: string): void;
} | undefined;

defineComponent(".bz-search-form", el => {
  if (!(el instanceof HTMLFormElement)) return;

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const results = document.getElementById("search-results");
    const formData = new FormData(el);
    const query = formData.get("q")?.toString() ?? "";
    if (results) results.innerHTML = "";
    Search?.performSearch(query);
  };

  el.addEventListener("submit", handleSubmit);

  return () => el.removeEventListener("submit", handleSubmit);
});
