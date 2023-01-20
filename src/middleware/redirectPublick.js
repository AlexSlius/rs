import React from "react";

import api from "../apiSingleton";

import { wrapper } from "../../src/store"
import { setIsAuth } from "../slices/auth";
import { cookieParse } from "../helpers/nookies";
import { isAuthRedirect } from "../helpers/auth";
import { isExist } from '../helpers/checkingStatuses';

export const withRedirectPublickPage = () => {
    return wrapper.getServerSideProps(store => async (ctx) => {
        try {
            const { pathname, req, res } = ctx;
            const cookis = cookieParse({ ctx });

            if (!!cookis?.token) {
                const serverRespons = await api.auth.isAutorization({ 'token': cookis.token });
                await store.dispatch(setIsAuth(isExist(serverRespons)));

                if (isExist(serverRespons)) {
                    isAuthRedirect({ res, page: 'resumeBuilder' });
                }
            }

            return { props: {} };
        } catch (error) {
            console.log("withPrivateRoute: ", error)
            return { props: {} };
        }
    });
};

