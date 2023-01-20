import { slice } from '../slices/app';
import { getActivity } from './activity';
import { getCertificaties } from './certificaties';
import { getContact } from './contact';
import { getCourse } from './course';
import { getEducation } from './education';
import { getEmployment } from './employment';
import { getHobies } from './hobies';
import { getIntership } from './intership';
import { getLanguages } from './languages';
import { getReference } from './reference';
import { getSkills } from './skills';
import { getSocials } from './socials';
import { setLoading } from '../slices/app';
import { getCountry } from './country';



export const getLoading = (params) => (dispatch) => {
    dispatch(slice.actions.getLoginLoading(params.isLoginLoading));
};


export const getAppData = () => async (dispatch) => {
    await dispatch(setLoading(true));
    await dispatch(getContact());
    await Promise.all([
         dispatch(getActivity()),
         dispatch(getCertificaties()),
         dispatch(getCourse()),
         dispatch(getEducation()),
         dispatch(getEmployment()),
         dispatch(getHobies()),
         dispatch(getIntership()),
         dispatch(getLanguages()),
         dispatch(getReference()),
         dispatch(getSkills()),
         dispatch(getSocials()),
         dispatch(getCountry())
    ]);

    await dispatch(setLoading(false));
}

     