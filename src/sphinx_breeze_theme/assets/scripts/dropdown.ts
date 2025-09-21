export const setupDropdownButtons = (buttons: Array<HTMLButtonElement>): void => {
  buttons.forEach(button => {
    const parent = button.parentElement;
    const content = parent?.querySelector(".bz-dropdown-content");

    const open = () => {
      button.setAttribute('aria-expanded', 'true');
      content?.setAttribute('aria-hidden', 'false');
    }

    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      content?.setAttribute('aria-hidden', 'true');
    }

    parent?.addEventListener('mouseenter', () => open());
    parent?.addEventListener('mouseleave', () => close());

    button?.addEventListener('click', e => {
      e.preventDefault();
      open();
      button.focus();
    });

    parent?.addEventListener('focusout', e => {
      const newFocus = (e as FocusEvent).relatedTarget as Node | null;
      if (!newFocus || !parent?.contains(newFocus)) {
        close();
      }
    });
  });
};
