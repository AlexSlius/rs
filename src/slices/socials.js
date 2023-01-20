import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';

import {
  fetchGetAllLinks
} from "../controllers/socials";

const initialState = {
  socialObj: [],
  socialObjNew: {
    name: '',
    link: '',
  },
  status: statusLoaded,
  statusList: statusLoaded
};

export const slice = createSlice({
  name: 'socials',
  initialState,
  reducers: {
    updateItemSocialFiled(state, action) {
      let { index, name, value } = action.payload;
      state.socialObj[index][name] = value;
    },
    updateItemSocialFiledNew(state, action) {
      let { name, value } = action.payload;
      state.socialObjNew[name] = value;
    },
  },
  extraReducers: {
    // get list skills all
    [fetchGetAllLinks.pending]: (state) => {
      state.statusList = statusLoader;
    },
    [fetchGetAllLinks.fulfilled]: (state, action) => {
      state.statusList = statusLoaded;
      state.socialObj = action.payload;
    },
  }
});

export const { updateItemSocialFiled, updateItemSocialFiledNew } = slice.actions;

export const { reducer } = slice;
