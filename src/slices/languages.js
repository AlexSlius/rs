import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';

import {
  fetchGetCvLanguages,
  fetchPostAddCvOneLanguages,
  fetchDeleteLanguages,
} from "../controllers/languages";

const initialState = {
  languageObj: [],
  objNew: {
    language: "languages",
    level: "3",
  },
  status: statusLoaded,
  statusList: statusLoaded
};

export const slice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    updateItemLanguageFiled(state, action) {
      let { index, name, value } = action.payload;
      state.languageObj[index][name] = value;
    },
  },
  extraReducers: {
    // delete 
    [fetchDeleteLanguages.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchDeleteLanguages.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // app
    [fetchPostAddCvOneLanguages.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchPostAddCvOneLanguages.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // get
    [fetchGetCvLanguages.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchGetCvLanguages.fulfilled]: (state, action) => {
      state.status = statusLoaded;
      state.languageObj = action.payload;
    },
  }
});

export const { updateItemLanguageFiled } = slice.actions;

export const { reducer } = slice;
