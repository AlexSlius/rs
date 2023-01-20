import { ADD_REFERENCE, UPDATE_REFERENCE, GET_REFERENCE } from '../constants/apiEndpoints';
import { setReferences } from '../slices/reference';
import { makeCreate, makeGet, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';



const createReferences = makeCreate(`${ROUTES['reference']}`, ADD_REFERENCE);
const updateReferences = makeUpdate(`${ROUTES['reference']}`, UPDATE_REFERENCE);

export const getReference = makeGet(`${ROUTES['reference']}`, GET_REFERENCE, setReferences);

export const makeReference = (data) => async (dispatch) => {
    await dispatch(createReferences(data));
    await dispatch(updateReferences(data));

    dispatch(setReferences(data));
    return true;
};


