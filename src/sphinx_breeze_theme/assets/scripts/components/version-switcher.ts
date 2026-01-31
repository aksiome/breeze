import { defineComponent } from "../utils/component";

interface VersionEntry {
  version: string;
  name: string;
  url: string;
}

const root = new URL(
  document.documentElement.dataset.content_root || "./",
  window.location.href,
).pathname;

const relative = window.location.pathname.startsWith(root)
  ? window.location.pathname.slice(root.length)
  : "";

const versionCache = new Map<string, Promise<VersionEntry[]>>();

defineComponent(".bz-version-switcher", el => {
  const button = el.querySelector("button");
  const btnSpan = button?.querySelector("span")
  const content = el.querySelector("ul");
  const current = button?.dataset.current;
  const url = button?.dataset.url;
  if (!button || !btnSpan || !content || !current || !url) return;

  const linkHandlers = new Map<HTMLAnchorElement, (event: MouseEvent) => void>();

  if (!versionCache.has(url)) {
    versionCache.set(url, fetch(url).then(res => {
      if (!res.ok) throw new Error(`Failed to fetch versions from ${url}`);
      return res.json();
    }).catch(err => {
      versionCache.delete(url);
      throw err;
    }));
  }

  versionCache.get(url)!.then(data => {
    if (!Array.isArray(data)) return;

    content.innerHTML = "";
    data.forEach(entry => {
      const li = document.createElement("li");
      content.appendChild(li);

      if (entry.version === current) {
        li.innerHTML = `<span class="current">${entry.name}</span>`;
        btnSpan.textContent = entry.name;
      } else {
        const base = new URL(entry.url, window.location.href);
        const target = new URL(relative, base).href;
        const link = document.createElement("a");
        li.appendChild(link);

        link.href = target;
        link.role = "menuitem";
        link.textContent = entry.name;

        const handleClick = (event: MouseEvent) => {
          event.preventDefault();
          fetch(target, { method: "HEAD" })
            .then(res => window.location.href = res.ok ? target : entry.url)
            .catch(() => window.location.href = entry.url);
        };

        linkHandlers.set(link, handleClick);
        link.addEventListener("click", handleClick);
      }
    });
  }).catch(err => console.error("Version switcher error:", err));

  return () => {
    linkHandlers.forEach((handler, link) => {
      link.removeEventListener("click", handler);
    });
  };
});
