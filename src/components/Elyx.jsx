import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

const features = [
  {
    id: 'offline',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 0-8H6.5a3.5 3.5 0 1 1 0-7H19" />
        <line x1="12" y1="3" x2="12" y2="9" /><polyline points="9 6 12 3 15 6" />
      </svg>
    ),
    title: 'Fully Offline',
    desc: 'Upload your own music, covers, and lyrics, no internet needed. Your library, your rules.',
  },
  {
    id: 'playlists',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
    title: 'Playlist Import',
    desc: 'Import playlists from Spotify and other streaming services. Your collections, brought home.',
  },
  {
    id: 'themes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Themes & Customization',
    desc: 'Choose from multiple built-in themes or build your own. Every color, every layout, fully yours.',
  },
  {
    id: 'metadata',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Rich Metadata',
    desc: 'Attach song covers, lyrics, artist info, and more. Your music player, done right.',
  },
];

export default function Elyx() {
  return (
    <section id="elyx" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 04 · Software</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Music on your<br /><span className="ember-text">own terms.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="md:col-span-5">
            <p className="text-base md:text-lg text-[var(--ink-70)] font-body">
              ELYX is Exoticly&apos;s second major project, an offline music player built for people who want total control over their listening experience.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="relative glass-strong rounded-3xl overflow-hidden ember-glow-soft"
            style={{ background: 'radial-gradient(100% 60% at 20% 0%, rgba(255,90,31,0.13), transparent 50%), linear-gradient(160deg, rgba(20,10,8,0.9), rgba(8,4,4,0.75))' }}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="relative grid md:grid-cols-12 gap-10 p-8 md:p-14">
              {/* Left: logo + description */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  {/* ELYX logo */}
                  <div className="mb-8">
                    <img
                      src="/images/elyx-logo.png"
                      alt="ELYX"
                      className="h-20 md:h-28 w-auto object-contain"
                      style={{ filter: 'drop-shadow(0 0 18px rgba(255,90,31,0.6))' }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full bg-[var(--ember)]/20 text-[var(--ember-soft)] border border-[var(--ember)]/40">
                      2nd Biggest Project
                    </span>
                    <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border border-[var(--line)] text-[var(--ink-70)]">
                      In Development
                    </span>
                    <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">
                      Desktop · Offline
                    </span>
                  </div>

                  <p className="text-base md:text-lg text-[var(--ink-70)] leading-relaxed max-w-[500px]">
                    ELYX is a fully offline music player where you own your experience completely. Upload your own tracks, add custom covers, embed lyrics, and organize your library exactly how you want it. Import playlists from Spotify and other platforms, then take them anywhere, no connection required.
                  </p>
                  <p className="mt-4 text-base text-[var(--ink-70)] leading-relaxed max-w-[500px]">
                    Built with deep customization at its core, ELYX ships with multiple polished themes and a full theme editor, every color, every element, every detail adjustable. Your player, your aesthetic.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton as="a" href="mailto:exoticlycompany@gmail.com?subject=ELYX%20Early%20Access" className="btn-ember">
                    Get notified
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </MagneticButton>
                  <MagneticButton as="a" href="https://youtube.com/@exoticlydev" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Follow progress
                  </MagneticButton>
                </div>
              </div>

              {/* Right: feature grid */}
              <div className="md:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {features.map((f, i) => (
                    <Reveal key={f.id} delay={i + 1}>
                      <div className="group relative glass rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-[var(--ember)]">
                        <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{ background: 'radial-gradient(300px circle at 50% 0%, rgba(255,90,31,0.15), transparent 60%)' }} />
                        <span className="absolute top-4 right-4 w-2.5 h-2.5 rotate-45 border border-[var(--ember)] ember-glow-soft" />
                        <div className="relative">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl glass-strong text-[var(--ember)] mb-4 group-hover:scale-110 transition-transform duration-500">
                            {f.icon}
                          </div>
                          <h4 className="font-display text-lg md:text-xl mb-2">{f.title}</h4>
                          <p className="text-sm text-[var(--ink-70)] leading-relaxed font-body">{f.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] text-right">
                  EXO-002 · ELYX · 2026
                </div>
              </div>
            </div>
            <div className="scanline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
