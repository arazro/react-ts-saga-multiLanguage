import axios, { Canceler, AxiosRequestConfig } from 'axios';
import { ServerErrorHandling, DataErrorHandling } from './errorHandling';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { fetchrefresh } from '../../redux/users/actions';
import { put } from 'redux-saga/effects';


interface IapiCreator {
    headers: any,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data: any,
    token?: string
}

const config: AxiosRequestConfig = {
    baseURL: process.env.API,
    timeout: 1200000,
    responseType: 'json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    onUploadProgress: (progressEvent: ProgressEvent) => { },
    onDownloadProgress: (progressEvent: ProgressEvent) => { },
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: (status: number) => status >= 200 && status < 300,
    maxRedirects: 5,
    cancelToken: new axios.CancelToken((cancel: Canceler) => { })
};


const reHydrateStore = () => {

    if (localStorage.getItem('pypanelState') !== null) {
        const data: any = localStorage.getItem('pypanelState');
        return JSON.parse(data)

    } else
        return undefined
}



const ApiCreator = async (IapiCreator: IapiCreator) => {
    const Authorization_ = 'Bearer ' + await reHydrateStore().users.data.access;
    const token_ = await reHydrateStore().users.data.token;
    const customConfig = {
        ...config,
        headers: {
            'Accept-Language': 'fa',
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": true,
            "Allow": "GET, HEAD, OPTIONS",
            "X-Frame-Options": "SAMEORIGIN",
            ...Authorization_!=="Bearer " && { Authorization: Authorization_ },
            ...token_!=="" && { token: token_ },
            ...IapiCreator.headers && { ...IapiCreator.headers },
        },
        url: IapiCreator.url,
        method: IapiCreator.method,
        data: IapiCreator.data
    }

    return await axios(customConfig)
        .then(DataErrorHandling).catch(ServerErrorHandling)
};

interface Iapi {
    header?: any,
    url: string,
    data?: any,
    token?: string
}

/* function* sendMessage() {
    yield put(fetchrefresh({ refresh:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNjk3OTI1NCwianRpIjoiY2FkYjQ0ZDU1NjQ3NGY5NTkyN2U2MGVkNWI1NzMwNTQiLCJ1c2VyX2lkIjozfQ.0pt3j4gal-BbIoQhteDLxKSxuefyIIcBWUMuji9ob3Y"}))

   } */

const refreshAuthLogic = async (failedRequest: any) => {

   
  
}

createAuthRefreshInterceptor(axios, refreshAuthLogic);



class Api {
    static GET = (Iapi: Iapi) => ApiCreator({ headers: Iapi.header, method: 'get', url: Iapi.url, data: Iapi.data, token: Iapi.token });

    static POST = (Iapi: Iapi) => ApiCreator({ headers: Iapi.header, method: 'post', url: Iapi.url, data: Iapi.data, token: Iapi.token });

    static PUT = (Iapi: Iapi) => ApiCreator({ headers: Iapi.header, method: 'put', url: Iapi.url, data: Iapi.data, token: Iapi.token });

    static PATCH = (Iapi: Iapi) => ApiCreator({ headers: Iapi.header, method: 'patch', url: Iapi.url, data: Iapi.data, token: Iapi.token });

    static DELETE = (Iapi: Iapi) => ApiCreator({ headers: Iapi.header, method: 'delete', url: Iapi.url, data: Iapi.data, token: Iapi.token });
}

export default Api;
