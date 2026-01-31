
interface Component<T extends HTMLElement> {
  selector: string;
  init: (el: T) => (() => void) | void;
  instances: WeakMap<T, (() => void) | undefined>;
}

const definitions: Component<HTMLElement>[] = [];

export function defineComponent<T extends HTMLElement>(
  selector: string,
  init: (el: T) => (() => void) | void,
) {
  const def: Component<T> = { selector, init, instances: new WeakMap() };
  definitions.push(def as Component<HTMLElement>);
  document.querySelectorAll<T>(selector).forEach((el) => initElement(el, def));
}

function initElement<T extends HTMLElement>(el: T, def: Component<T>) {
  if (def.instances.has(el)) return;
  const destroy = def.init(el) || undefined;
  def.instances.set(el, destroy);
}

function destroyElement<T extends HTMLElement>(el: T, def: Component<T>) {
  if (!def.instances.has(el)) return;
  const destroy = def.instances.get(el);
  if (destroy) destroy();
  def.instances.delete(el);
}

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node instanceof HTMLElement) {
        for (const def of definitions) {
          if (node.matches(def.selector)) {
            initElement(node, def);
          }
        }
        for (const child of node.querySelectorAll(definitions.map(d => d.selector).join(','))) {
          const defs = definitions.filter(d => child.matches(d.selector));
          for (const def of defs) {
            initElement(child as HTMLElement, def);
          }
        }
      }
    }
    for (const node of m.removedNodes) {
      if (node instanceof HTMLElement) {
        for (const def of definitions) {
          if (node.matches(def.selector)) {
            destroyElement(node, def);
          }
        }
        for (const child of node.querySelectorAll(definitions.map(d => d.selector).join(','))) {
          const defs = definitions.filter(d => child.matches(d.selector));
          for (const def of defs) {
            destroyElement(child as HTMLElement, def);
          }
        }
      }
    }
  }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
