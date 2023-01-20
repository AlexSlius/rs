import { ADD_SOCIALS, UPDATE_SOCIALS, GET_SOCIALS } from '../constants/apiEndpoints';
import { setSocialss } from '../slices/socials';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createSocialss = makeCreate(`${ROUTES['socials']}`, ADD_SOCIALS);
const updateSocialss = makeUpdate(`${ROUTES['socials']}`, UPDATE_SOCIALS);
export const getSocials = makeGet(`${ROUTES['socials']}`, GET_SOCIALS, setSocialss);


export const makeSocials = (data) => async (dispatch) => {
    await dispatch(createSocialss(data));
    await dispatch(updateSocialss(data));

    dispatch(setSocialss(data));
    return true;
};


