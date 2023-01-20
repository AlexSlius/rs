import { getBasicContact } from "./contacts"
import { fetchGetCvEmployments } from "./employments"
import { fetchGetCvEducations } from "./educations"
import { fetchGetSkillslistAll } from "./skills"
import { fetchGetAllLinks } from "./socials"
import { fetchGetCvHobie } from "./hobies"
import { fetchGetCvActivitys } from "./activitys"
import { fetchGetCvCourses } from "./courses"
import { fetchGetCvInternships } from "./interships"
import { fetchGetCvLanguages } from "./languages"
import { fetchGetCvReferences } from "./references";
import { fetchGetCvCertificates } from "./certificaties"

export const getAllResumeBuildre = async ({ store, idCv }) => {
    await store.dispatch(getBasicContact(idCv));
    await store.dispatch(fetchGetCvEmployments({ idCv }));
    await store.dispatch(fetchGetCvEducations({ idCv }));
    await store.dispatch(fetchGetSkillslistAll(idCv));
    await store.dispatch(fetchGetAllLinks({ idCv }));
    await store.dispatch(fetchGetCvHobie({ idCv }));
    await store.dispatch(fetchGetCvActivitys({ idCv }));
    await store.dispatch(fetchGetCvCourses({ idCv }));
    await store.dispatch(fetchGetCvInternships({ idCv }));
    await store.dispatch(fetchGetCvLanguages({ idCv }));
    await store.dispatch(fetchGetCvReferences({ idCv }));
    await store.dispatch(fetchGetCvCertificates({ idCv }));
}