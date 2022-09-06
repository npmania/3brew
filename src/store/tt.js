import { writable } from 'svelte/store'
import i18n from '../translation/i18n.json'

export const LANGUAGE_LIST = ['en', 'be', 'de', 'fil', 'it', 'ru', 'pl', 'pt', 'ko']

const initialLang = (LANGUAGE_LIST.indexOf(localStorage.getItem('lang')) !== -1) ? localStorage.getItem('lang') : 'en'

export const translations = writable({
  tt: i18n[initialLang],
  language: initialLang
})

export function tt (ttObj, path, def) {
  return pathOr(ttObj.tt, path, def || path)
};

export function setLanguage (lang = 'en') {
  if (LANGUAGE_LIST.indexOf(lang) !== -1) {
    localStorage.setItem('lang', lang)
    translations.set({ tt: i18n[lang], language: lang })
  }
}

function pathOr (obj, path, defaultVal) {
  path = stringToPath(path)
  let current = obj
  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]]) return defaultVal
    current = current[path[i]]
  }
  return current
};

function stringToPath (path) {
  if (typeof path !== 'string') return path
  const output = []
  path.split('.').forEach(item => {
    item.split(/\[([^}]+)\]/g).forEach(key => {
      if (key.length > 0) {
        output.push(key)
      }
    })
  })
  return output
};
