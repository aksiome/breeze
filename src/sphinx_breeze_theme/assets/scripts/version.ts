export const populateVersionSwitchers = (buttons: Array<HTMLButtonElement>): void => {
  const contentRootRel = document.documentElement.dataset.content_root || "./";
  const contentRootAbs = new URL(contentRootRel, window.location.href).pathname;
  const currentPathname = window.location.pathname;
  const relativePath = currentPathname.startsWith(contentRootAbs)
    ? currentPathname.slice(contentRootAbs.length)
    : "";

  buttons.forEach(button => {
    const parent = button.parentElement;
    const items = parent?.querySelector(".bz-dropdown-content ul") as HTMLUListElement;

    const url = button.dataset.url;
    const current = button.dataset.current;

    if (!url || !items) return;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch versions from ${url}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) return;

        items.innerHTML = "";

        data.forEach((entry: any) => {
          const li = document.createElement("li");

          if (entry.version === current) {
            const span = document.createElement("span");
            span.textContent = entry.name;
            span.classList.add("current");

            const btnSpan = button.querySelector("span");
            if (btnSpan) {
              btnSpan.textContent = entry.name;
            }

            li.appendChild(span);
          } else {
            const a = document.createElement("a");

            let base = entry.url;
            if (!base.endsWith("/")) base += "/";

            console.log(relativePath)
            console.log(base)

            const baseUrlAbs = new URL(entry.url, window.location.href);
            const targetUrl = new URL(relativePath, baseUrlAbs).href;

            console.log(targetUrl)

            a.href = targetUrl;
            a.textContent = entry.name;

            a.addEventListener("click", (event) => {
              event.preventDefault();
              fetch(targetUrl, { method: "HEAD" })
                .then(res => {
                  if (res.ok) {
                    window.location.href = targetUrl;
                  } else {
                    window.location.href = base;
                  }
                })
                .catch(() => {
                  window.location.href = base;
                });
            });

            li.appendChild(a);
          }

          items.appendChild(li);
        });
      })
      .catch((err) => {
        console.error("Version switcher error:", err);
      });
  });
};
