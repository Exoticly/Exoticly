import Reveal from './Reveal';
import { ABOUT } from '../constants/testIds';

const stats = [
  { label: 'Studio Version', value: 'V4.0' },
  { label: 'Engine', value: 'GMS2' },
  { label: 'Based In', value: 'DE / EU' },
  { label: 'Lanes', value: '4+' },
];

export default function About() {
  return (
    <section id="about" data-testid={ABOUT.root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 02 · About</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Indie games &<br />digital tools,<br />
                <span className="ember-text">forged by hand.</span>
              </h2>
            </Reveal>

            <Reveal delay={2} className="mt-10 max-w-[640px]">
              <p className="text-base md:text-lg text-[var(--ink-70)] leading-relaxed font-body">
                Exoticly started as a single project, a desire to build inspiring games and useful tools for Windows users. Today we are a small group of developers based in Germany, obsessed with performance, atmosphere and the kind of craft you can only get from building everything yourself.
              </p>
              <p className="mt-6 text-base md:text-lg text-[var(--ink-70)] leading-relaxed font-body">
                For our games we primarily use <span className="text-[var(--ink-100)] font-mono-ui text-sm">Game Maker Studio 2</span>. For everything else, we write the code, draw the pixels, score the music, and ship it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={3} className="md:col-span-5">
            <div className="relative glass rounded-2xl p-8 md:p-10 float-y ember-glow-soft">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent" />
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">Studio · Manifest</span>
                <span className="w-2 h-2 rounded-full bg-[var(--ember)] animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl md:text-4xl ember-text">{s.value}</div>
                    <div className="mt-1 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-[var(--ink-40)]">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[var(--line)]">
                <p className="font-mono-ui text-xs text-[var(--ink-70)] leading-relaxed">
                  &quot;We build code, tools & indie games, mainly focused on performance and gaming.&quot;
                </p>
                <div className="mt-4 font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-40)]">
                 , Exoticly Studio Charter
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {[
            { n: '01', t: 'Crafted, not templated', d: 'Pixels drawn, code written, every asset made in-house, no marketplace shortcuts.' },
            { n: '02', t: 'Performance-first', d: 'Our games & tools are built lean. Smooth on the hardware you already own.' },
            { n: '03', t: 'Cinematic storytelling', d: 'Branching narratives, original soundtracks, and decisions that actually matter.' },
          ].map((p, i) => (
            <Reveal key={p.n} delay={(i + 1)}>
              <div className="glass rounded-xl p-7 h-full hover:border-[var(--ember)] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-ui text-xs ember-text">{p.n}</span>
                  <span className="w-8 h-px bg-[var(--line)] group-hover:bg-[var(--ember)] transition-colors" />
                </div>
                <h3 className="font-display text-xl mb-3">{p.t}</h3>
                <p className="text-sm text-[var(--ink-70)] leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
