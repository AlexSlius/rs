import { ADD_EDUCATION, UPDATE_EDUCATION, GET_EDUCATION } from '../constants/apiEndpoints';
import { setEducations } from '../slices/education';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createEducations = makeCreate(`${ROUTES['education']}`, ADD_EDUCATION);
const updateEducations = makeUpdate(`${ROUTES['education']}`, UPDATE_EDUCATION);
export const getEducation = makeGet(`${ROUTES['education']}`, GET_EDUCATION, setEducations);


export const makeEducation = (data, __, formattedData) => async (dispatch) => {
    await dispatch(createEducations(formattedData));
    await dispatch(updateEducations(formattedData));

    dispatch(setEducations(data));
    return true;
};


