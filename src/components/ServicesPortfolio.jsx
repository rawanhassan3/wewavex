import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const portfolioData = {
  'Landing Pages': [
    {
      id: 'lp-1',
      title: 'Luxury Candle Co.',
      desc: 'High-converting landing page for a premium candle brand. Warm visuals, persuasive copy, and a frictionless checkout flow.',
      tags: ['Landing Page', 'E-commerce', 'Luxury'],
      image: '/candle-mockup.png',
      results: '+220% Conversions',
      color: '#4F9D94',
    },
    {
      id: 'lp-2',
      title: 'SaaS Product Launch',
      desc: 'Launch page for a B2B SaaS tool. Clean, minimal design with animated feature highlights and social proof sections.',
      tags: ['Landing Page', 'SaaS', 'B2B'],
      image: '/business-mockup.png',
      results: '2,400 Signups / Week',
      color: '#A7C7E7',
    },
  ],
  'Custom Websites': [
    {
      id: 'cw-1',
      title: 'Consulting Firm Website',
      desc: 'Full multi-page website for a consulting company. Strategic layout, credibility signals, and lead generation forms.',
      tags: ['Website', 'B2B', 'Consulting'],
      image: '/business-mockup.png',
      results: '+140% Lead Inquiries',
      color: '#4F9D94',
    },
    {
      id: 'cw-2',
      title: 'Creative Agency Site',
      desc: 'Bold, animated website for a creative studio. Full-screen hero, interactive portfolio, and smooth page transitions.',
      tags: ['Website', 'Creative', 'Agency'],
      image: '/candle-mockup.png',
      results: 'Featured on Awwwards',
      color: '#A7C7E7',
    },
  ],
  'E-commerce': [
    {
      id: 'ec-1',
      title: 'Fashion E-commerce Store',
      desc: 'Full-featured Shopify-style store with product filters, wishlist, cart, and lightning-fast checkout.',
      tags: ['E-commerce', 'Fashion', 'Store'],
      image: '/ecommerce-mockup.png',
      results: '+340% Monthly Revenue',
      color: '#4F9D94',
    },
    {
      id: 'ec-2',
      title: 'Health & Wellness Shop',
      desc: 'Clean, trustworthy store design for supplement brand. Subscription model, reviews, and upsell flows.',
      tags: ['E-commerce', 'Health', 'Subscriptions'],
      image: '/ecommerce-mockup.png',
      results: '68% Repeat Purchase Rate',
      color: '#A7C7E7',
    },
  ],
  'Custom Systems': [
    {
      id: 'cs-1',
      title: 'Analytics Dashboard',
      desc: 'Custom SaaS dashboard with real-time data visualization, role-based access control, and export tools.',
      tags: ['Dashboard', 'SaaS', 'Analytics'],
      image: '/dashboard-mockup.png',
      results: 'Saving 15hrs/week',
      color: '#4F9D94',
    },
    {
      id: 'cs-2',
      title: 'Operations Management System',
      desc: 'Internal web app for managing orders, inventory, and team tasks across multiple locations.',
      tags: ['System', 'Operations', 'Multi-location'],
      image: '/dashboard-mockup.png',
      results: '60% Process Automation',
      color: '#A7C7E7',
    },
  ],
};

const tabs = Object.keys(portfolioData);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function ServicesPortfolio() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="section services-portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Services Portfolio</div>
          <h2 className="section-title">Real work. Real results.</h2>
          <p className="section-subtitle">
            Explore examples of what we build across each service category — designed for growth, built with precision.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="sp-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`sp-tab ${activeTab === tab ? 'sp-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <motion.div className="sp-tab-underline" layoutId="sp-underline" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="sp-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            {portfolioData[activeTab].map(project => (
              <motion.div key={project.id} className="sp-card" variants={cardVariants}>
                {/* Image */}
                <div className="sp-card__image-wrap">
                  <img src={project.image} alt={project.title} className="sp-card__image" loading="lazy" />
                  <div className="sp-card__image-overlay">
                    <div className="sp-card__result" style={{ background: project.color }}>
                      {project.results}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="sp-card__body">
                  <div className="sp-card__tags">
                    {project.tags.map(t => (
                      <span key={t} className="sp-card__tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="sp-card__title">{project.title}</h3>
                  <p className="sp-card__desc">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="sp-bottom-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Ready to be our next success story?</p>
          <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
