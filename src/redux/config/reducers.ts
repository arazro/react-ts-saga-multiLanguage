import { Reducer } from 'redux'
import {  languageState, ActionTypes } from './types'

export const initialState: languageState = {
  language: "fa",
  darkMode: "light"
}

const reducer: Reducer<languageState> = (state=initialState , action) => {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }

    case ActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, language: action.payload }
    }

    case ActionTypes.FETCH_REQUESTUCODE: {
      return { ...state, loading: true }
    }

    case ActionTypes.FETCH_SUCCESSUCODE: {
      return { ...state, loading: false, UCode: action.payload }
    }

    case ActionTypes.FETCH_REQUESTDARK: {
      return { ...state, loading: true }
    }

    case ActionTypes.FETCH_SUCCESSDARK: {
      return { ...state, loading: false, darkMode: action.payload }
    }

    default: {
      return state
    }
  }
}
export { reducer as lanReducer }