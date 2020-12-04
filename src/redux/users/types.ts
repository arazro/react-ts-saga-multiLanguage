
export enum CodeActionTypes {
    FETCH_REQUEST = '@@users/FETCH_REQUEST',
    FETCH_SUCCESS = '@@users/FETCH_SUCCESS',
    FETCH_REFRESH = '@@users/FETCH_REFRESH',
    FETCH_SUCCESS_REFRESH='@@users/FETCH_SUCCESS_REFRESH',
    FETCH_USER = '@@users/FETCH_USER',
    FETCH_SUCCESS_USRR = '@@users/FETCH_SUCCESS_USRR',
    FETCH_USERLIST = '@@users/FETCH_USERLIST',
    FETCH_SUCCESS_USRRLIST = '@@users/FETCH_SUCCESS_USRRLIST ',
    LOGOUT= '@@users/LOGOUT ',
    LOGOUT_SUCCESS= '@@users/LOGOUT_SUCCESS ',
}


export interface GetCode {
        refresh: string,
        access: string,
        token:string
}
export interface user {
    username: string
}

export interface users{
    id: number,
    last_login?: string,
    username: string,
    type?: string,
    status?: boolean,
    person_id?: number,
    is_superuser: boolean
  }

export interface CodeState {

    readonly loading: boolean
    readonly data: GetCode
    readonly user?: user
    readonly users: users[]

}