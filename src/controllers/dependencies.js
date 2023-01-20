import { createAsyncThunk } from '@reduxjs/toolkit';

import api from "../apiSingleton";

export const fetchGetCountrys = createAsyncThunk('countrus/fetchGetCountrus', async () => {
    const response = await api.dependencies.getCountrys();
    return response;
})

export const fetchGetCities = createAsyncThunk('sities/fetchGetCities', async ({ id, params }) => {
    const response = await api.dependencies.getCities(id, { query: params, limit: `100` });
    return response;
})

export const fetchGetZipCodes = createAsyncThunk('zip/fetchGetCodes', async (id) => {
    const response = await api.dependencies.getZipCodes(id);
    return response;
})

export const fetchGetDrivers = createAsyncThunk('reivers/fetchGetDrivers', async (id) => {
    const response = await api.dependencies.getDrivers(id);
    return response;
})

export const fetchGetNationality = createAsyncThunk('fetch/fetchGetNationality', async (_, thunkAPI) => {
    const { contacts: { contactObj: { nationality } } } = thunkAPI.getState();
    const response = await api.dependencies.getNationality({ "query": nationality?.name || '' });
    return response;
})

export const getJopsTitle = createAsyncThunk('fetch/fetchGetJopsTitle', async (params, thunkAPI) => {
    const response = await api.dependencies.getJopsTitle({ "query": params || '' });
    return response;
})

export const getCompanyList = createAsyncThunk('fetch/fetchGetCompanyList', async (params, thunkAPI) => {
    const response = await api.dependencies.getCompanys({ "query": params || '' });
    return response;
})

export const getEmploymentsList = createAsyncThunk('fetch/fetchGetEmploymentList', async (params, thunkAPI) => {
    const response = await api.dependencies.getEmploymentList({ "query": params || '' });
    return response;
})

export const getStudysList = createAsyncThunk('fetch/fetchGetStudysList', async (params, thunkAPI) => {
    const response = await api.dependencies.getStudysList({ "query": params || '' });
    return response;
})

export const fetchGetSkillsPosition = createAsyncThunk('countrus/fetchGetSkillsPosition', async (params) => {
    const response = await api.dependencies.getSkillsPosition({ "query": params || '', limit: 10 });
    return response;
})

export const fetchGetSocials = createAsyncThunk('countrus/fetchGetSocials', async (params) => {
    const response = await api.dependencies.getSocials({ "query": params || '' });
    return response;
})

export const fetchGetHobies = createAsyncThunk('countrus/fetchGetHobies', async (params) => {
    const response = await api.dependencies.getHobies({ "query": params || '' });
    return response;
})

