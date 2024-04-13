import i18n from 'i18next';
import en from '../local/translation/en.json'
import ru from '../local/translation/ru.json'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        resources: {
            en,
            ru,
        }
    });

export default i18n;