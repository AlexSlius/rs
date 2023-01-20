import { createAsyncThunk } from '@reduxjs/toolkit';
import { isArray } from 'lodash';

import api from "../apiSingleton";

export const functionFetchReferences = async ({ dispatch, isPage = false, idCv }) => {
    let { payload } = await dispatch(fetchGetCvReferences({ idCv, isPage }))

    if (isPage) {
        if (isArray(payload) && payload?.length == 0)
            await dispatch(fetchPostAddCvOneReferences({ idCv }));
    }
}

// all list
export const fetchGetCvReferences = createAsyncThunk('interhip/fetchGetCvReferences', async ({ idCv }) => {
    const response = await api.references.getListReferences(idCv);
    return response;
});

export const fetchPostAddCvOneReferences = createAsyncThunk('interhip/fetchPostAddCvOneReferences', async ({ idCv }, thunkAPI) => {
    const { references: { objNew } } = thunkAPI.getState();

    const response = await api.references.addReferencesItem(idCv, objNew);
    await thunkAPI.dispatch(fetchGetCvReferences({ idCv }));
    return response;
});

export const fetchDeleteReferences = createAsyncThunk('interhip/fetchDeleteReferences', async ({ idCv, id }, thunkAPI) => {
    const response = await api.references.deleteReferencesItem(id);
    await thunkAPI.dispatch(fetchGetCvReferences({ idCv }));
    return response;
});

export const fetchUpdateReferences = createAsyncThunk('interhip/fetchUpdateReferences', async ({ index }, thunkAPI) => {
    const { references: { referencesObj } } = thunkAPI.getState();
    let obj = referencesObj[index];

    const response = await api.references.updateReferencesItem(obj.id, obj);
    return response;
});

