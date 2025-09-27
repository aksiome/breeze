import { defineComponent } from "../utils/component";


defineComponent(".bz-search-form", el => {
  const form = el as HTMLFormElement;

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const results = document.getElementById("search-results");
    const formData = new FormData(form);
    const query = formData.get("q")?.toString() ?? "";
    if (results) results.innerHTML = "";
    Search.performSearch(query);
  };

  form.addEventListener("submit", handleSubmit);
});
