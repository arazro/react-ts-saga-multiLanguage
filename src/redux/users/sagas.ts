import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { CodeActionTypes } from './types'
import {fetchSuccess,fetchRequest,
    fetchrefresh,fetchSuccessrefresh,
    fetchSuccessUser,fetchSuccessUserList,
    logoutSuccess} from './actions'
import {createApi,IcreateApi,refreshApi,
    IrefreshApi,getInfoApi,userApi,gettokenApi} from '../../services/api/users'   




function* handleCardList(action: ReturnType<typeof fetchRequest>) {
   
        const res = yield call(() => api(action.payload));
            yield put(fetchSuccess(res))   
}

const api = async (jwt: IcreateApi) => {
    const Idata={access: "",
    refresh: "",token:"" }
  const tokn=  await gettokenApi().then(response => response?.data).catch(err => Idata);;
  const tokn2=  await createApi(jwt).then(response => response?.data).catch(err => Idata);
        const data= {
           ...tokn,
          ...tokn2
        }

   return  data;    
}


function* watchSelectedPay() {
    yield takeLatest(CodeActionTypes.FETCH_REQUEST, handleCardList)
}

//==========================================================================

function* handlerefresh(action: ReturnType<typeof fetchrefresh>) {
   
    const res = yield call(() => refreshapi(action.payload));
        yield put(fetchSuccessrefresh(res))   
}

const refreshapi = async (jwt: IrefreshApi) => {
    const Idata={access: "",
    refresh: "",token:"" }
return await refreshApi(jwt).then(response => {return{...response?.data,refresh:jwt.refresh}})
    .catch(err => Idata);
         
}


function* watchSelectedrefresh() {
yield takeLatest(CodeActionTypes.FETCH_REFRESH, handlerefresh)
}

//==========================================================================


function* handleUserList() {
   
    const res = yield call(() => userapi());
        yield put(fetchSuccessUser(res))   
}

const userapi = async () => {
return await getInfoApi().then(response => response?.data)
    .catch(err => {
        throw err;
    });
}


function* watchSelectedUser() {
yield takeLatest(CodeActionTypes.FETCH_USER, handleUserList)
}

//==========================================================================

function* handleUserLists() {
   
    const res = yield call(() => usersapi());
        yield put(fetchSuccessUserList(res))   
}

const usersapi = async () => {
return await userApi().then(response => response?.data)
   
}


function* watchSelectedUsers() {
yield takeLatest(CodeActionTypes.FETCH_USERLIST, handleUserLists)
}

//==========================================================================


function* handlelogout() {
    const Idata={refresh: "",access: "",token:""}
    yield put(logoutSuccess(Idata)) 

}


function* watchSelectedlogout() {
yield takeLatest(CodeActionTypes.LOGOUT, handlelogout)
}

//==========================================================================

function* userSaga() {
    yield all([
        fork(watchSelectedPay),
        fork(watchSelectedrefresh),
        fork(watchSelectedUser),
        fork(watchSelectedUsers),
        fork(watchSelectedlogout)
    ])
}

export default userSaga