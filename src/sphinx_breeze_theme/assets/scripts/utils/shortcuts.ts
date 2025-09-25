declare const DOCUMENTATION_OPTIONS: { BUILDER?: string };

const builder = DOCUMENTATION_OPTIONS?.BUILDER || "html";
const root = document.documentElement.dataset.content_root || "./";
const search = builder === "dirhtml" ? `${root}search/` : `${root}search.html`;

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    window.location.href = `${search}#q`;
  }
});
