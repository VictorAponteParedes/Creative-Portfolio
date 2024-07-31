import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './lang/es/contact.json';
import aboutMeTranslation from './lang/es/aboutMe.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: esTranslation,
        aboutMe: aboutMeTranslation
      },
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
