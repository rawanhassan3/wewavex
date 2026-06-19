import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'process', href: '#process' },
  { key: 'packages', href: '#packages' },
  { key: 'faq', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img
              src="/logo.png?v=3"
              alt="WebWavex logo"
              className="navbar__logo-img"
            />
            <span className="navbar__logo-text">WebWavex</span>
          </a>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.key}>
                <a href={link.href} className="navbar__link" onClick={(e) => handleLink(e, link.href)}>
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & Language Toggle */}
          <div className="navbar__actions">
            <div className="lang-switch">
              <button
                className={`lang-switch__btn ${language === 'en' ? 'lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Set language to English"
              >
                EN
              </button>
              <button
                className={`lang-switch__btn ${language === 'ar' ? 'lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('ar')}
                aria-label="Set language to Arabic"
              >
                AR
              </button>
              <div className={`lang-switch__slider lang-switch__slider--${language}`} />
            </div>

            {/* Theme Toggle */}
            <button
              className={`theme-toggle theme-toggle--desktop ${isDark ? 'theme-toggle--dark' : ''}`}
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-toggle__track">
                <span className="theme-toggle__thumb">
                  {isDark ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </span>
            </button>

            <a href="#contact" className="btn btn-primary btn-sm" onClick={(e) => handleLink(e, '#contact')}>
              {t('nav.cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button className="navbar__hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Floating Theme Toggle - Portal to body to guarantee fixed position */}
      {createPortal(
        <div className="theme-toggle-wrapper-mobile">
          <button
            className={`theme-toggle theme-toggle--mobile ${isDark ? 'theme-toggle--dark' : ''}`}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle__track">
              <span className="theme-toggle__thumb">
                {isDark ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </span>
            </span>
          </button>
        </div>,
        document.body
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {navLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} onClick={(e) => handleLink(e, link.href)}>{t(`nav.${link.key}`)}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-primary" style={{display:'inline-flex', marginTop: 8}} onClick={(e) => handleLink(e, '#contact')}>
                  {t('nav.cta')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

