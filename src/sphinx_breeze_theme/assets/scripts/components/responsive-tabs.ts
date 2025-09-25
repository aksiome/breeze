import { defineComponent } from "../utils/component";


defineComponent(".bz-header-tabs", el => {
  const tabs = el.querySelector("ul");
  const items = tabs?.querySelectorAll("li");
  const dropdown = el.querySelector(".bz-dropdown");
  const more = dropdown?.querySelector("ul");
  if (!tabs || !items || !dropdown || !more) return;

  tabs.style.overflowX = "hidden";
  items.forEach((el, i) => {
    if (!el.dataset.tabId) el.dataset.tabId = String(i);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const li = entry.target as HTMLLIElement;
      const id = li.dataset.tabId!;

      if (!entry.isIntersecting) {
        if (more.querySelector(`[data-tab-id="${id}"]`)) return;
        const clone = li.cloneNode(true) as HTMLLIElement;
        const next = Array.from(more.children).find(
          child => Number((child as HTMLElement).dataset.tabId) > Number(id)
        );
        next ? more.insertBefore(clone, next) : more.appendChild(clone);

        clone.dataset.tabId = id;
        const link = clone.querySelector("a");
        if (link) link.role = "menuitem";
        li.style.visibility = "hidden";
      } else {
        const clone = more.querySelector(`[data-tab-id="${id}"]`);
        if (clone) clone.remove();
        li.style.visibility = "";
      }
    });
  }, {root: tabs, threshold: 1});

  items.forEach(el => observer.observe(el));
});
