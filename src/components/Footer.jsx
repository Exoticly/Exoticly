import { FOOTER } from '../constants/testIds';

export default function Footer() {
  return (
    <footer data-testid={FOOTER.root} className="relative border-t border-[var(--line)] pt-16 pb-10 mt-20 overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="relative grid md:grid-cols-12 gap-10 pb-16">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative inline-flex items-center justify-center w-8 h-8">
                <span className="absolute inset-0 rotate-45 border border-[var(--ember)]" />
                <span className="absolute inset-1 rotate-45 bg-[var(--ember)]/30" />
              </span>
              <span className="font-display text-xl ember-text">Exoticly ©</span>
            </div>
            <p className="text-sm text-[var(--ink-70)] max-w-md leading-relaxed">
              An indie game studio building code, tools and unforgettable games out of Germany. Performance, atmosphere, craft.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] mb-4">Studio</div>
            <ul className="space-y-2 text-sm text-[var(--ink-70)]">
              <li><a className="hover:text-[var(--ember)] transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-[var(--ember)] transition-colors" href="#games">Games</a></li>
              <li><a className="hover:text-[var(--ember)] transition-colors" href="#products">Products</a></li>
              <li><a className="hover:text-[var(--ember)] transition-colors" href="#team">Team</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[var(--ink-40)] mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-[var(--ink-70)]">
              <li><a className="hover:text-[var(--ember)] transition-colors" href="mailto:exoticlycompany@gmail.com">exoticlycompany@gmail.com</a></li>
              <li>Response: 1–3 days</li>
              <li>Made in Germany</li>
            </ul>
          </div>
        </div>

        <div className="divider-x mb-8" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-ui text-[10px] tracking-[0.25em] uppercase text-[var(--ink-40)]">
          <div>© {new Date().getFullYear()} · Exoticly Company · All Rights Reserved</div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)] animate-pulse" />
            <span>Website V4.0 · Cinematic Remaster</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
