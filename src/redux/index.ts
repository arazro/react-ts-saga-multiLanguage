import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import userSaga from './users/sagas'
import { usersReducer } from './users/reducers'
import { CodeState } from './users/types'
import { lanReducer } from './config/reducers'
import { languageState } from './config/types'
import lanSaga from './config/sagas'






export interface ApplicationState {
  users: CodeState
  router: RouterState
  config: languageState

}

export const createRootReducer = (history: History) =>

  combineReducers({
    users: usersReducer,
    router: connectRouter(history),
    config: lanReducer
  })

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(lanSaga)
  ])
}