
import {
   CCol,
   CRow,
   CFormCheck
} from "@coreui/react";
import { useState, useRef, useEffect, Fragment } from 'react';
import uuid from "react-uuid";
import { isArray } from "lodash";
import { localStorageGet } from "../../../helpers/localStorage";
import AddButton from "../../../components/uis/addButton/AddButton"
import { ButtonSteps } from "../../../components/buttonSteps"
import { InputSelect } from "../../../components/uis/inputSelect"
import { isLoader } from "../../../helpers/loadings"
import { LoadWr } from "../../../components/loadWr"

import {
   functionFetchLanguages,
   fetchPostAddCvOneLanguages,
   fetchDeleteLanguages,
   fetchUpdateLanguages
} from "../../../controllers/languages";
import { updateItemLanguageFiled } from "../../../slices/languages";
import { ButtonDeleteItem } from "../../../components/uis/buttonDelete";

const FormLanguages = ({
   dispatch,
   storeDate
}) => {
   const {
      dependencies: {
         language
      },
      languages: {
         languageObj,
         status
      },
      auth: {
         autorizate: {
            isAthorized
         }
      },
   } = storeDate;
   const idCv = localStorageGet('idCv');
   const refIdTimeout = useRef(undefined);

   const handleSaveSelect = async ({ index, name, value }) => {
      await dispatch(updateItemLanguageFiled({ index, name, value }));
      await handleUpdateServer(index);
   }

   const handleUpdateServer = async (index) => {
      if (refIdTimeout.current) {
         clearTimeout(refIdTimeout.current);
      }

      refIdTimeout.current = setTimeout(async () => {
         await dispatch((fetchUpdateLanguages({ index })));
         clearTimeout(refIdTimeout.current);
      }, 500);
   }

   const handleAddOne = () => {
      dispatch(fetchPostAddCvOneLanguages({ idCv }));
   }

   const handDeleteitem = (id) => {
      dispatch(fetchDeleteLanguages({ idCv, id }))
   }

   useEffect(() => {
      functionFetchLanguages({ dispatch, isPage: true, idCv });
   }, []);

   return (
      <>
         <LoadWr isLoad={isLoader(status)}>
            {
               isArray(languageObj) && languageObj.map((item, index) => (
                  <div className="rows-lan mt-4">
                     <CRow key={item.id} className="g-30 r-gap-30 flex-auto">
                        <CCol xs={6}>
                           <InputSelect
                              label="Language"
                              placeholder="Language"
                              valueState={item.language || ""}
                              name="language"
                              // data={language.list}
                              // isLoad={isLoader(language?.status)}
                              handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                              // handleServerRequest={handleGetHobiesList}
                              isOutDataObj={false}
                              isFirstList={false}
                              isModal={false}
                           />
                        </CCol>
                        <CCol xs={6}>
                           <div className="items-level">
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 1 })} checked={!!(item.level == 1)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="A1" />
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 2 })} checked={!!(item.level == 2)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="A2" />
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 3 })} checked={!!(item.level == 3)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="B2" />
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 4 })} checked={!!(item.level == 4)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="B3" />
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 5 })} checked={!!(item.level == 5)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="B4" />
                              <CFormCheck onChange={() => handleSaveSelect({ index: index, name: 'level', value: 6 })} checked={!!(item.level == 6)} button={{ color: 'secondary' }} type="radio" id={uuid()} name={`level${index}`} autoComplete="off" label="B5" />
                           </div>
                        </CCol>
                     </CRow>
                     {
                        (languageObj.length > 1) && (
                           <div className="btn-wr-ite">
                              <ButtonDeleteItem onDelete={() => handDeleteitem(item.id)} />
                           </div>
                        )
                     }
                  </div>
               ))
            }
         </LoadWr>
         <CRow className="mt-4">
            <CCol xs={12}>
               <AddButton
                  onClick={handleAddOne}
                  text={'Add one more language'}
               />
            </CCol>
            <CCol className="mt-4">
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormLanguages;