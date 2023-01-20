import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';

import {
  fetchGetSkillslistWork,
  fetchGetSkillslistSearch,
  fetchGetSkillslistAll
} from "../controllers/skills";

const initialState = {
  skillsObj: {
    id: "",
    selectd_work: "",
    searchSkils: "",
    skillsList: [],
    skillsListAll: [],
  },
  status: statusLoaded,
  statusIsListSkills: statusLoaded,
  statusListSkillsAll: statusLoaded,
};

export const slice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    updateItemSkillsFiled(state, action) {
      let { name, value } = action.payload;
      state.skillsObj[name] = value;
    },
  },
  extraReducers: {
    // get list skills all
    [fetchGetSkillslistAll.pending]: (state) => {
      state.statusListSkillsAll = statusLoader;
    },
    [fetchGetSkillslistAll.fulfilled]: (state, action) => {
      state.statusListSkillsAll = statusLoaded;
      state.skillsObj.skillsListAll = action.payload;
    },
    // get skills of work
    [fetchGetSkillslistWork.pending]: (state) => {
      state.statusIsListSkills = statusLoader;
    },
    [fetchGetSkillslistWork.fulfilled]: (state, action) => {
      state.statusIsListSkills = statusLoaded;
      state.skillsObj.skillsList = action.payload;
    },
    [fetchGetSkillslistSearch.pending]: (state) => {
      state.statusIsListSkills = statusLoader;
    },
    [fetchGetSkillslistSearch.fulfilled]: (state, action) => {
      state.statusIsListSkills = statusLoaded;
      state.skillsObj.skillsList = action.payload;
    }
  }
});

export const { updateItemSkillsFiled } = slice.actions;

export const { reducer } = slice;
