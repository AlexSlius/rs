import { ADD_HOBIE, GET_HOBIE } from '../constants/apiEndpoints';
import { setHobiess } from '../slices/hobies';
import { makeCreate, makeGet, makeUpdate } from './helpers';
import { ROUTES } from '../constants/routes';



const createHobiess = makeCreate(`${ROUTES['hobies']}`, ADD_HOBIE);
const updateHobiess = makeUpdate(`${ROUTES['hobies']}`, ADD_HOBIE);

export const getHobies = makeGet(`${ROUTES['hobies']}`, GET_HOBIE, setHobiess);

export const makeHobies = (data) => async (dispatch, getState) => {
    await dispatch(createHobiess(data));
    await dispatch(updateHobiess(data));

    dispatch(setHobiess(data));
    return true;
};


