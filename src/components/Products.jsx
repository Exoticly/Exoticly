import Reveal from './Reveal';
import { PRODUCTS } from '../constants/testIds';

const products = [
  { id: 'quality', n: '01', title: 'High Quality',
    desc: 'Everything we make is self-made, pixels, code, music, UI. Hours, sometimes days per asset. No template shortcuts, no free-asset filler.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M12 2l2.4 6.8L21 9l-5.4 4 1.8 7L12 16.2 6.6 20l1.8-7L3 9l6.6-.2L12 2z"/></svg>) },
  { id: 'support', n: '02', title: 'Support',
    desc: 'Complaint, question, bug report, write us and we reply, usually within 1–3 days. Real humans, no bots, no tier-1 outsourcing.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-7.6-4.5L3 21l5.6-1.4A8.5 8.5 0 0 1 21 11.5z"/></svg>) },
  { id: 'secure', n: '03', title: 'Secure',
    desc: 'Our products contain zero malware. Some antivirus tools may flag indie builds, feel free to scan in a VM or with any tool you trust.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>) },
  { id: 'global', n: '04', title: 'Around the world',
    desc: 'Built primarily in English with translations planned for German, French, Spanish and more, so players everywhere can dive in without barriers.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>) },
];

export default function Products() {
  return (
    <section id="products" data-testid={PRODUCTS.root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-[var(--ember)]">/ 05 · Products</span>
          <span className="flex-1 energy-line" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Built every day<br />to make players<br /><span className="ember-text">happier.</span>
            </h2>
          </Reveal>
          <Reveal delay={2} className="md:col-span-5">
            <p className="text-base md:text-lg text-[var(--ink-70)] font-body">
              The four principles every Exoticly build is measured against, before, during, and after release.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) + 1}>
              <div data-testid={PRODUCTS.card(p.id)} className="group relative glass rounded-2xl p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:border-[var(--ember)]">
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(255,90,31,0.18), transparent 60%)' }} />
                <span className="absolute top-6 right-6 w-3 h-3 rotate-45 border border-[var(--ember)] ember-glow-soft" />
                <span className="absolute top-7 right-7 w-1.5 h-1.5 rotate-45 bg-[var(--ember)]" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl glass-strong text-[var(--ember)] group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                    <span className="font-display text-3xl text-[var(--ink-20)] group-hover:ember-text transition-colors">{p.n}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-4">{p.title}</h3>
                  <p className="text-sm md:text-base text-[var(--ink-70)] leading-relaxed font-body">{p.desc}</p>

                  <div className="mt-8 pt-6 border-t border-[var(--line)] flex items-center justify-between">
                    <span className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)]">Module / {p.id}</span>
                    <span className="flex items-center gap-2 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ember)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--ember)] animate-pulse" />Active
                    </span>
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
