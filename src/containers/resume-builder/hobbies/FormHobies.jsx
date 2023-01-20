import {
   CCol,
   CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { isArray } from "lodash";

import { isLoader } from "../../../helpers/loadings"
import { LoadWr } from "../../../components/loadWr"
import { localStorageGet } from "../../../helpers/localStorage";
import { InputSelect } from "../../../components/uis/inputSelect"
import { ButtonSteps } from "../../../components/buttonSteps"
import { fetchGetHobies } from "../../../controllers/dependencies";
import { updateItemHobiesFiledNew } from "../../../slices/hobies";
import {
   fetchPostAddCvHobie,
   fetchDeleteHobie,
   fetchGetCvHobie
} from "../../../controllers/hobies";
import { ItemDragDrop } from "../../../components/ItemDragDrop";

const FormHobies = () => {
   const dispatch = useDispatch();
   const {
      dependencies: {
         hobies,
      },
      hobies: {
         hobiesObj,
         hobieObjNew,
         statusList
      },
      auth: {
         autorizate: {
            isAthorized
         }
      },
   } = useSelector(state => state);
   const idCv = localStorageGet('idCv');

   const handleGetHobiesList = (data) => {
      dispatch(fetchGetHobies(data));
   }

   const updateitemFiledNew = ({ name, value, isClisk }, data) => {
      dispatch(updateItemHobiesFiledNew({ name, value }));

      if (isClisk) {
         dispatch(fetchPostAddCvHobie({ idCv, data: { [name]: value, id: data.id } }));
         dispatch(updateItemHobiesFiledNew({ name, value: '' }));
      }
   }

   const onDeleteItemHobies = (id) => {
      dispatch(fetchDeleteHobie({ idCv, id }));
   }

   React.useEffect(() => {
      dispatch(fetchGetCvHobie({ idCv }));
   }, []);

   return (
      <>
         <LoadWr isLoad={isLoader(statusList)}>
            <CRow className="g-30">
               {
                  isArray(hobiesObj) && hobiesObj.map((item, index) => (
                     <CCol
                        key={index}
                        xs={6}
                        className="mb-4"
                     >
                        <ItemDragDrop
                           id={item?.id}
                           label={item?.text}
                           onDelete={onDeleteItemHobies}
                        />
                     </CCol>
                  ))
               }
               <CCol xs={6} className="mb-4">
                  <InputSelect
                     placeholder="Search hobby"
                     valueState={hobieObjNew.text || ""}
                     name="text"
                     data={hobies.list}
                     isLoad={isLoader(hobies?.status)}
                     handleSaveSelect={updateitemFiledNew}
                     handleServerRequest={handleGetHobiesList}
                     isOutDataObj={false}
                     isFirstList={false}
                  />
               </CCol>
            </CRow>
         </LoadWr>
         <CRow className="mt-4">
            <CCol>
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormHobies;