import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from './translations/en.json';
import frJson from './translations/fr.json';
import ptJson from './translations/pt.json';

i18n.use(initReactI18next).init({
    resources: {
        pt: ptJson,
        fr: frJson,
        en: enJson
    },
    fallbackLng: "pt", //tal vez seja aqui que resolvo o problema de voltar ao pt ao voltar ao home

    interpolation: {
        escapeValue: false
    },
    react: {
        useTranslation: {
          onLanguageChange: true
        }
      }
});

export default i18n;