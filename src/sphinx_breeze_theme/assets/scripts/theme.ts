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

export const setupThemeSwitchers = (buttons: Array<HTMLButtonElement>): void => {
  buttons.forEach(button => {
    button.ariaLabel = `Switch to ${document.documentElement.dataset.theme === "light" ? "dark" : "light"} mode`;
    button.dataset.tooltip = button.ariaLabel;

    button?.addEventListener('click', () => {
      nextTheme();
      button.ariaLabel = `Switch to ${document.documentElement.dataset.theme === "light" ? "dark" : "light"} mode`;
      button.dataset.tooltip = button.ariaLabel;
    });
  });
};
