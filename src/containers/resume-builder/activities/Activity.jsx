import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormActivity from "./FormActivity";
import { useSelector, useDispatch } from "react-redux";

const Activity = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'Extra-curricular activities'}
         >
         </HeadMainContent>
         <FormActivity
            dispatch={dispatch}
            storeDate={states}
            addText="Add one more activity"
            updateText="Add one more activity"
            buttonClassName="gap-4 d-flex mt-4"
         />
      </>
   )
}

export default Activity;