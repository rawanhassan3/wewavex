import { createContext, useState, useEffect, useContext } from 'react';
import en from '../translations/en';
import ar from '../translations/ar';

const LanguageContext = createContext();

const translations = { en, ar };

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ar') return saved;
    // Default to 'en'
    return 'en';
  });

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    // Update HTML dir and lang attributes
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    // Add/remove class for font selection or overrides
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        console.warn(`Translation path not found: ${path}`);
        return path; // fallback to path
      }
    }
    return current;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper to render strings containing <a>Link Text</a>
export function renderLinkText(text, onClick) {
  if (!text) return '';
  const match = text.match(/^(.*?)<a>(.*?)<\/a>(.*?)$/);
  if (match) {
    const [_, pre, link, post] = match;
    return (
      <>
        {pre}
        <a href="#contact" onClick={onClick}>{link}</a>
        {post}
      </>
    );
  }
  return text;
}
