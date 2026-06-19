import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Packages() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const { t, isRtl } = useLanguage();

  const packageItems = t('packages.items') || [];

  return (
    <section className="section packages" id="packages" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t('packages.label')}</div>
          <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>{t('packages.title')}</h2>
          <p className="section-subtitle">
            {t('packages.sub')}
            <br />
            {t('packages.desc')}
          </p>
        </motion.div>

        {/* 5-Card Packages Grid */}
        <motion.div
          className="packages__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {packageItems.map((pkg, index) => {
            const isPopular = pkg.popular || false;
            const isCustom = pkg.isCustom || false;
            const ctaText = isCustom ? t('packages.ctaConsultation') : t('packages.ctaQuote');

            return (
              <motion.div
                key={index}
                className={`pkg-card ${isPopular ? 'pkg-card--popular' : ''} ${isCustom ? 'pkg-card--custom-system' : ''}`}
                variants={cardVariants}
                whileHover={{ y: isPopular ? 0 : -6, transition: { duration: 0.3 } }}
              >
                {isPopular && (
                  <div className="pkg-card__badge">{t('packages.popular')}</div>
                )}
                
                <div className="pkg-card__header">
                  <h3 className="pkg-card__name">{pkg.name}</h3>
                  <p className="pkg-card__tagline">{pkg.tagline}</p>
                  
                  {isCustom ? (
                    <div className="pkg-card__price">
                      <span className="pkg-card__amount">{pkg.price}</span>
                    </div>
                  ) : (
                    <div className="pkg-card__price pkg-card__price--egp">
                      <span className="pkg-card__starting-lbl">{t('packages.startingFrom')}</span>
                      <div className="pkg-card__price-row">
                        <span className="pkg-card__amount">{pkg.price}</span>
                        <span className="pkg-card__currency"> {t('packages.egp')}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pkg-card__divider" />

                {/* Features (Included) List */}
                <div className="pkg-card__list-section">
                  <h4 className="pkg-card__list-title">{t('packages.includedTitle')}</h4>
                  <ul className="pkg-card__features">
                    {pkg.features.map((f, i) => (
                      <li key={i}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rules List (If any) */}
                {pkg.rules && pkg.rules.length > 0 && (
                  <div className="pkg-card__list-section pkg-card__list-section--rules">
                    <h4 className="pkg-card__list-title pkg-card__list-title--rules">{t('packages.rulesTitle')}</h4>
                    <ul className="pkg-card__rules">
                      {pkg.rules.map((r, i) => (
                        <li key={i}>
                          <svg className="rule-cross-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Not Included List (E-commerce case) */}
                {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                  <div className="pkg-card__list-section pkg-card__list-section--not-included">
                    <h4 className="pkg-card__list-title pkg-card__list-title--not-included">{t('packages.notIncludedTitle')}</h4>
                    <ul className="pkg-card__not-included">
                      {pkg.notIncluded.map((n, i) => (
                        <li key={i}>
                          <svg className="rule-cross-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.note && <p className="pkg-card__note">{pkg.note}</p>}
                  </div>
                )}

                {/* Custom Note (Custom system case) */}
                {isCustom && pkg.note && (
                  <p className="pkg-card__custom-note">{pkg.note}</p>
                )}

                <a
                  href="#contact"
                  className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'} pkg-card__cta`}
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  {ctaText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Optional Features Tags Section */}
        <motion.div
          className="packages__optional"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="packages__optional-header">
            <h3 className="packages__optional-title">{t('packages.optional.title')}</h3>
            <p className="packages__optional-sub">{t('packages.optional.sub')}</p>
          </div>
          
          <div className="packages__optional-grid">
            {t('packages.optional.items').map((item, idx) => (
              <div key={idx} className="optional-feature-tag">
                <span className="optional-feature-tag__bullet" />
                <span className="optional-feature-tag__name">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customization Notice */}
        <motion.div
          className="packages__custom-notice-box"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="custom-notice__icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F9D94" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div className="custom-notice__content">
            <h4 className="custom-notice__title">{t('packages.customNotice.title')}</h4>
            <p className="custom-notice__text">{t('packages.customNotice.text')}</p>
          </div>
        </motion.div>

        {/* Consultation CTA Banner */}
        <motion.div
          className="packages__consultation-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="consultation-box__text-side">
            <h3 className="consultation-box__title">{t('packages.consultation.title')}</h3>
            <p className="consultation-box__text">{t('packages.consultation.text')}</p>
          </div>
          <div className="consultation-box__btn-side">
            <a
              href="#contact"
              className="btn btn-primary btn-lg consultation-box__cta"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {t('packages.consultation.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
