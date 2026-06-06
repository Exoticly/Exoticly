import HeroCrystal from './HeroCrystal';
import MagneticButton from './MagneticButton';
import { HERO } from '../constants/testIds';

const TITLE = 'Exoticly';

export default function Hero() {
  return (
    <section id="home" data-testid={HERO.root} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90vw] h-[90vw] md:w-[700px] md:h-[700px]">
          <HeroCrystal />
        </div>
      </div>

      <div className="absolute top-28 md:top-32 left-0 right-0 flex justify-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)] animate-pulse" />
          <span className="font-mono-ui text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[var(--ink-70)]">
            Indie Game Studio · Est. Germany
          </span>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 pointer-events-none">
        <h1 data-testid={HERO.title} className="font-display text-[18vw] md:text-[10rem] lg:text-[13rem] leading-[0.85] tracking-tighter" aria-label={TITLE}>
          {TITLE.split('').map((ch, i) => (
            <span key={i} className="letter ember-text" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>{ch}</span>
          ))}
        </h1>

        <p data-testid={HERO.subtitle} className="reveal visible reveal-delay-3 max-w-[640px] mx-auto mt-8 text-base md:text-lg text-[var(--ink-70)] font-body" style={{ animationDelay: '1.6s' }}>
          Where code, tools & indie games converge to create unforgettable digital experiences.
        </p>

        <div className="reveal visible reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <MagneticButton data-testid={HERO.ctaPrimary} className="btn-ember" onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore our games
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </MagneticButton>
          <MagneticButton data-testid={HERO.ctaSecondary} className="btn-ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn more
          </MagneticButton>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">
        <div className="flex items-center gap-3"><span className="w-6 h-px bg-[var(--ember)]" />System / 04.0</div>
        <div className="rotate-180 [writing-mode:vertical-rl]">CINEMATIC · INTERACTIVE · IMMERSIVE</div>
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-6 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">
        <div className="flex items-center gap-3">Made in Germany<span className="w-6 h-px bg-[var(--ember)]" /></div>
        <div className="[writing-mode:vertical-rl]">© EXOTICLY 2026 · ALL RIGHTS</div>
      </div>

      <button data-testid={HERO.scrollIndicator} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group">
        <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] group-hover:text-[var(--ember)] transition-colors">Scroll</span>
        <span className="relative w-px h-12 bg-[var(--line)] overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--ember)] to-transparent animate-pulse" />
        </span>
      </button>
    </section>
  );
}
