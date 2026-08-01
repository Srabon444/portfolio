import { REVEAL_OBSERVER_OPTIONS } from "./constants";

type Cb = (entry: IntersectionObserverEntry) => void;

const callbacks = new Map<Element, Cb>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => callbacks.get(e.target)?.(e)),
      REVEAL_OBSERVER_OPTIONS
    );
  }
  return observer;
}

export function observe(el: Element, cb: Cb): void {
  callbacks.set(el, cb);
  getObserver()?.observe(el);
}

export function unobserve(el: Element): void {
  callbacks.delete(el);
  getObserver()?.unobserve(el);
}
