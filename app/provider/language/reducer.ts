/*
 *
 * LanguageProvider reducer
 *
 */

import { CHANGE_LOCALE, DEFAULT_LOCALE } from './constants'

const initialState: any = {
  locale: DEFAULT_LOCALE,
}

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale,
      }
    default:
      return state
  }
}

export default languageProviderReducer
