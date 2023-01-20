import { formatDate } from "../../../utils";
import {
   CCol,
   CRow
} from "@coreui/react";
import { isArray } from "lodash";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd-next"

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
   updateItemFieldCourse,
   updateItemFieldCourseDate,
} from "../../../slices/courses";

import {
   functionFetchCourses,
   fetchPostAddCvOneCourses,
   fetchDeleteCourses,
   fetchUpdateCourses,
} from "../../../controllers/courses";

const FormCourse = ({
   dispatch,
   storeDate
}) => {
   const refIdTimeout = React.useRef(undefined);
   const idCv = localStorageGet('idCv');

   const {
      courses: {
         courseObj,
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
         courseObj,
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
         await dispatch((fetchUpdateCourses({ index })));
         clearTimeout(refIdTimeout.current);
      }, 1000);
   }

   const handleSaveSelect = async ({ index, name, value }) => {
      await dispatch(updateItemFieldCourse({ index, name, value }));
      await handleUpdateServer(index);
   }

   const handleSetDateStateData = async (index, name, date) => {
      await dispatch(updateItemFieldCourseDate({ index, name, value: date?.toString() }));
      await handleUpdateServer(index);
   }

   const handleDeleteOne = (id) => {
      dispatch(fetchDeleteCourses({ idCv, id }));
   }

   const handleAddOne = () => {
      dispatch(fetchPostAddCvOneCourses({ idCv }));
   }

   React.useEffect(() => {
      functionFetchCourses({ dispatch, isPage: true, idCv });
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
                                    isArray(courseObj) && courseObj.map((item, index) => (
                                       <Draggable
                                          key={item.id}
                                          draggableId={String(item.id)}
                                          index={index}
                                       >
                                          {
                                             (provided, snapshot) => (
                                                <DraggedItem
                                                   lenght={courseObj.length}
                                                   provided={provided}
                                                   key={item.id}
                                                   title={item.title}
                                                   index={index}
                                                   onDelete={() => handleDeleteOne(item.id)}
                                                   skillsList={[
                                                      `${formatDate(item?.dateFrom?.date)} - ${formatDate(
                                                         item?.dateTo?.date
                                                      )}`,
                                                      item.institution
                                                   ]}
                                                >
                                                   <CRow className="row g-30 r-gap-30 mt-4">
                                                      <CCol xs={6}>
                                                         <InputSelect
                                                            label="Course title"
                                                            placeholder="Course title"
                                                            valueState={item?.title || ""}
                                                            name="title"
                                                            handleSaveSelect={(obj) => handleSaveSelect({ index, ...obj })}
                                                            isOutDataObj={false}
                                                            isModal={false}
                                                         />
                                                      </CCol>
                                                      <CCol xs={6}>
                                                         <InputSelect
                                                            label="Institution"
                                                            placeholder="Institution"
                                                            valueState={item?.institution || ""}
                                                            name="institution"
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
                  text={'Add one more course'}
               />
            </CCol>
            <CCol className="mt-4">
               <ButtonSteps isAthorized={isAthorized} />
            </CCol>
         </CRow>
      </>
   )
}

export default FormCourse;

