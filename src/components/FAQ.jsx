import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage, renderLinkText } from '../context/LanguageContext';

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} onClick={onToggle}>
      <div className="faq-item__header">
        <h3 className="faq-item__question">{q}</h3>
        <div className="faq-item__icon">
          <motion.svg
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </motion.svg>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-item__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.08 });
  const { t } = useLanguage();

  const faqItems = t('faq.items') || [];

  return (
    <section className="section faq" id="faq" ref={ref}>
      <div className="container">
        <div className="faq__inner">
          <motion.div
            className="faq__header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">{t('faq.label')}</div>
            <h2 className="section-title" style={{ whiteSpace: 'pre-line' }}>{t('faq.title')}</h2>
            <p className="section-subtitle">
              {renderLinkText(t('faq.sub'), e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); })}
            </p>
          </motion.div>

          <motion.div
            className="faq__list"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

