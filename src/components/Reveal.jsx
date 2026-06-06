import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(el); }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : '';
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
