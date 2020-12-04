import { Reducer } from 'redux'
import {  CodeState, CodeActionTypes } from './types'


export const initialState: CodeState = {
  data:{refresh: "",access: "",token:""},
  users:[{
    id: 0,
    last_login: "",
    username: '',
    type: "",
    status: false,
    person_id: 0,
    is_superuser: false
  }],
  loading: false
}


const reducer: Reducer<CodeState> = (state = initialState, action) => {
  switch (action.type) {
    case CodeActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case CodeActionTypes.FETCH_REFRESH: {
      return { ...state, loading: true }
    }
    case CodeActionTypes.FETCH_USER: {
      return { ...state, loading: true }
    }
    case CodeActionTypes.FETCH_USERLIST: {
      return { ...state, loading: true }
    }
    case CodeActionTypes.LOGOUT: {
      return { ...state, loading: true }
    }

    case CodeActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case CodeActionTypes.FETCH_SUCCESS_REFRESH: {
      return { ...state, loading: false, data: action.payload }
    }
    case CodeActionTypes.FETCH_SUCCESS_USRR: {
      return { ...state, loading: false, user: action.payload }
    }
    case CodeActionTypes.FETCH_SUCCESS_USRRLIST: {
      return { ...state, loading: false, users: action.payload }
    }
    case CodeActionTypes.LOGOUT_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
   
    default: {
      return state
    }
  }
}
export { reducer as usersReducer }