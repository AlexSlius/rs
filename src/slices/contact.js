import { createSlice } from '@reduxjs/toolkit';

import { contactSetNew, getBasicContact } from "../controllers/contacts";
import { statusLoaded, statusLoader } from '../constants/statuses';

const initialState = {
  contactObj: {
    id: "",
    firstName: "",
    lastName: "",
    picture: null,
    email: "",
    phone: "",
    country: "",
    nationality: "",
    city: "",
    address: "",
    zipCode: "",
    driverLicense: "",
    placeOfBirth: "",
    dateOfBirth: ""
  },
  status: statusLoaded,
  statusNew: statusLoaded,
};

export const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContact(state, action) {
      // state.contactObj[name] = value;
    },
    updateItemFieldContact(state, action) {
      let { name, value } = action.payload;
      state.contactObj[name] = value;
    },
    updatePictureContact(state, action) {
      state.contactObj.picture = action.payload;
    }
  },
  extraReducers: {
    // get
    [getBasicContact.pending]: (state) => {
      state.status = statusLoader;
    },
    [getBasicContact.fulfilled]: (state, action) => {
      state.status = statusLoaded;
      state.contactObj = action.payload;
    },
    // new
    [contactSetNew.pending]: (state) => {
      state.statusNew = statusLoader;
    },
    [contactSetNew.fulfilled]: (state) => {
      state.statusNew = statusLoaded;
    }
  }
});

export const { setContact, updateItemFieldContact, updatePictureContact } = slice.actions;

export const { reducer } = slice;
