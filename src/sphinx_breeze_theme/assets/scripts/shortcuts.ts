document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    const link = document.querySelector<HTMLAnchorElement>(".bz-search-button a");
    if (link) {
      e.preventDefault();
      link.click();
    }
  }
});
