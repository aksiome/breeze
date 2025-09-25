export enum Theme {
  AUTO = "auto",
  LIGHT = "light",
  DARK = "dark",
}

export const setTheme = (mode: Theme): void => {
  const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
  const theme = mode === Theme.AUTO ? prefers : mode;

  document.documentElement.dataset.mode = mode;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("breeze-mode", mode);
};

export const nextTheme = (): void => {
  const mode = localStorage.getItem("breeze-mode") as Theme ?? Theme.AUTO;

  if (mode === Theme.AUTO) {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
    setTheme(prefers === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  } else {
    setTheme(Theme.AUTO);
  }
};

const media = window.matchMedia("(prefers-color-scheme: dark)");
media.addEventListener("change", (e) => {
  const mode = localStorage.getItem("mode");
  if (mode === Theme.AUTO) {
    const preferred = e.matches ? Theme.DARK : Theme.LIGHT;
    document.documentElement.dataset.theme = preferred;
  }
});
