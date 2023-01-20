import { createAsyncThunk } from '@reduxjs/toolkit';
import { isArray } from 'lodash';

import api from "../apiSingleton";

export const functionFetchEmployment = async ({ dispatch, isPage = false, idCv }) => {
    let { payload } = await dispatch(fetchGetCvEmployments({ idCv, isPage }))

    if (isPage) {
        if (isArray(payload) && payload?.length == 0)
            await dispatch(fetchPostAddCvOneEmployment({ idCv }));
    }
}

// all list
export const fetchGetCvEmployments = createAsyncThunk('employment/fetchGetCvEmployments', async ({ idCv, isPage }, thunkAPI) => {
    const response = await api.employments.getListEmployment(idCv);
    return response;
});

export const fetchPostAddCvOneEmployment = createAsyncThunk('employment/fetchPostAddCvOneEmployment', async ({ idCv }, thunkAPI) => {
    const { employment: { objNew } } = thunkAPI.getState();
    const response = await api.employments.addEmploymentItem(idCv, objNew);
    await thunkAPI.dispatch(fetchGetCvEmployments({ idCv }));
    return response;
});

export const fetchDeleteEmployment = createAsyncThunk('employment/fetchDeleteHobie', async ({ idCv, id }, thunkAPI) => {
    const response = await api.employments.deleteEmploymentItem(id);
    await thunkAPI.dispatch(fetchGetCvEmployments({ idCv }));
    return response;
});

export const fetchUpdateEmployment = createAsyncThunk('employment/fetchUpdateEmployment', async ({ index }, thunkAPI) => {
    const { employment: { employmentObj } } = thunkAPI.getState();
    let { id, periodFrom, periodTo, ...obj } = employmentObj[index];

    obj.period_from = periodFrom.date;
    obj.period_to = periodTo.date;

    const response = await api.employments.updateEmploymentItem(id, obj);
    return response;
});

