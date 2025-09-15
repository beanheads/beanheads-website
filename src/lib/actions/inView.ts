export type InViewOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onEnter?: (el: Element) => void;
};

export function inView(node: Element, options: InViewOptions = {}) {
  const { root = null, rootMargin = '0px 0px -40% 0px', threshold = 0.2, onEnter } = options;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onEnter?.(entry.target);
      }
    }
  }, { root, rootMargin, threshold });

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    }
  };
}

