import { ADD_CERTIFICATIES, UPDATE_CERTIFICATIES, GET_CERTIFICATIES } from '../constants/apiEndpoints';
import { setCertificatiess } from '../slices/certificaties';
import { makeCreate, makeGet, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';



const createCertificatiess = makeCreate(`${ROUTES['certificaties']}`, ADD_CERTIFICATIES);
const updateCertificatiess = makeUpdate(`${ROUTES['certificaties']}`, UPDATE_CERTIFICATIES);

export const getCertificaties = makeGet(`${ROUTES['certificaties']}`, GET_CERTIFICATIES, setCertificatiess);

export const makeCertificaties = (data) => async (dispatch, getState) => {
    await dispatch(createCertificatiess(data));
    await dispatch(updateCertificatiess(data));

    dispatch(setCertificatiess(data));
    return true;
};


