import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormCourse from "./FormCourse";
import { useSelector, useDispatch } from "react-redux";

const Course = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'Courses'}
         >
         </HeadMainContent>
         <FormCourse
            dispatch={dispatch}
            storeDate={states}
            addText="Add one more course"
            updateText="Add one more course"
            buttonClassName="gap-4 d-flex mt-4"
         />
      </>
   )
}

export default Course;