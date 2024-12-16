import i18n from 'i18next'
import en from './lang/en'

i18n.init({
  lng: 'en',
  resources: {
    en: { translation: en }
  }
})

export const $t = i18n.t
