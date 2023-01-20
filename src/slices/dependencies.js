import { createSlice } from '@reduxjs/toolkit';

import { statusLoaded, statusLoader, statusError } from '../constants/statuses';
import {
    fetchGetCountrys,
    fetchGetCities,
    fetchGetZipCodes,
    fetchGetDrivers,
    fetchGetNationality,
    getJopsTitle,
    getCompanyList,
    getEmploymentsList,
    getStudysList,
    fetchGetSkillsPosition,
    fetchGetSocials,
    fetchGetHobies
} from "../controllers/dependencies";

const initialState = {
    coutrys: {
        list: [],
        status: statusLoaded
    },
    cities: {
        list: [],
        status: statusLoaded,
    },
    zipsCodes: {
        list: [],
        status: statusLoaded,
    },
    drivers: {
        list: [],
        status: statusLoaded,
    },
    nationality: {
        list: [],
        status: statusLoaded,
    },
    jopsTitle: {
        list: [],
        status: statusLoaded,
    },
    companys: {
        list: [],
        status: statusLoaded,
    },
    employers: {
        list: [],
        status: statusLoaded,
    },
    studys: {
        list: [],
        status: statusLoaded,
    },
    skillsPositions: {
        list: [],
        status: statusLoaded,
    },
    socials: {
        list: [],
        status: statusLoaded,
    },
    hobies: {
        list: [],
        status: statusLoaded,
    },
    language: {
        list: [],
        status: statusLoaded,
    }
};


export const sliceDepenndecies = createSlice({
    name: 'dependencies',
    initialState,
    reducers: {},
    extraReducers: {
        // get hobies 
        [fetchGetHobies.pending]: (state) => {
            state.hobies.list = [];
            state.hobies.status = statusLoader;
        },
        [fetchGetHobies.fulfilled]: (state, action) => {
            state.hobies.status = statusLoaded;
            state.hobies.list = action.payload;
        },
        // get socials 
        [fetchGetSocials.pending]: (state) => {
            state.socials.list = [];
            state.socials.status = statusLoader;
        },
        [fetchGetSocials.fulfilled]: (state, action) => {
            state.socials.status = statusLoaded;
            state.socials.list = action.payload;
        },
        // get skills position
        [fetchGetSkillsPosition.pending]: (state) => {
            state.skillsPositions.list = [];
            state.skillsPositions.status = statusLoader;
        },
        [fetchGetSkillsPosition.fulfilled]: (state, action) => {
            state.skillsPositions.status = statusLoaded;
            state.skillsPositions.list = action.payload;
        },
        // get all companu
        [getStudysList.pending]: (state) => {
            state.studys.list = [];
            state.studys.status = statusLoader;
        },
        [getStudysList.fulfilled]: (state, action) => {
            state.studys.status = statusLoaded;
            state.studys.list = action.payload;
        },
        // get all companu
        [getEmploymentsList.pending]: (state) => {
            state.employers.list = [];
            state.employers.status = statusLoader;
        },
        [getEmploymentsList.fulfilled]: (state, action) => {
            state.employers.status = statusLoaded;
            state.employers.list = action.payload;
        },
        // get all companu
        [getCompanyList.pending]: (state) => {
            state.companys.list = [];
            state.companys.status = statusLoader;
        },
        [getCompanyList.fulfilled]: (state, action) => {
            state.companys.status = statusLoaded;
            state.companys.list = action.payload;
        },
        //get all coutrys
        [fetchGetCountrys.pending]: (state) => {
            state.coutrys.list = [];
            state.coutrys.status = statusLoader;
        },
        [fetchGetCountrys.fulfilled]: (state, action) => {
            state.coutrys.status = statusLoaded;
            state.coutrys.list = action.payload;
        },
        [fetchGetCountrys.rejected]: (state) => {
            state.coutrys.list = [];
            state.coutrys.status = statusError;
        },
        //get all cities
        [fetchGetCities.pending]: (state) => {
            state.cities.list = [];
            state.cities.status = statusLoader;
        },
        [fetchGetCities.fulfilled]: (state, action) => {
            state.cities.status = statusLoaded;
            state.cities.list = action.payload;
        },
        [fetchGetCities.rejected]: (state) => {
            state.cities.list = [];
            state.cities.status = statusError;
        },
        //get all zipsCodes
        [fetchGetZipCodes.pending]: (state) => {
            state.zipsCodes.list = [];
            state.zipsCodes.status = statusLoader;
        },
        [fetchGetZipCodes.fulfilled]: (state, action) => {
            state.zipsCodes.status = statusLoaded;
            state.zipsCodes.list = action.payload;
        },
        [fetchGetZipCodes.rejected]: (state) => {
            state.zipsCodes.list = [];
            state.zipsCodes.status = statusError;
        },
        //get all drivers
        [fetchGetDrivers.pending]: (state) => {
            state.drivers.list = [];
            state.drivers.status = statusLoader;
        },
        [fetchGetDrivers.fulfilled]: (state, action) => {
            state.drivers.status = statusLoaded;
            state.drivers.list = action.payload;
        },
        [fetchGetDrivers.rejected]: (state) => {
            state.drivers.list = [];
            state.drivers.status = statusError;
        },
        //get all nationality
        [fetchGetNationality.pending]: (state) => {
            state.nationality.list = [];
            state.nationality.status = statusLoader;
        },
        [fetchGetNationality.fulfilled]: (state, action) => {
            state.nationality.status = statusLoaded;
            state.nationality.list = action.payload;
        },
        [fetchGetNationality.rejected]: (state) => {
            state.nationality.list = [];
            state.nationality.status = statusError;
        },
        // get all jops title
        [getJopsTitle.pending]: (state) => {
            state.jopsTitle.list = [];
            state.jopsTitle.status = statusLoader;
        },
        [getJopsTitle.fulfilled]: (state, action) => {
            state.jopsTitle.status = statusLoaded;
            state.jopsTitle.list = action.payload;
        },
    }
});

export const { reducer } = sliceDepenndecies;
