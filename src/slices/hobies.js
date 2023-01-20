import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';

import {
  fetchGetCvHobie
} from "../controllers/hobies";

const initialState = {
  hobiesObj: [],
  hobieObjNew: {
    text: '',
  },
  status: statusLoaded,
  statusList: statusLoaded
};

export const slice = createSlice({
  name: 'hobies',
  initialState,
  reducers: {
    updateItemHobiesFiledNew(state, action) {
      let { name, value } = action.payload;
      state.hobieObjNew[name] = value;
    },
  },
  extraReducers: {
    // get list skills all
    [fetchGetCvHobie.pending]: (state) => {
      state.statusList = statusLoader;
    },
    [fetchGetCvHobie.fulfilled]: (state, action) => {
      state.statusList = statusLoaded;
      state.hobiesObj = action.payload;
    },
  }
});

export const { updateItemHobiesFiledNew } = slice.actions;

export const { reducer } = slice;
