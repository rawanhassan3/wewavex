import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/logo.png?v=3"
                alt="WebWavex logo"
                className="navbar__logo-img"
              />
              <span>WebWavex</span>
            </div>
            <p className="footer__tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer__social">
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Dribbble */}
              <a href="#" aria-label="Dribbble" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="footer__nav-group">
            <div className="footer__nav-col">
              <h4>{t('footer.services')}</h4>
              <ul>
                <li><a href="#services" onClick={e => handleNav(e, '#services')}>{t('footer.links.landing')}</a></li>
                <li><a href="#services" onClick={e => handleNav(e, '#services')}>{t('footer.links.custom')}</a></li>
                <li><a href="#services" onClick={e => handleNav(e, '#services')}>{t('footer.links.ecom')}</a></li>
                <li><a href="#services" onClick={e => handleNav(e, '#services')}>{t('footer.links.systems')}</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><a href="#services" onClick={e => handleNav(e, '#services')}>{t('footer.links.work')}</a></li>
                <li><a href="#process" onClick={e => handleNav(e, '#process')}>{t('footer.links.process')}</a></li>
                <li><a href="#packages" onClick={e => handleNav(e, '#packages')}>{t('footer.links.packages')}</a></li>
                <li><a href="#testimonials" onClick={e => handleNav(e, '#testimonials')}>{t('footer.links.testimonials')}</a></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h4>{t('footer.contact')}</h4>
              <ul>
                <li><a href={`mailto:${t('footer.links.email')}`}>{t('footer.links.email')}</a></li>
                <li><a href="#contact" onClick={e => handleNav(e, '#contact')}>{t('footer.links.book')}</a></li>
                <li><a href="#faq" onClick={e => handleNav(e, '#faq')}>{t('footer.links.faq')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} WebWavex. {t('footer.rights')}</p>
          <div className="footer__bottom-links">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

