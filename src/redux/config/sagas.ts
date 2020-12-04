  import { all, put, fork,  takeEvery } from 'redux-saga/effects'
import { ActionTypes } from './types'
import { fetchSuccess,fetchSuccessUCode,fetchSuccessdark } from './actions'


function* handleSelect(action: ReturnType<typeof fetchSuccess>) {


   yield put(fetchSuccess(action.payload))

 }

 function* handleSelectUCode(action: ReturnType<typeof fetchSuccessUCode>) {


  yield put(fetchSuccessUCode(action.payload))

}

function* handleSelectdark(action: ReturnType<typeof fetchSuccessdark>) {


  yield put(fetchSuccessdark(action.payload))

}

function* watchSelect() {
  yield takeEvery(ActionTypes.FETCH_REQUEST, handleSelect)
}

function* watchSelectUCode() {
  yield takeEvery(ActionTypes.FETCH_REQUESTUCODE, handleSelectUCode)
}

function* watchSelectdark() {
  yield takeEvery(ActionTypes.FETCH_REQUESTDARK, handleSelectdark)
}

function* lanSaga() {
  yield all([fork(watchSelect),fork(watchSelectUCode),fork(watchSelectdark)])
}

export default lanSaga