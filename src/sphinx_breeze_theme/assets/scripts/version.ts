export const populateVersionSwitchers = (buttons: Array<HTMLButtonElement>): void => {
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
            a.href = entry.url;
            a.textContent = entry.name;
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
