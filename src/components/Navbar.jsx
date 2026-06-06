import { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';
import { NAV } from '../constants/testIds';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'games', label: 'Games' },
  { id: 'elyx', label: 'ELYX' },
  { id: 'products', label: 'Products' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offsets = links.map(l => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Infinity };
        return { id: l.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      data-testid={NAV.root}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 transition-all duration-500">
        <div className={`flex items-center justify-between ${scrolled ? 'glass-strong rounded-full px-6 py-3' : ''}`}>
          <button data-testid={NAV.logo} onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
            <span className="relative inline-flex items-center justify-center w-8 h-8">
              <span className="absolute inset-0 rotate-45 border border-[var(--ember)] rounded-sm group-hover:rotate-90 transition-transform duration-700"></span>
              <span className="absolute inset-1 rotate-45 bg-[var(--ember)]/30 rounded-sm"></span>
              <span className="relative w-1.5 h-1.5 bg-[var(--ember)] rounded-full ember-glow-soft"></span>
            </span>
            <span className="font-display text-xl tracking-wider ember-text">
              Exoticly
            </span>
            <span className="hidden md:inline text-[10px] font-mono-ui text-[var(--ink-40)] border border-[var(--line)] px-2 py-0.5 rounded-full">V4.0</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <button
                key={l.id}
                data-testid={NAV.link(l.id)}
                onClick={() => scrollTo(l.id)}
                className={`relative px-4 py-2 text-[11px] font-mono-ui uppercase tracking-[0.18em] transition-colors ${active === l.id ? 'text-[var(--ember)]' : 'text-[var(--ink-70)] hover:text-[var(--ink-100)]'}`}
              >
                <span className="text-[var(--ink-40)] mr-2">0{i + 1}</span>
                {l.label}
                {active === l.id && (<span className="absolute left-4 right-4 bottom-1 h-px bg-[var(--ember)] ember-glow-soft" />)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton data-testid={NAV.cta} onClick={() => scrollTo('contact')} className="btn-ghost !py-2.5 !px-5 hidden md:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)] ember-glow-soft" />
              Contact us
            </MagneticButton>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 border border-[var(--line)] rounded-full">
              <span className={`block w-5 h-px bg-[var(--ink-100)] transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`block w-5 h-px bg-[var(--ink-100)] mt-1.5 transition-transform ${open ? '-translate-y-0.5 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-1">
            {links.map((l, i) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left px-3 py-2 text-sm font-mono-ui uppercase tracking-wider text-[var(--ink-70)] hover:text-[var(--ember)]">
                <span className="text-[var(--ink-40)] mr-2">0{i + 1}</span>{l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
