import { useRef } from 'react';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { GAMES } from '../constants/testIds';

const games = [
  {
    id: 'faded',
    title: 'Faded',
    status: 'In Development',
    genre: 'Pixel RPG · Cinematic',
    year: '2026',
    pitch: 'A pixel RPG built around storytelling and the weight of your choices. Every decision you make shapes the narrative, friendships, fates, and endings are all in your hands. Explore a handcrafted world lit by dynamic lighting that reacts to time, weather, and your surroundings, blending classic pixel art with subtle realistic elements for a look unlike anything else.',
    bullets: [
      'Story-driven, your choices shape the narrative',
      'Multiple branching paths & unique endings',
      'Dynamic lighting & realistic visual elements',
      'Original soundtrack',
      'Hand-crafted pixel-art world',
      'Atmospheric, cinematic presentation',
    ],
    badge: 'Flagship',
  },
];

function Tilt({ children, className = '' }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    el.style.setProperty('--mx', `${(e.clientX - r.left) / r.width * 100}%`);
    el.style.setProperty('--my', `${(e.clientY - r.top) / r.height * 100}%`);
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)'; };
  return (<div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`card-3d ${className}`}>{children}</div>);
}

export default function Games() {
  return (
    <section id="games" data-testid={GAMES.root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 03 · Games</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Worlds we&apos;re<br /><span className="ember-text">building.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="md:col-span-5">
            <p className="text-base md:text-lg text-[var(--ink-70)] font-body">
              Hand-crafted indie titles built around atmosphere, story, and the kind of detail that only comes from caring deeply about every pixel.
            </p>
          </Reveal>
        </div>

        {games.map((g) => (
          <Reveal key={g.id} delay={1}>
            <Tilt>
              <article data-testid={GAMES.card(g.id)} className="relative glass-strong rounded-3xl overflow-hidden ember-glow-soft"
                style={{ background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,90,31,0.16), transparent 55%), linear-gradient(180deg, rgba(20,10,8,0.85), rgba(8,4,4,0.7))' }}>
                <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
                  style={{ background: 'radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(255,122,58,0.25), transparent 60%)' }} />
                <div className="relative grid md:grid-cols-12 gap-10 p-8 md:p-14">
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full bg-[var(--ember)]/20 text-[var(--ember-soft)] border border-[var(--ember)]/40">{g.badge}</span>
                      <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border border-[var(--line)] text-[var(--ink-70)]">{g.status}</span>
                      <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">{g.genre}</span>
                    </div>

                    {/* Faded logo */}
                    <div className="mb-4">
                      <img
                        src="/images/faded-logo.png"
                        alt="Faded"
                        className="h-20 md:h-28 w-auto object-contain"
                        style={{ filter: 'drop-shadow(0 0 18px rgba(255,90,31,0.55))' }}
                      />
                    </div>

                    <p className="mt-4 max-w-[560px] text-base md:text-lg text-[var(--ink-70)] leading-relaxed">{g.pitch}</p>

                    <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                      {g.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-[var(--ink-100)]">
                          <span className="mt-1.5 inline-block w-2 h-2 rotate-45 bg-[var(--ember)]" /><span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <MagneticButton as="a" href="mailto:exoticlycompany@gmail.com?subject=Faded%20Beta%20Tester%20Application" className="btn-ember">
                        Apply as beta tester
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                      </MagneticButton>
                      <MagneticButton as="a" href="https://youtube.com/@exoticlydev" target="_blank" rel="noopener noreferrer" className="btn-ghost">Watch reveal</MagneticButton>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative min-h-[300px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Dynamic lighting showcase image */}
                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="relative rounded-2xl overflow-hidden border border-[var(--line-strong)]" style={{ boxShadow: '0 0 40px rgba(255,90,31,0.25)' }}>
                          <img
                            src="/images/dynamic_lighting.png"
                            alt="Dynamic Lighting"
                            className="w-full max-w-[320px] object-cover rounded-2xl"
                            style={{ opacity: 0.92 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                          <div className="absolute bottom-3 left-4 right-4 font-mono-ui text-[10px] tracking-[0.25em] uppercase text-[var(--ember)]">
                            Dynamic Lighting System
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">
                          EXO-001 · FADED · {g.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scanline" />
              </article>
            </Tilt>
          </Reveal>
        ))}

        <Reveal delay={2} className="mt-10">
          <div className="overflow-hidden glass rounded-full px-6 py-4 flex items-center gap-6">
            <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ember)] whitespace-nowrap">Coming soon</span>
            <div className="flex-1 overflow-hidden">
              <div className="marquee-track flex gap-12 whitespace-nowrap font-mono-ui text-xs tracking-[0.25em] uppercase text-[var(--ink-70)]">
                {Array(2).fill(0).map((_, i) => (
                  <div key={i} className="flex gap-12">
                    <span>Untitled Project · 02</span><span>◆</span>
                    <span>Performance Toolkit</span><span>◆</span>
                    <span>Faded · OST Vol. 1</span><span>◆</span>
                    <span>Localization · DE / FR / ES</span><span>◆</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
