import { useState } from 'react';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { CONTACT } from '../constants/testIds';

const socials = [
  { id: 'youtube', label: 'YouTube', href: 'https://youtube.com/@exoticlydev',
    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5A3 3 0 0 0 3.1 18.6C5 19 12 19 12 19s7 0 8.9-.4A3 3 0 0 0 23 16.5c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>) },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@exoticly_company',
    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.6 6.3a5.4 5.4 0 0 1-3.2-1V15.5a5.6 5.6 0 1 1-5.6-5.6h.9v2.9h-.9a2.7 2.7 0 1 0 2.7 2.7V2h2.8a5.4 5.4 0 0 0 3.3 4.3v0z"/></svg>) },
  { id: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/user/Exoticly_company/',
    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22 12c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6A9.4 9.4 0 0 0 13 9.1l.9-4.1 2.8.6c0 .7.6 1.3 1.3 1.3.8 0 1.4-.6 1.4-1.4 0-.7-.6-1.4-1.4-1.4-.5 0-1 .3-1.2.7l-3.2-.7c-.2 0-.4.1-.4.3l-1 4.7c-2 .1-3.8.8-5.2 1.8-.4-.4-.9-.6-1.5-.6-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8v.6c0 3.1 3.6 5.7 8.1 5.7 4.5 0 8.1-2.6 8.1-5.7v-.6c.7-.3 1.1-1 1.1-1.8zM8.6 13.4c0-.7.6-1.3 1.3-1.3.8 0 1.4.6 1.4 1.3 0 .8-.6 1.4-1.4 1.4-.7 0-1.3-.6-1.3-1.4zm6.8 3.7c-.8.8-2.3 1.1-3.4 1.1-1.2 0-2.7-.3-3.4-1.1a.4.4 0 0 1 .5-.5c.5.5 1.5.7 2.9.7s2.4-.2 2.9-.7a.4.4 0 0 1 .5.5zm-.1-2.3c-.7 0-1.4-.6-1.4-1.4 0-.7.6-1.3 1.4-1.3.7 0 1.3.6 1.3 1.3 0 .8-.6 1.4-1.3 1.4z"/></svg>) },
  { id: 'x', label: 'X / Twitter', href: 'https://x.com/exoticlydev',
    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.1-6.7L5.3 22H2.2l7.6-8.7L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.9L7.3 4h-2l12.5 16z"/></svg>) },
];

const COPY_EMAIL = 'exoticlycompany@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COPY_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${COPY_EMAIL}`;
    }
  };

  return (
    <section id="contact" data-testid={CONTACT.root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 06 · Contact</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              Let&apos;s build<br />something<br /><span className="ember-text">unforgettable.</span>
            </h2>

            <p className="mt-10 max-w-[560px] text-base md:text-lg text-[var(--ink-70)] font-body leading-relaxed">
              We don&apos;t do contact forms, just a private inbox. Drop us a message about
              beta testing, partnerships, bug reports, fan mail, or anything else.
              Response time: <span className="font-mono-ui text-sm text-[var(--ink-100)]">1–3 days</span>.
            </p>

            <div className="mt-12">
              <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] mb-4">Direct line</div>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton as="a" href={`mailto:${COPY_EMAIL}`} data-testid={CONTACT.emailBtn} className="btn-ember !text-sm">
                  {COPY_EMAIL}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </MagneticButton>
                <MagneticButton onClick={copy} className="btn-ghost">{copied ? 'Copied ✓' : 'Copy email'}</MagneticButton>
              </div>
            </div>

            <div className="mt-14">
              <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] mb-4">Find us elsewhere</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" data-testid={CONTACT.socialBtn(s.id)}
                     className="magnetic group flex items-center gap-3 px-5 py-3 glass rounded-full hover:border-[var(--ember)] transition-all">
                    <span className="text-[var(--ember)] group-hover:scale-110 transition-transform">{s.svg}</span>
                    <span className="font-mono-ui text-[11px] tracking-[0.2em] uppercase">{s.label}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-5">
            <div className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden h-full ember-glow-soft">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--ember)]/20 blur-3xl" />
              <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--ember)] to-transparent" />
              <div className="scanline opacity-20" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">Faded · Recruitment</span>
                  <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ember)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--ember)] animate-pulse" />Open
                  </span>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-[var(--ember)] to-[var(--ember-deep)] ember-glow-strong" />
                    <div className="absolute inset-2 rotate-45 border border-[var(--ember-soft)]/60" />
                    <div className="absolute inset-6 rotate-45 bg-[var(--bg-void)]" />
                    <div className="absolute inset-8 rotate-45 bg-gradient-to-br from-[var(--ember)] to-[var(--ember-deep)]" />
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl leading-tight text-center">
                  Become a <span className="ember-text">Beta Tester</span>
                </h3>
                <p className="mt-4 text-sm md:text-base text-[var(--ink-70)] text-center leading-relaxed">
                  Experience <span className="text-[var(--ink-100)]">Faded</span> before anyone else.
                  Get exclusive in-game items, early access to unreleased content, and a real chance to shape the final product.
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)]" /> Free sign-up</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)]" /> Limited spots</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rotate-45 bg-[var(--ember)]" /> Exclusive items</li>
                </ul>

                <div className="mt-8">
                  <MagneticButton as="a"
                    href={`mailto:${COPY_EMAIL}?subject=Faded%20Beta%20Tester%20Application&body=Hi%20Exoticly%2C%0A%0AI%27d%20like%20to%20apply%20to%20be%20a%20Faded%20beta%20tester.%0A%0A`}
                    className="btn-ember w-full justify-center">
                    Apply now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
