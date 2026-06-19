import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function FeaturedWork() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const { t, isRtl } = useLanguage();

  // 3 skeleton project categories to showcase our capabilities cleanly
  const skeletonCategories = [
    { key: 'landing', icon: '⚡', type: isRtl ? 'صفحة هبوط عالية التحويل' : 'High-Converting Landing Page' },
    { key: 'ecom', icon: '🛒', type: isRtl ? 'متجر إلكتروني متكامل' : 'E-commerce Platform' },
    { key: 'custom', icon: '💻', type: isRtl ? 'نظام مخصص ولوحة تحكم' : 'Custom SaaS & Dashboard' },
  ];

  return (
    <section className="section featured-work" id="work" ref={ref}>
      <div className="featured-work__bg" />
      <div className="container">
        
        {/* Header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t('featuredWork.label')}</div>
          <h2 className="section-title">{t('featuredWork.title')}</h2>
          <p className="section-subtitle">
            {t('featuredWork.sub')}
          </p>
        </motion.div>

        {/* Premium Wireframe Grid */}
        <motion.div
          className="fw-placeholder-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skeletonCategories.map((item, idx) => (
            <motion.div
              key={idx}
              className="fw-skeleton-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Card visual mock browser block */}
              <div className="fw-skeleton-card__browser">
                <div className="fw-skeleton-card__browser-dots">
                  <span /><span /><span />
                </div>
                
                {/* Schematic layout representation */}
                <div className="fw-skeleton-card__layout">
                  <div className="fw-skeleton-card__hero-strip">
                    <div className="fw-skeleton-card__circle" />
                    <div className="fw-skeleton-card__line fw-skeleton-card__line--short" />
                  </div>
                  <div className="fw-skeleton-card__body-grid">
                    <div className="fw-skeleton-card__block" />
                    <div className="fw-skeleton-card__block" />
                    <div className="fw-skeleton-card__block" />
                  </div>
                </div>
                
                {/* Modern subtle pulse indicator representing active work */}
                <div className="fw-skeleton-card__status-indicator">
                  <span className="pulse-dot" />
                  <span className="status-text">{t('featuredWork.placeholderTitle')}</span>
                </div>
              </div>

              {/* Card info block */}
              <div className="fw-skeleton-card__body">
                <span className="fw-skeleton-card__icon-badge">{item.icon}</span>
                <h3 className="fw-skeleton-card__title">{item.type}</h3>
                <p className="fw-skeleton-card__desc">{t('featuredWork.placeholderDesc')}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action to start project */}
        <motion.div
          className="featured-work__footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="btn btn-secondary btn-lg"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            {t('featuredWork.cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
