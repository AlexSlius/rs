import { makeApiCall } from '../api/makeApiCall';
import { GET_CV, ADD_NEW_CV, UPDATE_CV } from '../constants/apiEndpoints';
import { setContact } from '../slices/contact';
import { camelToSnakeCase } from '../utils';

const dateArr = ['dateOfBirth'];

export const getContact = () => async (dispatch, getState) => {

    const result =  await makeApiCall('get', GET_CV());

    if(result.statusText === 'OK') {
        const arr = Object.entries(result.data[0]);
        const newArr = arr.map(([key, value]) => {
            if(dateArr.includes(key)) {
                return [camelToSnakeCase(key), new Date(value).toString()];
            }
            return [camelToSnakeCase(key), value];
        })

        const saveArr = Object.fromEntries(newArr);
        await dispatch(setContact(saveArr))

    }
};


export const createContact = (data, formattedData) => async (dispatch) => {

    const result =  await makeApiCall('post', ADD_NEW_CV(), formattedData);

    if(result.statusText === 'OK') {
        let {picture, ...rest} = data;
        if(typeof picture === 'object') {
            picture = URL.createObjectURL(picture);
        }
        await dispatch(setContact({picture, ...rest}));
    }

};

export const updateContact = (data, formattedData) => async (dispatch, getState) => {
        const {id} = getState().contact.contact;
        const result =  await makeApiCall('post', UPDATE_CV(id), formattedData);

        if(result.statusText === 'OK') {
            let {picture, ...rest} = data;
            if(typeof picture === 'object') {
                picture = URL.createObjectURL(picture);
            }
            await dispatch(setContact({picture, ...rest}));
        }
};

export const makeContact = (data, valuesExist, formattedData) => async (dispatch) => {

    if(valuesExist) {
        await dispatch(updateContact(data, formattedData));
    } else {
        await dispatch(createContact(data, formattedData));
    }
    
    return true;
};