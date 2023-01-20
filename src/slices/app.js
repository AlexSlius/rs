import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: true
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(
      state,
      action
    ){
      state.loading = action.payload;
    },
  }
});

export const { setLoading } = slice.actions;

export const { reducer } = slice;
