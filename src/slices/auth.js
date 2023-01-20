import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { statusLoaded, statusLoader } from '../constants/statuses';
import { fetchAuthLogin, fetchAuthRegister, fetchAuthResetPassword, fetchAuthCodeResetPassword, fetchAuthNewPassword } from '../controllers/auth'

const initialState = {
    autorizate: {
        isAthorized: false,
    },
    login: {
        status: statusLoaded,
    },
    register: {
        status: statusLoaded,
    },
    resetPassword: {
        status: statusLoaded,
    },
    checkEmailCode: {
        status: statusLoaded,
    },
    newPassword: {
        status: statusLoaded,
    },
};

const sliceAuth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.autorizate.isAthorized = action.payload;
        },
        setLogout(state, action) {
            state.autorizate.isAthorized = false;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                autorizate: {
                    ...state.autorizate,
                    ...action.payload.auth.autorizate
                }
            }
        },
        // login
        [fetchAuthLogin.pending]: (state) => {
            state.login.status = statusLoader;
        },
        [fetchAuthLogin.fulfilled]: (state, action) => {
            state.login.status = statusLoaded;
        },
        // register
        [fetchAuthRegister.pending]: (state) => {
            state.register.status = statusLoader;
        },
        [fetchAuthRegister.fulfilled]: (state, action) => {
            state.register.status = statusLoaded;
        },
        // reset password
        [fetchAuthResetPassword.pending]: (state) => {
            state.resetPassword.status = statusLoader;
        },
        [fetchAuthResetPassword.fulfilled]: (state, action) => {
            state.resetPassword.status = statusLoaded;
        },
        // code reset password
        [fetchAuthCodeResetPassword.pending]: (state) => {
            state.checkEmailCode.status = statusLoader;
        },
        [fetchAuthCodeResetPassword.fulfilled]: (state, action) => {
            state.checkEmailCode.status = statusLoaded;
        },
        // new password
        [fetchAuthNewPassword.pending]: (state) => {
            state.newPassword.status = statusLoader;
        },
        [fetchAuthNewPassword.fulfilled]: (state, action) => {
            state.newPassword.status = statusLoaded;
        },
    },
});

export const { setIsAuth, setLogout } = sliceAuth.actions;

export const { reducer } = sliceAuth;