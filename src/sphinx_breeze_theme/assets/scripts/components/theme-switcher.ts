import { defineComponent } from "../utils/component";
import { Theme, nextTheme } from "../utils/theme";


defineComponent(".bz-theme-switcher", el => {
  const button = el.querySelector("button");
  if (!button) return;

  const update = () => {
    const next = document.documentElement.dataset.theme === Theme.LIGHT
      ? Theme.DARK
      : Theme.LIGHT
    button.ariaLabel = `Switch to ${next} mode`;
    button.dataset.tooltip = button.ariaLabel;
  }

  update();
  button.addEventListener('click', () => {
    nextTheme();
    update();
  });
});
