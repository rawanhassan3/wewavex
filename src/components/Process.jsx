import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  // 01 Discovery
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>,
  // 02 Strategy
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>,
  // 03 Design
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5"/>
    <circle cx="17.5" cy="10.5" r="0.5"/>
    <circle cx="8.5" cy="7.5" r="0.5"/>
    <circle cx="6.5" cy="12.5" r="0.5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.469-1.125"/>
    <path d="M22 12c0-4.714-3.663-8.603-8.248-8.966"/>
    <path d="M17.76 16.25c.25.4.392.867.392 1.375C18.152 19.252 16.42 21 14.25 21"/>
  </svg>,
  // 04 Development
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>,
  // 05 Launch
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13"/>
    <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
  </svg>
];

const colors = ['#4F9D94', '#A7C7E7', '#4F9D94', '#A7C7E7', '#4F9D94'];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const { t, isRtl } = useLanguage();

  const stepItems = t('process.steps') || [];
  const directionMultiplier = isRtl ? -1 : 1;

  return (
    <section className="section process" id="process" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t('process.label')}</div>
          <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>{t('process.title')}</h2>
          <p className="section-subtitle">
            {t('process.sub')}
          </p>
        </motion.div>

        <div className="process__timeline">
          {stepItems.map((step, i) => {
            const icon = icons[i % icons.length];
            const color = colors[i % colors.length];

            return (
              <motion.div
                key={step.number}
                className={`process__step ${i % 2 === 0 ? 'process__step--left' : 'process__step--right'}`}
                initial={{ opacity: 0, x: (i % 2 === 0 ? -50 : 50) * directionMultiplier }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.14, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="process__step-connector">
                  <div className="process__step-node" style={{ background: color }}>
                    {icon}
                  </div>
                  {i < stepItems.length - 1 && <div className="process__step-line" />}
                </div>
                <div className="process__step-card">
                  <span className="process__step-number" style={{ color: color }}>{step.number}</span>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

