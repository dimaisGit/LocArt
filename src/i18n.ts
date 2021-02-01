import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './i18n/locales/ru/common.json'
import en from './i18n/locales/en/common.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        ru: {translation: ru}
    },
    lng: "en",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false
    },
})


export default i18n;