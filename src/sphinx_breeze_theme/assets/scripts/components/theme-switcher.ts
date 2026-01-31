import { defineComponent } from "../component";
import { Theme, nextTheme } from "../theme";


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

  const handleClick = () => {
    nextTheme();
    update();
  };

  update();
  button.addEventListener('click', handleClick);

  return () => button.removeEventListener('click', handleClick);
});
