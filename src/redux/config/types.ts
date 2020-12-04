
export enum ActionTypes {
  FETCH_REQUEST = '@@config/FETCH_REQUEST',
  FETCH_SUCCESS = '@@cinfig/FETCH_SUCCESS',
  FETCH_REQUESTUCODE = '@@config/FETCH_REQUESTUCODE',
  FETCH_SUCCESSUCODE = '@@cinfig/FETCH_SUCCESSUCODE',
  FETCH_REQUESTDARK = '@@config/FETCH_REQUESTDARK',
  FETCH_SUCCESSDARK = '@@cinfig/FETCH_SUCCESSDARK',
}



export interface languageState {

  readonly  language:  "fa" | "en"
  readonly  darkMode: 'dark' | 'light'
  readonly  UCode?: string
  readonly  loading?:boolean
}