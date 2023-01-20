import { createAsyncThunk } from '@reduxjs/toolkit';
import { isArray } from 'lodash';

import api from "../apiSingleton";

export const functionFetchInterships = async ({ dispatch, isPage = false, idCv }) => {
    let { payload } = await dispatch(fetchGetCvInternships({ idCv, isPage }))

    if (isPage) {
        if (isArray(payload) && payload?.length == 0)
            await dispatch(fetchPostAddCvOneInternships({ idCv }));
    }
}

// all list
export const fetchGetCvInternships = createAsyncThunk('interhip/fetchGetCvInternships', async ({ idCv, isPage = false }, thunkAPI) => {
    const response = await api.internships.getListInternships(idCv);
    return response;
});

export const fetchPostAddCvOneInternships = createAsyncThunk('interhip/fetchPostAddCvOneInternships', async ({ idCv }, thunkAPI) => {
    const { interships: { objNew } } = thunkAPI.getState();

    const response = await api.internships.addInternshipsItem(idCv, objNew);
    await thunkAPI.dispatch(fetchGetCvInternships({ idCv }));
    return response;
});

export const fetchDeleteInternships = createAsyncThunk('interhip/fetchDeleteHobie', async ({ idCv, id }, thunkAPI) => {
    const response = await api.internships.deleteInternshipsItem(id);
    await thunkAPI.dispatch(fetchGetCvInternships({ idCv }));
    return response;
});

export const fetchUpdateInternships = createAsyncThunk('interhip/fetchUpdateInternships', async ({ index }, thunkAPI) => {
    const { interships: { interhipObj } } = thunkAPI.getState();
    let { id, dateFrom, dateTo, ...obj } = interhipObj[index];

    obj.date_from = dateFrom.date;
    obj.date_to = dateTo.date;

    const response = await api.internships.updateInternshipsItem(id, obj);
    return response;
});

