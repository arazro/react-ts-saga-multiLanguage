import Api from './index';

export const userApi = () => Api.GET({ url: "/user/" });

export const getInfoApi = () => Api.GET({ url: "/user/profile/get_info/" });

export const getIdApi = (id:number) => Api.GET({ url: `/user/${id}/` });

export interface IcreateApi { username: string, password: string }
export const createApi = (data: IcreateApi) => Api.POST({ url: '/login/jwt/create/', data });

export interface IrefreshApi { refresh: string}
export const refreshApi = (data: IrefreshApi) => Api.POST({ url: '/login/jwt/refresh/', data });

export interface IverifyApi { token?: string }
export const verifyApi = (data: IverifyApi) => Api.POST({ url: '/login/jwt/verify/', data });

export interface IpostUserApi { username: string, password: string }
export const postUserApi = (data:IpostUserApi) => Api.POST({ url: "/user/", data  });

export interface IputUserApi { username: string, password: string, old_password: string }
export const putUserApi = (data:IputUserApi) => Api.PUT({ url: "/user/", data  });

const token = Buffer.from(`${"react"}:${"reactpass"}`, 'utf8').toString('base64')
export const gettokenApi = () => Api.GET({header:{ Authorization: `Basic ${token}`}, url: '/login/token' });