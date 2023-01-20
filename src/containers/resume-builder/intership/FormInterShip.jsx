import { formatDate } from "../../../utils";
import {
   CCol,
   CRow
} from "@coreui/react";
import { isArray } from "lodash";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd-next"

import Textarea from "../../../components/uis/textarea/TextArea";
import AddButton from "../../../components/uis/addButton/AddButton";
import DraggedItem from "../../../other/draggedItem/DraggedItem";
import { DatePicker } from "../../../components/uis/datePicker";
import { InputSelect } from "../../../components/uis/inputSelect"
import { LoadWr } from "../../../components/loadWr"
import { isLoader } from "../../../helpers/loadings"
import { localStorageGet } from "../../../helpers/localStorage";
import { reorder } from '../../../helpers/drageDrop';
import { ButtonSteps } from "../../../components/buttonSteps"

import {
   updateItemFieldIntership,
   updateItemFieldIntershipDate,
} from "../../../slices/intersnhips";

import {
   functionFetchInterships,
   fetchPostAddCvOneInternships,
   fetchDeleteInternships,
   fetchUpdateInternships
} from "../../../controllers/interships";

const FormInterShip = ({
   dispatch,
   storeDate
}) => {
   const refIdTimeout = React.useRef(undefined);
   const idCv = localStorageGet('idCv');

   const {
      interships: {
         interhipObj,
         status
      },
      auth: {
         autorizate: {
            isAthorized
         }
      },
   } = storeDate;

   const onDragEnd = (result) => {
      if (!result.destination) {
         return;
      }

      const items = reorder(
         interhipObj,
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
         await dispatch((fetchUpdateInternships({ index })));
         clearTimeout(refIdTimeout.current);
      }, 1000);
   }

   const handleSaveSelect = async ({ index, name, value }) => {
      await dispatch(updateItemFieldIntership({ index, name, value }));
      await handleUpdateServer(index);
   }

   const handleSetDateStateData = async (index, name, date) => {
      await dispatch(updateItemFieldIntershipDate({ index, name, value: date?.toString() }));
      await handleUpdateServer(index);
   }

   const handleDeleteOne = (id) => {
      dispatch(fetchDeleteInternships({ idCv, id }));
   }

   const handleAddOne = () => {
      dispatch(fetchPostAddCvOneInternships({ idCv }));
   }

   React.useEffect(() => {
      functionFetchInterships({ dispatch, isPage: true, idCv });
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
                                    isArray(interhipObj) && interhipObj.map((item, index) => (
                                       <Draggable
                                          key={item.id}
                                          draggableId={String(item.id)}
                                          index={index}
                                       >
                                          {
                                             (provided, snapshot) => (
                                                <DraggedItem
                                                   lenght={interhipObj.length}
                                                   provided={provided}
                                                   key={item.id}
                                                   title={item.job_title}
                                                   index={index}
                                                   onDelete={() => handleDeleteOne(item.id)}
                                                   skillsList={[
                                                      `${formatDate(item?.dateFrom?.date)} - ${formatDate(
                                                         item?.dateTo?.date
                                                      )}`,
                                                      item?.employer
                                                   ]}
                                                >
                                                   <CRow className="row g-30 r-gap-30 mt-4">
                                                      <CCol xs={6}>
                                                         <InputSelect
                                                            label="Job title"
                                                            placeholder="Job title"
                                                            valueState={item?.job_title || ""}
                                                            name="job_title"
                                                            handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                                                            isOutDataObj={false}
                                                            isModal={false}
                                                         />
                                                      </CCol>
                                                      <CCol xs={6}>
                                                         <InputSelect
                                                            label="Employer"
                                                            placeholder="Employer"
                                                            valueState={item?.employer || ""}
                                                            name="employer"
                                                            handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                                                            isOutDataObj={false}
                                                            isModal={false}
                                                         />
                                                      </CCol>
                                                      <CCol xs={6}>
                                                         <CRow>
                                                            <CCol xs={6}>
                                                               <DatePicker
                                                                  selected={item?.dateFrom?.date ? new Date(item?.dateFrom?.date) : item?.dateFrom?.date}
                                                                  onChange={(date) => handleSetDateStateData(index, 'dateFrom', date)}
                                                                  floatingLabel="From"
                                                                  placeholderText="From"
                                                                  name="dateFrom"
                                                                  calendarClassName="custom-datepicker"
                                                                  wrapperClassName="custom-datepicker-wrapper"
                                                                  dateFormat="MMM, yyyy"
                                                                  showMonthYearPicker
                                                                  showPopperArrow={false}
                                                                  useShortMonthInDropdown={true}
                                                               />
                                                            </CCol>
                                                            <CCol xs={6}>
                                                               <DatePicker
                                                                  selected={item?.dateTo?.date ? new Date(item?.dateTo?.date) : item?.dateTo?.date}
                                                                  onChange={(date) => handleSetDateStateData(index, 'dateTo', date)}
                                                                  floatingLabel="To"
                                                                  placeholderText="To"
                                                                  name="dateTo"
                                                                  calendarClassName="custom-datepicker"
                                                                  wrapperClassName="custom-datepicker-wrapper"
                                                                  dateFormat="MMM, yyyy"
                                                                  showMonthYearPicker
                                                                  showPopperArrow={false}
                                                                  useShortMonthInDropdown={true}
                                                               />
                                                            </CCol>
                                                         </CRow>
                                                      </CCol>
                                                      <CCol xs={6}>
                                                         <InputSelect
                                                            label="City"
                                                            placeholder="City"
                                                            alueState={item.city || ""}
                                                            name="city"
                                                            isAddDiv={true}
                                                            // data={studys.list}
                                                            // isLoad={isLoader(studys?.status)}
                                                            // handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                                                            // handleServerRequest={() => getSearchListStudys(item.study)}
                                                            isOutDataObj={false}
                                                            isFirstList={false}
                                                         />
                                                      </CCol>
                                                      <CCol xs={12}>
                                                         <Textarea
                                                            value={item.description}
                                                            onChange={(e) => handleSaveSelect({ index, name: e.target.name, value: e.target.value })}
                                                            hideButton={true}
                                                            name="description"
                                                            placeholder={'Description of activity'}
                                                         />
                                                      </CCol>
                                                   </CRow>
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
                  text={'Add one more internship'}
               />
            </CCol>
            <CCol className="mt-4">
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormInterShip;