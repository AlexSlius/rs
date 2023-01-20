import {
   CCol,
   CRow,
   CForm
} from "@coreui/react";
import { useEffect, useRef } from 'react';
import { isArray } from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd-next"

import { LoadWr } from "../../../components/loadWr"
import Input from "../../../components/uis/input"
import { InputSelect } from "../../../components/uis/inputSelect"
import AddButton from "../../../components/uis/addButton/AddButton";
import { ButtonSteps } from "../../../components/buttonSteps"
import DraggedItem from "../../../other/draggedItem/DraggedItem";
import { InputPhoneNoControler } from "../../../components/uis/inputPhoneNoControler"

import { isLoader } from "../../../helpers/loadings"
import { localStorageGet } from "../../../helpers/localStorage";
import { reorder } from '../../../helpers/drageDrop';

import {
   updateItemFieldReference,
} from "../../../slices/reference";

import {
   functionFetchReferences,
   fetchPostAddCvOneReferences,
   fetchDeleteReferences,
   fetchUpdateReferences
} from "../../../controllers/references";

import {
   getCompanyList,
} from '../../../controllers/dependencies';

const FormReference = ({
   dispatch,
   storeDate
}) => {
   const {
      dependencies: {
         companys,
      },
      references: {
         referencesObj,
         status,
      },
      auth: {
         autorizate: {
            isAthorized
         }
      },
   } = storeDate;
   const refIdTimeout = useRef(undefined);
   const idCv = localStorageGet('idCv');

   const onDragEnd = (result) => {
      if (!result.destination) {
         return;
      }

      const items = reorder(
         referencesObj,
         result.source.index,
         result.destination.index
      );

      // items.forEach((item, index) => {
      //   item.position = index;
      // })

      // console.log("items: ", items);

      // setStateArray(items);

      // new list, idStorie, idMedia
      // dispatch(updateDragDropStorie(items, idStorie, activeMediaStorie?.id));
   }

   const handleUpdateServer = async (index) => {
      if (refIdTimeout.current) {
         clearTimeout(refIdTimeout.current);
      }

      refIdTimeout.current = setTimeout(async () => {
         await dispatch((fetchUpdateReferences({ index })));
         clearTimeout(refIdTimeout.current);
      }, 1000);
   }

   const handleSaveSelect = async ({ index, name, value }) => {
      await dispatch(updateItemFieldReference({ index, name, value }));
      await handleUpdateServer(index);
   }

   const handleDeleteOne = (id) => {
      dispatch(fetchDeleteReferences({ idCv, id }));
   }

   const handleAddOne = () => {
      dispatch(fetchPostAddCvOneReferences({ idCv }));
   }

   const handleServerRequestCompanyList = async (text) => {
      await dispatch(getCompanyList(text)); // get all compay list
   }

   useEffect(() => {
      functionFetchReferences({ dispatch, isPage: true, idCv });
   }, []);

   return (
      <>
         <CRow>
            <CCol>
               <LoadWr isLoad={isLoader(status)}>
                  <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                     <Droppable droppableId="droppable">
                        {
                           (provided, snapshot) => (
                              <div
                                 ref={provided.innerRef}
                                 {...provided.droppableProps}
                              >
                                 {
                                    isArray(referencesObj) && referencesObj.map((item, index) => (
                                       <Draggable
                                          key={item.id}
                                          draggableId={String(item.id)}
                                          index={index}
                                       >
                                          {
                                             (provided, snapshot) => (
                                                <DraggedItem
                                                   isDraf={false}
                                                   lenght={referencesObj.length}
                                                   provided={provided}
                                                   key={item.id}
                                                   title={item.full_name}
                                                   index={index}
                                                   onDelete={() => handleDeleteOne(item.id)}
                                                   skillsList={[
                                                      item.email,
                                                      item.phone
                                                   ]}
                                                >
                                                   <CForm>
                                                      <CRow className="row g-30 r-gap-30 mt-4">
                                                         <CCol xs={6}>
                                                            <Input
                                                               id={item.id}
                                                               label="Referent Full name"
                                                               placeholder="Referent Full name"
                                                               value={item.full_name}
                                                               name="full_name"
                                                               onChange={(e) => handleSaveSelect({ index, name: e.target.name, value: e.target.value })}
                                                            />
                                                         </CCol>
                                                         <CCol xs={6}>
                                                            <InputSelect
                                                               label="Company"
                                                               placeholder="Company"
                                                               valueState={item.company}
                                                               data={companys?.list || []}
                                                               isAddDiv={true}
                                                               name="company"
                                                               isFirstList={false}
                                                               isLoad={isLoader(companys?.status)}
                                                               handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                                                               handleServerRequest={handleServerRequestCompanyList}
                                                               isOutDataObj={false}
                                                            />
                                                         </CCol>
                                                         <CCol xs={6}>
                                                            <Input
                                                               label="E-mail*"
                                                               placeholder="E-mail*"
                                                               value={item.email}
                                                               name="email"
                                                               invalid={(item.email.length > 0) && !(/\S+@\S+\.\S+/.test(item.email))}
                                                               valid={/\S+@\S+\.\S+/.test(item.email)}
                                                               onChange={(e) => handleSaveSelect({ index, name: e.target.name, value: e.target.value })}
                                                            />
                                                         </CCol>
                                                         <CCol xs={6}>
                                                            <InputPhoneNoControler
                                                               label="Phone"
                                                               placeholder="Phone"
                                                               onChange={(value) => handleSaveSelect({ index, name: "phone", value: value })}
                                                               value={item.phone}
                                                            />
                                                         </CCol>
                                                      </CRow>
                                                   </CForm>
                                                </DraggedItem>
                                             )
                                          }
                                       </Draggable>
                                    ))
                                 }
                                 {provided.placeholder}
                              </div>
                           )
                        }
                     </Droppable>
                  </DragDropContext>
               </LoadWr>
            </CCol>
         </CRow>
         <CRow className="mt-4">
            <CCol xs={12}>
               <AddButton
                  onClick={handleAddOne}
                  text={'Add one more reference'}
               />
            </CCol>
            <CCol className="mt-4">
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormReference;