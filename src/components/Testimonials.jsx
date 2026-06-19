import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

/* ── initial seed data generator ── */
const getSeedData = (lang) => {
  if (lang === 'ar') {
    return [
      {
        id: 'seed-1',
        name: 'سارة ميتشل',
        role: 'مؤسسة، Lumière Candle Co.',
        avatar: 'س م',
        avatarBg: '#4F9D94',
        stars: 5,
        text: "WebWavex غيّرت تماماً حضورنا الرقمي. في غضون 3 أسابيع فقط من إطلاق صفحة الهبوط الجديدة، شهدنا زيادة بنسبة 220% في نسبة التحويل. التصميم مذهل ويحوّل الزوار إلى مشترين فعلاً.",
        createdAt: Date.now() - 5000,
      },
      {
        id: 'seed-2',
        name: 'جيمس أوكافور',
        role: 'الرئيس التنفيذي، TechFlow Solutions',
        avatar: 'ج أ',
        avatarBg: '#A7C7E7',
        stars: 5,
        text: "كنا بحاجة إلى موقع ويب احترافي لمساعدتنا في منافسة الشركات الأكبر. قدّمت لنا WebWavex موقعاً يجعلنا نبدو وكأننا نعمل في هذا المجال منذ 20 عاماً. تضاعفت استفسارات العملاء المحتملين في غضون شهرين.",
        createdAt: Date.now() - 4000,
      },
      {
        id: 'seed-3',
        name: 'بريا شارما',
        role: 'مؤسسة، NourishWell',
        avatar: 'ب ش',
        avatarBg: '#4F9D94',
        stars: 5,
        text: "المتجر الإلكتروني الذي بنوه لنا لا يصدق. إنه سريع وجميل وعملية السداد سلسة للغاية. قفزت نسبة إعادة الشراء لدينا إلى 68%.",
        createdAt: Date.now() - 3000,
      },
      {
        id: 'seed-4',
        name: 'ماركوس تشين',
        role: 'شريك مؤسس، Locus Analytics',
        avatar: 'م ت',
        avatarBg: '#A7C7E7',
        stars: 5,
        text: "لوحة التحكم المخصصة التي قاموا ببنائها توفر لفريقنا أكثر من 15 ساعة كل أسبوع. احترافية وموثوقية وفهم واضح لما يحتاجه أصحاب الأعمال فعلياً.",
        createdAt: Date.now() - 2000,
      },
      {
        id: 'seed-5',
        name: 'أمارا ديالو',
        role: 'رائدة أعمال، StyleHive',
        avatar: 'أ د',
        avatarBg: '#4F9D94',
        stars: 5,
        text: "من المكالمة الأولى إلى يوم الإطلاق، كانت التجربة سلسة واحترافية وممتعة حقاً. لقد استمعوا بعناية لما أردت وحققوه بشكل أفضل مما كنت أتخيل.",
        createdAt: Date.now() - 1000,
      },
      {
        id: 'seed-6',
        name: 'دانيال بارك',
        role: 'مؤسس شركة Orbitly الناشئة',
        avatar: 'د ب',
        avatarBg: '#A7C7E7',
        stars: 5,
        text: "كنت متردداً في الاستثمار بموقع مخصص في وقت مبكر. WebWavex غيّرت رأيي. العائد على الاستثمار كان فورياً — بدأنا في تلقي استفسارات المستثمرين خلال الأسبوع الأول.",
        createdAt: Date.now(),
      },
    ];
  }
  return [
    {
      id: 'seed-1',
      name: 'Sarah Mitchell',
      role: 'Founder, Lumière Candle Co.',
      avatar: 'SM',
      avatarBg: '#4F9D94',
      stars: 5,
      text: "WebWavex completely transformed our online presence. Within 3 weeks of launching our new landing page, we saw a 220% increase in conversions. The design is stunning and it actually converts visitors into buyers.",
      createdAt: Date.now() - 5000,
    },
    {
      id: 'seed-2',
      name: 'James Okafor',
      role: 'CEO, TechFlow Solutions',
      avatar: 'JO',
      avatarBg: '#A7C7E7',
      stars: 5,
      text: "We needed a professional website that would help us compete with larger firms. WebWavex delivered a site that makes us look like we've been in business for 20 years. Our lead inquiries doubled in 2 months.",
      createdAt: Date.now() - 4000,
    },
    {
      id: 'seed-3',
      name: 'Priya Sharma',
      role: 'Founder, NourishWell',
      avatar: 'PS',
      avatarBg: '#4F9D94',
      stars: 5,
      text: "The e-commerce store they built for us is incredible. It's fast, beautiful, and the checkout flow is seamless. Our repeat purchase rate jumped to 68%.",
      createdAt: Date.now() - 3000,
    },
    {
      id: 'seed-4',
      name: 'Marcus Chen',
      role: 'Co-founder, Locus Analytics',
      avatar: 'MC',
      avatarBg: '#A7C7E7',
      stars: 5,
      text: "The custom dashboard they built saves our team 15+ hours every single week. Professional, reliable, and clearly understands what business owners actually need.",
      createdAt: Date.now() - 2000,
    },
    {
      id: 'seed-5',
      name: 'Amara Diallo',
      role: 'Entrepreneur, StyleHive',
      avatar: 'AD',
      avatarBg: '#4F9D94',
      stars: 5,
      text: "From the first call to the launch day, the experience was smooth, professional, and honestly fun. They really listened to what I wanted and brought it to life better than I imagined.",
      createdAt: Date.now() - 1000,
    },
    {
      id: 'seed-6',
      name: 'Daniel Park',
      role: 'Startup Founder, Orbitly',
      avatar: 'DP',
      avatarBg: '#A7C7E7',
      stars: 5,
      text: "I was hesitant to invest in a custom website early on. WebWavex changed my mind. The ROI was immediate — we started getting investor inquiries within the first week.",
      createdAt: Date.now(),
    },
  ];
};

