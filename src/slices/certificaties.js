import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';

import {
  fetchGetCvCertificates
} from "../controllers/certificaties";

const initialState = {
  certificatiesObj: [],
  ObjNew: {
    name: '',
  },
  status: statusLoaded,
};

export const slice = createSlice({
  name: 'certificaties',
  initialState,
  reducers: {
    updateItemCertificatieFiled(state, action) {
      let { index, name, value } = action.payload;
      state.certificatiesObj[index][name] = value;
    },
    updateItemCertificatieFiledNew(state, action) {
      let { name, value } = action.payload;
      state.ObjNew[name] = value;
    },
  },
  extraReducers: {
    // get list 
    [fetchGetCvCertificates.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchGetCvCertificates.fulfilled]: (state, action) => {
      state.status = statusLoaded;
      state.certificatiesObj = action.payload;
    },
  }
});

export const {
  updateItemCertificatieFiled,
  updateItemCertificatieFiledNew
} = slice.actions;

export const { reducer } = slice;
