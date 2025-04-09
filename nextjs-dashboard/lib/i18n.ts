import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../app/locales/en/translation.json';
import translationFR from '../app/locales/fr/translation.json';
import translationKR from '../app/locales/kr/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  kr: { translation: translationKR },
};

// ⚠️ NE PAS réinitialiser i18n si déjà fait
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
