import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'intl-pluralrules'

// Import your translations
import en from './locales/en.json';
import ru from './locales/ru.json';

// Language detection configuration
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const savedDataJSON = await AsyncStorage.getItem('user-language');
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || 'en';
    callback(selectLanguage);
  },
  init: () => {},
  cacheUserLanguage: async (lng) => {
    await AsyncStorage.setItem('user-language', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    fallbackLng: 'en',
    lng: 'en', // default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    // Force i18next to use the compatibility JSON v3 format for pluralization
    pluralSeparator: '_',
    contextSeparator: '_',
    keySeparator: '_',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
