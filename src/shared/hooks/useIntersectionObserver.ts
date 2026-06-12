"use client";

import { useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  once?: boolean;
};

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {},
) {
  const {
    once = true,
    threshold = 0.15,
    rootMargin = "0px 0px -8% 0px",
    root = null,
  } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsInView(true);

        if (once) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin, root },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold, rootMargin, root]);

  return { ref, isInView };
}
