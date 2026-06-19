import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

export default function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { t, isRtl } = useLanguage();

  return (
    <section className="final-cta" id="contact" ref={ref}>
      <div className="final-cta__bg">
        <div className="final-cta__orb final-cta__orb--1" />
        <div className="final-cta__orb final-cta__orb--2" />
      </div>

      <div className="container">
        <motion.div
          className="final-cta__inner"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            {t('cta.label')}
          </div>

          <h2 className="final-cta__title">
            {t('cta.title1')}
            <br />
            <span className="gradient-text">{t('cta.title2')}</span>
          </h2>

          <p className="final-cta__sub">
            {t('cta.sub')}
          </p>

          <div className="final-cta__actions">
            <a
              href="mailto:hello@webwavex.com"
              className="btn btn-primary btn-lg"
            >
              {t('cta.btn1')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
              </svg>
            </a>
            <a
              href="mailto:hello@webwavex.com"
              className="btn btn-secondary btn-lg"
            >
              {t('cta.btn2')}
            </a>
          </div>

          <div className="final-cta__guarantees">
            {[
              { icon: '⚡', text: t('cta.g1') },
              { icon: '✅', text: t('cta.g2') },
              { icon: '🤝', text: t('cta.g3') },
              { icon: '🚀', text: t('cta.g4') },
            ].map(g => (
              <div key={g.text} className="final-cta__guarantee">
                <span>{g.icon}</span>
                {g.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