/* ── helpers ── */
const STORAGE_KEY = 'wwx_reviews';
const avatarColors = ['#4F9D94', '#A7C7E7', '#6FB8AF', '#7BA7BC', '#5AADA4'];

function getInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() ?? '')
    .join('');
}

function pickColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

// Load from localStorage or return empty array initially
function loadReviews() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error(e);
  }
  return [];
}

function saveReviews(reviews) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

/* ── Star picker ── */
function StarPicker({ value, onChange, readOnly = false }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-picker" role="radiogroup" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          disabled={readOnly}
          className={`star-picker__star ${n <= (hovered || value) ? 'star-picker__star--active' : ''}`}
          onMouseEnter={() => !readOnly && setHovered(n)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          onClick={() => !readOnly && onChange(n)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill={n <= (hovered || value) ? '#4F9D94' : 'none'}
            stroke={n <= (hovered || value) ? '#4F9D94' : '#ccc'}
            strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

/* ── Single testimonial card ── */
function TestimonialCard({ review, onEdit, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { language, t } = useLanguage();

  // Resolve seed translations if applicable
  const isSeed = review.id.startsWith('seed-');
  const data = isSeed ? getSeedData(language).find(r => r.id === review.id) || review : review;

  return (
    <motion.div
      className="testimonial-card"
      layout
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: -16, transition: { duration: 0.25 } }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Stars */}
      <StarPicker value={data.stars ?? 5} readOnly />

      {/* Text */}
      <p className="testimonial-card__text">"{data.text}"</p>

      {/* Author */}
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" style={{ background: data.avatarBg || '#4F9D94' }}>
          {data.avatar || getInitials(data.name)}
        </div>
        <div>
          <strong className="testimonial-card__name">{data.name}</strong>
          <span className="testimonial-card__role">{data.role}</span>
        </div>
      </div>

      {/* CRUD actions */}
      <div className="testimonial-card__actions">
        <button
          className="tc-btn tc-btn--edit"
          onClick={() => onEdit(data)}
          aria-label="Edit review"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          {t('testimonials.editBtn')}
        </button>

        {confirmDelete ? (
          <div className="tc-confirm">
            <span>{t('testimonials.confirmSure')}</span>
            <button className="tc-btn tc-btn--danger" onClick={() => onDelete(review.id)}>{t('testimonials.confirmYes')}</button>
            <button className="tc-btn tc-btn--cancel" onClick={() => setConfirmDelete(false)}>{t('testimonials.confirmNo')}</button>
          </div>
        ) : (
          <button
            className="tc-btn tc-btn--delete"
            onClick={() => setConfirmDelete(true)}
            aria-label="Delete review"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
            </svg>
            {t('testimonials.deleteBtn')}
          </button>
        )}
      </div>
    </motion.div>
  );
}

/* ── Review Form (Add / Edit) ── */
const EMPTY_FORM = { name: '', role: '', text: '', stars: 5 };

function ReviewForm({ initial = null, onSubmit, onCancel }) {
  const { t } = useLanguage();
  const [form, setForm] = useState(initial ?? EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('testimonials.errName');
    if (!form.text.trim() || form.text.trim().length < 20)
      e.text = t('testimonials.errText');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  };

  return (
    <motion.form
      className="review-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      noValidate
    >
      <h3 className="review-form__title">
        {initial ? t('testimonials.formEditTitle') : t('testimonials.formTitle')}
      </h3>

      <div className="review-form__row">
        <div className="review-form__field">
          <label htmlFor="rf-name">{t('testimonials.formName')}</label>
          <input
            id="rf-name"
            type="text"
            placeholder={t('testimonials.formNamePlaceholder')}
            value={form.name}
            onChange={e => set('name', e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="review-form__error">{errors.name}</span>}
        </div>

        <div className="review-form__field">
          <label htmlFor="rf-role">{t('testimonials.formRole')}</label>
          <input
            id="rf-role"
            type="text"
            placeholder={t('testimonials.formRolePlaceholder')}
            value={form.role}
            onChange={e => set('role', e.target.value)}
          />
        </div>
      </div>

      <div className="review-form__field">
        <label>{t('testimonials.formRating')}</label>
        <StarPicker value={form.stars} onChange={v => set('stars', v)} />
      </div>

      <div className="review-form__field">
        <label htmlFor="rf-text">{t('testimonials.formText')}</label>
        <textarea
          id="rf-text"
          rows={4}
          placeholder={t('testimonials.formTextPlaceholder')}
          value={form.text}
          onChange={e => set('text', e.target.value)}
          className={errors.text ? 'error' : ''}
        />
        <div className="review-form__char">
          {form.text.length} {t('testimonials.formCharMin')}
        </div>
        {errors.text && <span className="review-form__error">{errors.text}</span>}
      </div>

      <div className="review-form__actions">
        <button type="submit" className="btn btn-primary">
          {initial ? t('testimonials.formSave') : t('testimonials.formSubmit')}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            {t('testimonials.formCancel')}
          </button>
        )}
      </div>
    </motion.form>
  );
}

/* ── Main Testimonials Section ── */
export default function Testimonials() {
  const [reviews, setReviews] = useState(loadReviews);
  const [showForm, setShowForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [toast, setToast] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05 });
  const { t, isRtl } = useLanguage();

  /* persist */
  useEffect(() => { saveReviews(reviews); }, [reviews]);

  /* toast helper */
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  /* CRUD handlers */
  const handleAdd = (form) => {
    const review = {
      id: `r-${Date.now()}`,
      name: form.name.trim(),
      role: form.role.trim() || 'WebWavex Client',
      avatar: getInitials(form.name),
      avatarBg: pickColor(form.name),
      stars: form.stars,
      text: form.text.trim(),
      createdAt: Date.now(),
    };
    setReviews(prev => [review, ...prev]);
    setShowForm(false);
    showToast(t('testimonials.toastAdded'));
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setShowForm(false);
    window.document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUpdate = (form) => {
    setReviews(prev =>
      prev.map(r =>
        r.id === editingReview.id
          ? {
              ...r,
              name: form.name.trim(),
              role: form.role.trim() || r.role,
              avatar: getInitials(form.name),
              avatarBg: pickColor(form.name),
              stars: form.stars,
              text: form.text.trim(),
            }
          : r
      )
    );
    setEditingReview(null);
    showToast(t('testimonials.toastUpdated'));
  };

  const handleDelete = (id) => {
    setReviews(prev => prev.filter(r => r.id !== id));
    showToast(t('testimonials.toastDeleted'), 'info');
  };

  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className="testimonials__bg" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{t('testimonials.label')}</div>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">
            {t('testimonials.sub')}
          </p>
        </motion.div>

        {/* Edit form (inline, above grid) */}
        <AnimatePresence>
          {editingReview && (
            <div className="review-form-wrapper" key="edit-form">
              <ReviewForm
                initial={editingReview}
                onSubmit={handleUpdate}
                onCancel={() => setEditingReview(null)}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Cards grid */}
        <motion.div
          className="testimonials__grid"
          layout
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="popLayout">
            {reviews.map(r => (
              <TestimonialCard
                key={r.id}
                review={r}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add review CTA / form */}
        <motion.div
          className="testimonials__add"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {showForm ? (
              <ReviewForm
                key="add-form"
                onSubmit={handleAdd}
                onCancel={() => setShowForm(false)}
              />
            ) : (
              <motion.div
                key="add-cta"
                className="testimonials__add-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="testimonials__add-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    <line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/>
                  </svg>
                </div>
                <div>
                  <p className="testimonials__add-title">{t('testimonials.addTitle')}</p>
                  <p className="testimonials__add-sub">{t('testimonials.addSub')}</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => { setShowForm(true); setEditingReview(null); }}
                >
                  {t('testimonials.addBtn')}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`review-toast review-toast--${toast.type}`}
            initial={{ opacity: 0, y: 40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ duration: 0.3 }}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
