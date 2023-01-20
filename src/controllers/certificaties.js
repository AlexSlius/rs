import { createAsyncThunk } from '@reduxjs/toolkit';

import api from "../apiSingleton";

// all list
export const fetchGetCvCertificates = createAsyncThunk('certificates/fetchGetCvCertificates', async ({ idCv, isPage = false }, thunkAPI) => {
    const response = await api.certificates.getListCertificates(idCv);
    return response;
});

export const fetchPostAddCvOneCertificates = createAsyncThunk('certificates/fetchPostAddCvOneCertificates', async ({ idCv }, thunkAPI) => {
    const { certificaties: { ObjNew } } = thunkAPI.getState();

    const response = await api.certificates.addCertificatesItem(idCv, ObjNew);
    await thunkAPI.dispatch(fetchGetCvCertificates({ idCv }));
    return response;
});

export const fetchDeleteCertificates = createAsyncThunk('certificates/fetchDeleteCertificates', async ({ idCv, id }, thunkAPI) => {
    const response = await api.certificates.deleteCertificatesItem(id);
    await thunkAPI.dispatch(fetchGetCvCertificates({ idCv }));
    return response;
});

export const fetchUpdateCertificates = createAsyncThunk('certificates/fetchUpdateCertificates', async ({ index }, thunkAPI) => {
    const { certificaties: { certificatiesObj } } = thunkAPI.getState();
    const obj = certificatiesObj[index];
    const response = await api.certificates.updateCertificatesItem(obj.id, obj);
    return response;
});

