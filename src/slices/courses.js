import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader } from '../constants/statuses';
import { fetchGetCvCourses, fetchPostAddCvOneCourses, fetchDeleteCourses } from '../controllers/courses';

const initialState = {
  courseObj: [],
  objNew: {
    title: "",
    institution: "",
    period_from: "",
    period_to: "",
  },
  status: statusLoaded,
  statusNew: statusLoaded,
};

export const slice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    updateItemFieldCourse(state, action) {
      let { index, name, value } = action.payload;
      state.courseObj[index][name] = value;
    },
    updateItemFieldCourseDate(state, action) {
      let { index, name, value } = action.payload;
      state.courseObj[index][name]['date'] = value;
    },
  },
  extraReducers: {
    // delete educations
    [fetchDeleteCourses.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchDeleteCourses.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // add
    [fetchPostAddCvOneCourses.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchPostAddCvOneCourses.fulfilled]: (state, action) => {
      state.status = statusLoaded;
    },
    // get 
    [fetchGetCvCourses.pending]: (state) => {
      state.status = statusLoader;
    },
    [fetchGetCvCourses.fulfilled]: (state, action) => {
      state.status = statusLoaded;
      state.courseObj = action.payload;
    },
  }
});

export const { updateItemFieldCourse, updateItemFieldCourseDate } = slice.actions;

export const { reducer } = slice;
