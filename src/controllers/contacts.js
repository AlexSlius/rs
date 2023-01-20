import { createAsyncThunk } from '@reduxjs/toolkit';
import Router from "next/router";

import api from "../apiSingleton";
import { isSuccessNewContact } from '../helpers/checkingStatuses';
import { localStorageSet, sessionStorageSet } from "../helpers/localStorage"
import { routersPages, routerLinksAsideMenu } from '../constants/next-routers';

export const contactSetNew = createAsyncThunk('fetch/setNewContact', async (dataImage, thunkAPI) => {
    const { contacts: { contactObj } } = thunkAPI.getState()

    const newObj = {
        date_of_birth: contactObj.dateOfBirth,
        driver_license: contactObj.driverLicense || '',
        zip_code: contactObj.zipCode,
        city: contactObj.city || '',
        phone: contactObj.phone,
        place_of_birth: contactObj.placeOfBirth,
        last_name: contactObj.lastName,
        address: contactObj.address,
        country: contactObj.country || '',
        first_name: contactObj.firstName,
        nationality: contactObj.nationality || '',
        email: contactObj.email,
        picture: dataImage
    }

    const response = await api.contact.setBaseInfo(newObj);

    if (isSuccessNewContact(response)) {
        localStorageSet("session_id", response.session_id);
        sessionStorageSet("routet_page_next", `${routerLinksAsideMenu[1].link}`)
        Router.push(`/${routersPages['login']}`);
    }

    return response;
})

export const getBasicContact = createAsyncThunk('fetch/getBasicContact', async (idCv, thunkAPI) => {
    const response = await api.contact.getBasic(idCv);

    let dataRes = {
        id: response[0].id,
        firstName: response[0].firstName,
        lastName: response[0].lastName,
        picture: response[0].picture,
        email: response[0].email,
        phone: response[0].phone,
        country: response[0].country,
        nationality: response[0].nationality,
        city: response[0].city,
        address: response[0].address,
        zipCode: response[0].zipCode,
        driverLicense: response[0].driverLicense,
        placeOfBirth: response[0].placeOfBirth,
        dateOfBirth: response[0].dateOfBirth,
    };

    return dataRes;
})

export const fetchUpdateContact = createAsyncThunk('fetch/fetchUpdateContact', async ({ idCv }, thunkAPI) => {
    const { contacts: { contactObj } } = thunkAPI.getState()

    const response = await api.contact.updateContact(idCv, contactObj);
    return response;
});
