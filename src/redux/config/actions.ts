import { action } from 'typesafe-actions'
import { ActionTypes  } from './types'

export const fetchRequest = () => action(ActionTypes.FETCH_REQUEST)
export const fetchSuccess = (language: "fa" | "en") => action(ActionTypes.FETCH_SUCCESS, language)

export const fetchRequestUCode = () => action(ActionTypes.FETCH_REQUESTUCODE)
export const fetchSuccessUCode = (UCode: string) => action(ActionTypes.FETCH_SUCCESSUCODE, UCode)


export const fetchRequestdark = () => action(ActionTypes.FETCH_REQUESTDARK)
export const fetchSuccessdark = ( darkMode: 'dark' | 'light') => action(ActionTypes.FETCH_SUCCESSDARK, darkMode)