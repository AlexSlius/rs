import { ADD_SKILLS, UPDATE_SKILLS, GET_SKILLS } from '../constants/apiEndpoints';
import { setSkillss } from '../slices/skills';
import { makeCreate, makeUpdate, makeGet } from './helpers';
import { ROUTES } from '../constants/routes';


const createSkillss = makeCreate(`${ROUTES['skills']}`, ADD_SKILLS);
const updateSkillss = makeUpdate(`${ROUTES['skills']}`, UPDATE_SKILLS);
export const getSkills = makeGet(`${ROUTES['skills']}`, GET_SKILLS, setSkillss);


export const makeSkills = (data) => async (dispatch) => {
    await dispatch(createSkillss(data));
    await dispatch(updateSkillss(data));

    dispatch(setSkillss(data));
    return true;
};


