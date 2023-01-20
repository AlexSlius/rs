import { ADD_COURSE, UPDATE_COURSE, GET_COURSE } from '../constants/apiEndpoints';
import { setCourses } from '../slices/course';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createCourses = makeCreate(`${ROUTES['course']}`, ADD_COURSE);
const updateCourses = makeUpdate(`${ROUTES['course']}`, UPDATE_COURSE);

export const getCourse = makeGet(`${ROUTES['course']}`, GET_COURSE, setCourses);

export const makeCourse = (data, __, formattedData) => async (dispatch) => {
    await dispatch(createCourses(formattedData));
    await dispatch(updateCourses(formattedData));

    dispatch(setCourses(data));
    return true;
};


