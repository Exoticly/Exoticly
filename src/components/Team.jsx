import Reveal from './Reveal';
import { TEAM } from '../constants/testIds';

const team = [
  { id: 'exo', handle: 'Exo', name: 'Blerti', role: 'Founder · Main Developer', origin: 'Kosovo → Germany',
    bio: 'Founder and driving force behind Exoticly. Blerti is a self-taught developer, pixel artist, and designer who builds everything from scratch, UI, code, game systems, and web. He leads the development of Faded and oversees the technical architecture of every Exoticly project. With an obsessive attention to detail, Blerti shapes the look, feel, and soul of everything Exoticly ships.',
    specs: ['Pixel Art', 'Coding', 'Web Design', 'Game Design', 'UI/UX', 'Music Production'] },
  { id: 'real', handle: 'reaL', name: 'Leonard', role: 'Story Writer · Pixel Artist', origin: 'Moldova → Germany',
    bio: "Leonard is the narrative heart of Exoticly and the creative co-author of Faded's world. A skilled storyteller and pixel artist, he crafts the branching storylines, characters, and emotional arcs that make Faded's world feel alive. He has a rare ability to write moments that stay with you, quiet, cinematic scenes that hit harder than any cutscene budget ever could. Outside of writing, Leonard contributes pixel art assets and helps shape the game's visual identity.",
    specs: ['Story Writing', 'Pixel Art', 'Narrative Design', 'Character Writing', 'World Building'] },
];

export default function Team() {
  return (
    <section id="team" data-testid={TEAM.root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 06 · Team</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Meet our<br /><span className="ember-text">leaders.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="md:col-span-5">
            <p className="text-base md:text-lg text-[var(--ink-70)] font-body">
              Two friends, two countries, one studio. Hover a card to flip it and meet the humans behind Exoticly.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((p, i) => (
            <Reveal key={p.id} delay={i + 1}>
              <div data-testid={TEAM.card(p.id)} className="flip-card group h-[500px] md:h-[560px]">
                <div className="flip-inner">
                  <div className="flip-face glass-strong rounded-3xl p-8 md:p-10 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--ember)]/15 blur-3xl" />
                      <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent opacity-60" />
                    </div>

                    <div className="relative h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">Crew / 0{i + 1}</span>
                        <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ember)]">Online</span>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8 float-y">
                          <div className="absolute inset-0 rounded-full bg-[var(--ember)]/10 blur-2xl" />
                          <div className="absolute inset-0 rounded-full border border-[var(--line-strong)] spin-slow" />
                          <div className="absolute inset-3 rounded-full border border-[var(--line)]" style={{ animation: 'spinSlow 30s linear infinite reverse' }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-20 h-20">
                              <span className="absolute inset-0 rotate-45 bg-gradient-to-br from-[var(--ember)] to-[var(--ember-deep)] ember-glow-strong" />
                              <span className="absolute inset-2 rotate-45 border border-[var(--ember-soft)]/60" />
                              <span className="absolute inset-0 flex items-center justify-center font-display text-2xl text-white">
                                {p.handle.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <h3 className="font-display text-4xl md:text-5xl ember-text">{p.handle}</h3>
                        <div className="mt-2 font-mono-ui text-xs tracking-[0.25em] uppercase text-[var(--ink-70)]">{p.role}</div>
                        <div className="mt-3 font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[var(--ink-40)]">{p.origin}</div>
                      </div>

                      <div className="flex items-center justify-between font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">
                        <span>{p.specs.slice(0, 2).join(' · ')}</span><span className="flex items-center gap-2">Hover →</span>
                      </div>
                    </div>
                  </div>

                  <div className="flip-face flip-back glass-strong rounded-3xl p-8 md:p-10 overflow-hidden ember-glow-soft">
                    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ember)]">Profile / {p.handle}</span>
                        <span className="w-2 h-2 rounded-full bg-[var(--ember)] animate-pulse" />
                      </div>

                      <h3 className="font-display text-3xl mb-1">{p.name}</h3>
                      <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-[var(--ink-40)] mb-5">
                        a.k.a {p.handle} · {p.origin}
                      </div>

                      <p className="text-sm md:text-base text-[var(--ink-70)] leading-relaxed flex-1">{p.bio}</p>

                      <div className="mt-6 pt-6 border-t border-[var(--line)]">
                        <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] mb-3">Specs</div>
                        <div className="flex flex-wrap gap-2">
                          {p.specs.map((s) => (
                            <span key={s} className="px-3 py-1.5 rounded-full text-[11px] font-mono-ui tracking-wider text-[var(--ink-100)] border border-[var(--line-strong)] bg-[var(--ember)]/8">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
