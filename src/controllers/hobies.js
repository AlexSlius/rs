import { createAsyncThunk } from '@reduxjs/toolkit';

import api from "../apiSingleton";

export const fetchPostAddCvHobie = createAsyncThunk('countrus/fetchPostAddCvHobie', async ({ idCv, data }, thunkAPI) => {
    const response = await api.hobies.addItemHobie(idCv, data);
    await thunkAPI.dispatch(fetchGetCvHobie({ idCv }));
    return response;
});

export const fetchGetCvHobie = createAsyncThunk('countrus/fetchGetCvHobie', async ({ idCv }) => {
    const response = await api.hobies.getAllHobies(idCv);
    return response;
});

export const fetchDeleteHobie = createAsyncThunk('countrus/fetchDeleteHobie', async ({ idCv, id }, thunkAPI) => {
    const response = await api.hobies.deleteItemHobie(id);
    await thunkAPI.dispatch(fetchGetCvHobie({ idCv }));
    return response;
});