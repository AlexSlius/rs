import {
   CCol,
   CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import ModifyItems from './ModifyItems';
import { InputSelect } from "../../../components/uis/inputSelect"
import InputSearch from "../../../components/uis/inputSearch";
import { fetchGetSkillsPosition } from "../../../controllers/dependencies";
import { updateItemSkillsFiled } from "../../../slices/skills";
import { isLoader } from "../../../helpers/loadings"
import { ButtonSteps } from "../../../components/buttonSteps"
import {
   fetchGetSkillslistWork,
   fetchGetSkillslistSearch,
   fetchPostAddSkillone,
   fetchPostUpdateSkillone,
   fetchPostDeleteSkillOne,
   fetchGetSkillslistAll
} from "../../../controllers/skills";
import { LoadBlock } from "../../../components/loadBlock";
import { ActiveItemSkillsAndStarts } from "./ActiveItemSkillsAndStarts";
import { localStorageGet } from "../../../helpers/localStorage";
import { isArray } from "lodash";
import { LoadWr } from "../../../components/loadWr";

const FormSkill = ({ visibleRating }) => {
   const dispatch = useDispatch();
   const {
      skills: {
         skillsObj,
         statusIsListSkills,
         statusListSkillsAll
      },
      dependencies: {
         skillsPositions,
      },
      auth: {
         autorizate: {
            isAthorized
         }
      },
   } = useSelector(state => state);
   const idCv = localStorageGet('idCv');

   const updateitemFiled = ({ name, value, isClisk }) => {
      dispatch(updateItemSkillsFiled({ name, value }));

      if (isClisk) {
         switch (name) {
            case "selectd_work": {
               dispatch(fetchGetSkillslistWork(value));
               break;
            }
         }
      }
   }

   const handleGetSkillsPos = async () => {
      updateitemFiled({ name: "searchSkils", value: '' });
      await dispatch(fetchGetSkillsPosition(skillsObj?.selectd_work));
   }

   const randomSearchSkills = async () => {
      updateitemFiled({ name: "selectd_work", value: '' });
      await dispatch(fetchGetSkillslistSearch(skillsObj?.searchSkils));
   }

   const handleAddItemSkillOne = async (idSkill, text) => {
      await dispatch(fetchPostAddSkillone({ idCv, data: { name: text, level: 5, skill_id: idSkill } }));
   }

   const handleUpdateItemSkillOne = async (id, data) => {
      await dispatch(fetchPostUpdateSkillone({ idCv, id, data }));
   }

   const handleDeleteItemSkill = (id) => {
      dispatch(fetchPostDeleteSkillOne({ idCv, id }));
   }

   const handleClickDeleteItem = (id) => {
      if (isArray(skillsObj.skillsListAll)) {
         let result = skillsObj.skillsListAll.find((el) => id == el.skillId)
         handleDeleteItemSkill(result.id);
      }
   }

   React.useEffect(() => {
      dispatch(fetchGetSkillslistAll(idCv));
   }, []);

   return (
      <>
         <CRow className="g-30 r-gap-30">
            <CCol className="gap-3" xs={6}>
               <CRow>
                  <CCol className="mb-4" xs={12}>
                     <InputSelect
                        label="Selected work"
                        placeholder="Selected work"
                        valueState={skillsObj?.selectd_work || ""}
                        name="selectd_work"
                        data={skillsPositions.list}
                        isLoad={isLoader(skillsPositions?.status)}
                        handleSaveSelect={updateitemFiled}
                        handleServerRequest={handleGetSkillsPos}
                        isOutDataObj={false}
                        isFirstList={false}
                        isIconArrow={true}
                        keyName="position"
                        keyText="position"
                     />
                  </CCol>
                  <CCol className="mb-4" xs={12}>
                     <InputSearch
                        placeholder="Search skill"
                        floatingLabel="Search skill"
                        value={skillsObj?.searchSkils}
                        onChange={(e) => updateitemFiled({ name: "searchSkils", value: e.target.value })}
                        handleServerRequest={randomSearchSkills}
                     />
                  </CCol>
                  <CCol xs={12}>
                     {
                        isLoader(statusIsListSkills) ? (
                           <LoadBlock />
                        ) : (
                           <ModifyItems
                              arr={skillsObj?.skillsList}
                              arrActive={skillsObj?.skillsListAll}
                              handleClick={handleAddItemSkillOne}
                              handleClickDelete={handleClickDeleteItem}
                           />
                        )
                     }
                  </CCol>
               </CRow>
            </CCol >
            <CCol xs={6}>
               <LoadWr isLoad={isLoader(statusListSkillsAll)}>
                  {
                     isArray(skillsObj?.skillsListAll) && (
                        <div className="skills-items-level">
                           {
                              skillsObj.skillsListAll.map((item, index) => (
                                 <ActiveItemSkillsAndStarts
                                    key={item.id}
                                    id={item.id}
                                    label={item.name}
                                    onDelete={handleDeleteItemSkill}
                                    ratingChanged={handleUpdateItemSkillOne}
                                    valueStats={item.level}
                                 />
                              ))
                           }
                        </div>
                     )
                  }
               </LoadWr>
            </CCol>
         </CRow>
         <CRow className="mt-4">
            <CCol>
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormSkill;