export const setupScrollSpy = (links: Array<HTMLAnchorElement>): void => {
  let lastScrollY = window.scrollY;
  const elements = links.map(link => document.getElementById(link.hash.slice(1)))
    .filter((el): el is HTMLAnchorElement => el !== null)
    .reverse();

  const update = () => {
    const currentScrollY = window.scrollY;
    const showBackToTop = currentScrollY < lastScrollY && currentScrollY > 0;
    const active = elements.find(e => e.getBoundingClientRect().top < 150) ?? elements.at(-1);

    document.body.classList.toggle("show-back-to-top", showBackToTop);
    links.forEach(link => link.classList.toggle("current", link.hash === `#${active?.id}`));
    lastScrollY = currentScrollY;
  }

  update();
  window.addEventListener("scroll", update);
};
