import { action } from 'typesafe-actions'
import { CodeActionTypes, GetCode } from './types'
import {IcreateApi,IrefreshApi} from '../../services/api/users' 


export const fetchRequest = (user:IcreateApi) => action(CodeActionTypes.FETCH_REQUEST, user)
export const fetchrefresh = (refresh:IrefreshApi) => action(CodeActionTypes.FETCH_REFRESH, refresh)
export const fetchUser = () => action(CodeActionTypes.FETCH_USER)
export const fetchUserList = () => action(CodeActionTypes.FETCH_USERLIST)
export const logout = () => action(CodeActionTypes.LOGOUT)

export const fetchSuccess = (data: GetCode) => action(CodeActionTypes.FETCH_SUCCESS, data)
export const fetchSuccessrefresh = (data: GetCode) => action(CodeActionTypes.FETCH_SUCCESS_REFRESH, data)
export const fetchSuccessUser = (data: GetCode) => action(CodeActionTypes.FETCH_SUCCESS_USRR, data)
export const fetchSuccessUserList = (data: GetCode) => action(CodeActionTypes.FETCH_SUCCESS_USRRLIST, data)
export const logoutSuccess = (data: GetCode) => action(CodeActionTypes.LOGOUT_SUCCESS, data)
