import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const elements = el.querySelectorAll('.reveal');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCountUp(end: number, duration: number = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true;
            const el = ref.current;
            if (!el) return;

            let start = 0;
            const step = end / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                el.textContent = end.toString();
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(start).toString();
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return ref;
}
