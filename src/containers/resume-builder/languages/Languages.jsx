import { useSelector, useDispatch } from "react-redux";
import FormLanguages from "./FormLanguages";
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"

const Languages = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'Languages'}
         >
         </HeadMainContent>
         <FormLanguages
            dispatch={dispatch}
            storeDate={states}
         />
      </>
   )
}

export default Languages;