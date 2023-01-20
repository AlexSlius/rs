import { createAsyncThunk } from '@reduxjs/toolkit';
import { isArray } from 'lodash';

import api from "../apiSingleton";

export const functionFetchLanguages = async ({ dispatch, isPage = false, idCv }) => {
    let { payload } = await dispatch(fetchGetCvLanguages({ idCv, isPage }))

    if (isPage) {
        if (isArray(payload) && payload?.length == 0)
            await dispatch(fetchPostAddCvOneLanguages({ idCv }));
    }
}

// all list
export const fetchGetCvLanguages = createAsyncThunk('languages/fetchGetCvLanguages', async ({ idCv, isPage = false }, thunkAPI) => {
    const response = await api.languages.getListLanguages(idCv);
    return response;
});

export const fetchPostAddCvOneLanguages = createAsyncThunk('languages/fetchPostAddCvOneLanguages', async ({ idCv }, thunkAPI) => {
    const { languages: { objNew } } = thunkAPI.getState();

    const response = await api.languages.addLanguagesItem(idCv, objNew);
    await thunkAPI.dispatch(fetchGetCvLanguages({ idCv }));
    return response;
});

export const fetchDeleteLanguages = createAsyncThunk('languages/fetchDeleteLanguages', async ({ idCv, id }, thunkAPI) => {
    const response = await api.languages.deleteLanguagesItem(id);
    await thunkAPI.dispatch(fetchGetCvLanguages({ idCv }));
    return response;
});

export const fetchUpdateLanguages = createAsyncThunk('languages/fetchUpdateLanguages', async ({ index }, thunkAPI) => {
    const { languages: { languageObj } } = thunkAPI.getState();

    const obj = languageObj[index];
    const response = await api.languages.updateLanguagesItem(obj.id, obj);
    return response;
});

