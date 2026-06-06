export const HOME = { emergentLink: 'home-emergent-link' };

export const NAV = {
  root: 'navbar',
  logo: 'navbar-logo',
  link: (id) => `nav-link-${id}`,
  cta: 'navbar-cta',
};

export const HERO = {
  root: 'hero-section',
  title: 'hero-title',
  subtitle: 'hero-subtitle',
  ctaPrimary: 'hero-cta-primary',
  ctaSecondary: 'hero-cta-secondary',
  scrollIndicator: 'hero-scroll-indicator',
};

export const ABOUT    = { root: 'about-section' };
export const GAMES    = { root: 'games-section',    card: (id) => `game-card-${id}` };
export const PRODUCTS = { root: 'products-section', card: (id) => `product-card-${id}` };
export const TEAM     = { root: 'team-section',     card: (id) => `team-card-${id}` };
export const CONTACT  = {
  root: 'contact-section',
  emailBtn: 'contact-email-btn',
  socialBtn: (id) => `contact-social-${id}`,
};
export const FOOTER = { root: 'footer' };
