import { ADD_INTERSHIP, UPDATE_INTERSHIP, GET_INTERSHIP } from '../constants/apiEndpoints';
import { setInterships } from '../slices/intership';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createInterships = makeCreate(`${ROUTES['intership']}`, ADD_INTERSHIP);
const updateInterships = makeUpdate(`${ROUTES['intership']}`, UPDATE_INTERSHIP);

export const getIntership = makeGet(`${ROUTES['intership']}`, GET_INTERSHIP, setInterships);

export const makeIntership = (data, __, formattedData) => async (dispatch) => {
    await dispatch(createInterships(formattedData));
    await dispatch(updateInterships(formattedData));

    dispatch(setInterships(data));
    return true;
};


