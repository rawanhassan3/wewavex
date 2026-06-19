const en = {
  // ── Navbar ──
  nav: {
    services: 'Services',
    process: 'Process',
    packages: 'Packages',
    faq: 'FAQ',
    cta: 'Start a Project',
  },

  // ── Hero ──
  hero: {
    badge: 'Premium Web Design & Strategy',
    title1: 'Websites built for',
    title2: 'businesses that are',
    title3: 'ready to grow.',
    sub: 'We create websites that make businesses look credible, professional, and ready to scale — not just beautiful, but built to attract customers and support real growth.',
    cta1: 'Explore Packages',
    cta2: 'Book a Consultation',
    float1l: 'UX/UI Design', float1s: 'Tailored Brand Identity',
    float2l: 'SEO Optimized', float2s: 'Engineered for visibility',
    float3l: 'Performance', float3s: '99+ PageSpeed Score',
    float4l: 'Scalability', float4s: 'Built for Future Growth',
    scroll: 'Scroll to explore',
  },

  // ── Services ──
  services: {
    label: 'What We Build',
    title: 'Services designed to\nmove your business forward',
    sub: 'Every service we offer is engineered around one goal: making your business look credible, attract customers, and grow.',
    quote: 'Get a quote',
    items: [
      {
        title: 'Landing Pages',
        desc: 'High-converting, focused landing pages designed to turn visitors into leads and customers. Built for speed and persuasion.',
        features: ['Conversion-optimized', 'A/B test ready', 'SEO structured', 'Mobile-first'],
      },
      {
        title: 'Custom Websites',
        desc: 'Fully bespoke websites built from scratch to reflect your brand, communicate your value, and grow your business.',
        features: ['Brand-aligned design', 'CMS integration', 'Analytics ready', 'Scalable codebase'],
      },
      {
        title: 'E-commerce Stores',
        desc: 'Beautiful, high-performing online stores that drive sales. From product pages to checkout — every detail optimized.',
        features: ['Payment integration', 'Inventory system', 'Fast checkout', 'Product SEO'],
      },
      {
        title: 'Custom Systems',
        desc: 'Powerful web applications, admin dashboards, and internal tools built to automate your workflow and scale operations.',
        features: ['Custom dashboards', 'API integration', 'Role management', 'Automation ready'],
      },
    ],
  },

  // ── Why Us ──
  whyUs: {
    label: 'Why WebWavex',
    title: 'Built for growth.\nNot just aesthetics.',
    sub: 'We combine strategic thinking, premium design, and technical excellence to deliver sites that actually move the needle for your business.',
    items: [
      { title: 'Strategic Design',        desc: 'Every design decision is backed by UX research and conversion principles — beauty that actually performs.' },
      { title: 'Fast Performance',        desc: 'We obsess over load speed. 99+ PageSpeed scores, optimized images, and lean code — always.' },
      { title: 'Mobile Responsive',       desc: 'Pixel-perfect across every device. With 60%+ traffic on mobile, we build mobile-first by default.' },
      { title: 'Conversion Focused',      desc: 'Smart CTAs, persuasive copy structure, and UX flows engineered to convert visitors into paying customers.' },
      { title: 'Scalable Architecture',   desc: 'Built to grow with you. Clean code, modular structure, and documentation so your team can take over confidently.' },
      { title: 'Business-Oriented',       desc: 'We think like founders — every site is a growth tool. We align design with your business goals, not just trends.' },
    ],
  },

  // ── Process ──
  process: {
    label: 'How We Work',
    title: 'Our process from idea\nto live website',
    sub: 'A streamlined process designed for clarity, collaboration, and fast delivery.',
    steps: [
      { number: '01', title: 'Discovery',    desc: 'We start with a deep-dive into your business — your goals, audience, competitors, and current position. This shapes every decision.' },
      { number: '02', title: 'Strategy',     desc: 'We map out the sitemap, user flow, and conversion strategy. Every page has a purpose, every element earns its place.' },
      { number: '03', title: 'Design',       desc: 'We craft pixel-perfect UI designs in Figma. You review, give feedback, and we refine until it feels exactly right.' },
      { number: '04', title: 'Development',  desc: 'We build with clean, fast, scalable code — React, Next.js, or custom stacks. Mobile-first, performance-optimized, SEO-ready.' },
      { number: '05', title: 'Launch',       desc: 'We deploy, test across all devices, set up analytics, and hand off full documentation. Your site goes live ready to grow.' },
    ],
  },

  // ── Featured Work ──
  featuredWork: {
    label: 'Our Portfolio',
    title: 'Featured Projects',
    sub: 'Case studies will be added as projects are completed.',
    placeholderTitle: 'Projects coming soon',
    placeholderDesc: 'We are currently wrapping up some exciting projects. Case studies detailing our strategic process, UI design, and development will be published here soon.',
    cta: 'Start Your Project'
  },

  // ── Packages ──
  packages: {
    label: 'Packages & Pricing',
    title: 'Packages & Pricing',
    sub: 'Transparent pricing tailored to your business needs.',
    desc: 'Choose the solution that best fits your goals.',
    startingFrom: 'Starting From',
    egp: 'EGP',
    customQuote: 'Custom Quote',
    includedTitle: 'Included:',
    rulesTitle: 'Rules:',
    notIncludedTitle: 'Not Included:',
    popular: 'Most Popular',
    ctaQuote: 'Get a Quote',
    ctaConsultation: 'Book a Consultation',
    ctaConsultationFull: 'Book a Free Consultation',
    items: [
      {
        name: 'Landing Page',
        tagline: 'Perfect for launching a product, service, campaign, or new business online.',
        price: '2,500',
        features: [
          'Responsive Design',
          'Up to 5 Sections',
          'Contact Form',
          'Basic SEO Setup',
          'Analytics Integration',
          '1 Revision',
          'Delivery in 3-5 Days'
        ],
        rules: [
          'No Authentication',
          'No Login System',
          'No Registration System',
          'No Dashboard',
          'No Admin Panel'
        ]
      },
      {
        name: 'Portfolio Website',
        tagline: 'Professional portfolio websites for developers, designers, freelancers, and creators who want to stand out online.',
        price: '3,500',
        features: [
          'Custom Portfolio Design',
          'About Section',
          'Projects Showcase',
          'Contact Form',
          'Mobile Responsive',
          'SEO Structure',
          '2 Revisions',
          'Delivery in 5-7 Days'
        ],
        rules: [
          'No Authentication',
          'No Login System',
          'No Registration System',
          'No Dashboard',
          'No Admin Panel'
        ]
      },
      {
        name: 'Business Website',
        tagline: 'Perfect for businesses looking to establish a professional online presence.',
        price: '5,000',
        popular: true,
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'Contact Forms',
          'SEO Optimization',
          'Analytics Setup',
          'Performance Optimization',
          '2 Revisions',
          'Delivery in 7-10 Days'
        ],
        rules: [
          'No Authentication',
          'No Login System',
          'No Registration System',
          'No Dashboard',
          'No Admin Panel'
        ]
      },
      {
        name: 'E-commerce Store',
        tagline: 'Perfect for businesses selling products online.',
        price: '8,000',
        features: [
          'Product Catalog',
          'Shopping Cart',
          'Checkout System',
          'Mobile Responsive Design',
          'Basic Product SEO',
          'Order Management',
          '2 Revisions',
          'Delivery in 10-14 Days'
        ],
        notIncluded: [
          'User Registration',
          'User Login',
          'Customer Accounts',
          'Loyalty Systems',
          'Advanced Analytics'
        ],
        note: 'These features should be treated as additional features and quoted separately.'
      },
      {
        name: 'Custom System',
        tagline: 'Custom systems, dashboards, admin panels, internal tools, and business automation solutions tailored to your workflow.',
        price: 'Custom Quote',
        isCustom: true,
        features: [
          'Admin Dashboard',
          'User Management',
          'Role-Based Access',
          'Database Integration',
          'API Integrations',
          'Automation Solutions',
          'Technical Documentation'
        ],
        note: 'Authentication, role management, dashboards, and database functionality may be included based on project requirements and final quotation.'
      }
    ],
    optional: {
      title: 'Optional Features',
      sub: 'Extend your project with additional functionality tailored to your business needs.',
      items: [
        'User Authentication',
        'Login & Registration',
        'Admin Dashboard',
        'Booking System',
        'Payment Gateway Integration',
        'Multi-language Support',
        'Email Automation',
        'API Integrations',
        'Notifications System',
        'Analytics Dashboard',
        'Custom Reports',
        'CRM Integration',
        'Inventory Management',
        'Role-Based Access Control'
      ]
    },
    customNotice: {
      title: 'Need additional features?',
      text: 'Every project is customizable based on your business requirements. Additional functionality such as authentication, booking systems, payment gateways, multi-language support, admin panels, dashboards, API integrations, custom workflows, and advanced business features can be added based on project scope and business goals.'
    },
    consultation: {
      title: 'Not sure which package fits your business?',
      text: 'Book a free consultation and we\'ll recommend the right solution based on your goals.',
      cta: 'Book a Free Consultation'
    }
  },

  // ── Testimonials ──
  testimonials: {
    label: 'Client Stories',
    title: "Don't take our word for it",
    sub: 'Hear from the founders and business owners who trusted us to build their digital presence.',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
    confirmSure: 'Sure?',
    confirmYes: 'Yes',
    confirmNo: 'No',
    addTitle: 'Worked with us?',
    addSub: "We'd love to hear about your experience.",
    addBtn: 'Leave a Review',
    formTitle: 'Share Your Experience',
    formEditTitle: 'Edit Review',
    formName: 'Your Name *',
    formNamePlaceholder: 'e.g. Sarah Mitchell',
    formRole: 'Role / Company',
    formRolePlaceholder: 'e.g. Founder, Acme Co.',
    formRating: 'Your Rating *',
    formText: 'Your Review *',
    formTextPlaceholder: 'Tell us about your experience working with WebWavex…',
    formCharMin: 'min 20',
    formSubmit: 'Submit Review',
    formSave: 'Save Changes',
    formCancel: 'Cancel',
    errName: 'Name is required',
    errText: 'Review must be at least 20 characters',
    toastAdded: 'Review added — thank you! 🎉',
    toastUpdated: 'Review updated ✓',
    toastDeleted: 'Review removed',
  },

  // ── FAQ ──
  faq: {
    label: 'FAQ',
    title: 'Questions we get\nall the time',
    sub: 'Everything you need to know before getting started. Still have questions? <a>Just ask us.</a>',
    items: [
      { q: 'How long does it take to build a website?',         a: 'Timelines vary by package. A landing page takes 3-5 days, a Portfolio Website takes 5-7 days, a Business Website takes 7-10 days,an e-commerce store 10-14 days, and custom systems are scoped per project. We always give you a clear timeline before starting.' },
      { q: 'What do I need to provide before starting?',         a: "We just need your brand assets (logo, colors if any), your business info, and any content you have. If you don't have content, we can help structure it or recommend a copywriter — we guide you through everything." },
      { q: 'Do you offer revisions?',                            a: 'Yes! Revisions are included in every package. Launch (2), Grow (4). For Sell and Scale packages, we work iteratively with regular reviews so changes are handled as we build.' },
      { q: 'Will my website be mobile responsive?',              a: 'Absolutely — every project is built mobile-first. We test across iPhone, Android, tablets, and all major screen sizes before delivery.' },
      { q: 'Can I update the website myself after launch?',      a: 'Yes. Most projects include a CMS (Content Management System) so you can update text, images, and blog posts without touching code. We also provide a handoff walkthrough video.' },
      { q: 'Do you offer ongoing support after launch?',         a: "Yes. We offer monthly maintenance and support plans separately. You can also just reach out for one-off updates — we're always here. The Scale package includes a dedicated support plan." },
      { q: 'Can I upgrade my package later?',                    a: 'Yes! Many clients start with Launch or Grow and scale up as their business grows. We build with scalability in mind, so upgrading is smooth and cost-effective.' },
      { q: 'What makes WebWavex different from a freelancer or template?', a: "We're not just designers — we think like growth strategists. Every decision is tied to a business objective. We deliver custom-built solutions, not templates, with real performance metrics to back them up." },
    ],
  },

  // ── Final CTA ──
  cta: {
    label: "Let's Build Together",
    title1: "Let's build something that",
    title2: 'helps your business grow.',
    sub: 'Book a free 30-minute consultation. No commitment, no pressure — just a real conversation about what your business needs.',
    btn1: 'Book a Free Consultation',
    btn2: 'Send Us a Message',
    g1: 'Free consultation',
    g2: 'No commitment required',
    g3: 'Reply within 24 hours',
    g4: 'Start in days, not weeks',
  },

  // ── Footer ──
  footer: {
    tagline: 'We create websites that make businesses look credible, professional, and ready to grow.',
    services: 'Services',
    company: 'Company',
    contact: 'Get in Touch',
    links: {
      landing: 'Landing Pages',
      custom: 'Custom Websites',
      ecom: 'E-commerce Stores',
      systems: 'Custom Systems',
      work: 'Our Work',
      process: 'Process',
      packages: 'Packages',
      testimonials: 'Testimonials',
      email: 'hello@webwavex.com',
      book: 'Book a Consultation',
      faq: 'FAQ',
    },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'All rights reserved.',
  },
};

export default en;
