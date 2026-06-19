import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.4, 0, 0.2, 1] } }),
};

export default function Hero() {
  const { t, isRtl } = useLanguage();

  const floatingCards = [
    { icon: '🚀', label: t('hero.float1l'), sub: t('hero.float1s'), color: '#4F9D94', delay: 0 },
    { icon: '📈', label: t('hero.float2l'), sub: t('hero.float2s'), color: '#A7C7E7', delay: 0.15 },
    { icon: '⚡', label: t('hero.float3l'), sub: t('hero.float3s'), color: '#4F9D94', delay: 0.3 },
    { icon: '✨', label: t('hero.float4l'), sub: t('hero.float4s'), color: '#A7C7E7', delay: 0.45 },
  ];

  return (
    <section className="hero" id="hero">
      {/* Animated mesh background */}
      <div className="hero__mesh">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          {/* Badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            {t('hero.badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {t('hero.title1')}
            <br />
            <span className="hero__title-gradient">{t('hero.title2')}</span>
            <br />
            {t('hero.title3')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="hero__sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            {t('hero.sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <a href="#services" className="btn btn-primary btn-lg" onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              {t('hero.cta1')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              {t('hero.cta2')}
            </a>
          </motion.div>

        </div>

        {/* Visual Side */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: isRtl ? -60 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main screen mockup */}
          <div className="hero__screen">
            <div className="hero__screen-bar">
              <span /><span /><span />
            </div>
            <div className="hero__screen-content">
              <div className="hero__screen-nav" />
              <div className="hero__screen-hero">
                <div className="hero__screen-line hero__screen-line--h" />
                <div className="hero__screen-line hero__screen-line--s" />
                <div className="hero__screen-btn" />
              </div>
              <div className="hero__screen-cards">
                {[1,2,3].map(i => (
                  <div key={i} className="hero__screen-card" style={{ animationDelay: `${i*0.5}s` }}>
                    <div className="hero__screen-card-img" />
                    <div className="hero__screen-card-text">
                      <div />
                      <div />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`hero__float hero__float--${i + 1}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + card.delay, duration: 0.5, ease: 'backOut' }}
            >
              <span className="hero__float-icon">{card.icon}</span>
              <div>
                <p className="hero__float-label" style={{ color: card.color }}>{card.label}</p>
                <p className="hero__float-sub">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>{t('hero.scroll')}</span>
      </motion.div>
    </section>
  );
}

