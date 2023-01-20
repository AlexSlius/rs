import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';
import { fetchGetCvActivitys, fetchPostAddCvOneActivitys, fetchDeleteActivitys } from '../controllers/activitys';

const initialState = {
  activityObj: [],
  objNew: {
    title: "",
    employer: "",
    period_from: "",
    period_to: "",
    city: "",
    description: "",
  },
  status: statusLoaded,
  statusNew: statusLoaded,
};

export const slice = createSlice({
  name: 'activitys',
  initialState,
  reducers: {
    updateItemFieldActivity(state, action) {
      let { index, name, value } = action.payload;
      state.activityObj[index][name] = value;
    },
    updateItemFieldActivityDate(state, action) {
      let { index, name, value } = action.payload;
      state.activityObj[index][name]['date'] = value;
    },
  },
  extraReducers: {
    // delete educations
    [fetchDeleteActivitys.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchDeleteActivitys.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // get educations
    [fetchPostAddCvOneActivitys.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchPostAddCvOneActivitys.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // get educations
    [fetchGetCvActivitys.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchGetCvActivitys.fulfilled]: (state, action) => {
      state.status = statusLoaded;
      state.activityObj = action.payload;
    },
  }
});

export const { updateItemFieldActivity, updateItemFieldActivityDate } = slice.actions;

export const { reducer } = slice;
