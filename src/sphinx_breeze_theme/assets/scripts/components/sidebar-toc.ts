import { defineComponent } from "../utils/component";


defineComponent(".bz-sidebar-toc", el => {
  const anchors = el.querySelectorAll<HTMLAnchorElement>("a[href^='#']:not([href='#'])");
  const targets = Array.from(anchors)
    .map(anchor => document.getElementById(anchor.hash.slice(1)))
    .filter((target): target is HTMLElement => target !== null)
    .reverse();

  const update = () => {
    const active = targets.find(e => e.getBoundingClientRect().top < 150) ?? targets.at(-1);
    anchors.forEach(anchor => anchor.classList.toggle("current", anchor.hash === `#${active?.id}`));
  };

  update();
  window.addEventListener("scroll", update)
  return () => window.removeEventListener("scroll", update)
});
