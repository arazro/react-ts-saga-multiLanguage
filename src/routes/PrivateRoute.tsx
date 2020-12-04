import React, { FC, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../redux';
import { Iroutes } from './routes';
import { verifyApi } from '../services/api/users'
import { fetchrefresh } from '../redux/users/actions';



const PrivateRoute: FC<Iroutes> = ({ Component, render, path, reverse, Layout }) => {

    const access = useSelector((state: ApplicationState) => state.users.data.access)
    const refresh = useSelector((state: ApplicationState) => state.users.data.refresh)
    const dispatch = useDispatch();


    useEffect(() => {
        verify();
    }, [access])



    const verify = async () => {
        if (access !== "") {
            try {
                const res = await verifyApi({ token: access })
            } catch {
                dispatch(fetchrefresh({ refresh: refresh }))
            }

        }

    }



    if (reverse) {
        return (
            <Route path={path} >

                {access === ""
                    ? <Layout  ><Component /></Layout>
                    : <Redirect to={{ pathname: '/' }} />}
            </Route>
        );
    }
    else
        return (
            <Route path={path}>

                {access !== ""
                    ? <Layout ><Component /></Layout>
                    : <Redirect to={{ pathname: '/login' }} />}
            </Route>
        );


}


export default PrivateRoute;