import { ADD_LANGUAGES, UPDATE_LANGUAGES, GET_LANGUAGES } from '../constants/apiEndpoints';
import { setLanguagess } from '../slices/languages';
import { makeCreate, makeGet, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';



const createLanguagess = makeCreate(`${ROUTES['languages']}`, ADD_LANGUAGES);
const updateLanguagess = makeUpdate(`${ROUTES['languages']}`, UPDATE_LANGUAGES);

export const getLanguages = makeGet(`${ROUTES['languages']}`, GET_LANGUAGES, setLanguagess);

export const makeLanguages = (data) => async (dispatch, getState) => {
    await dispatch(createLanguagess(data));
    await dispatch(updateLanguagess(data));

    dispatch(setLanguagess(data));
    return true;
};


