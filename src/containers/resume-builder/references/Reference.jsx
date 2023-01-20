import { useSelector, useDispatch } from "react-redux";
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormReference from "./FormReference";

const Reference = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'References'}
         >
         </HeadMainContent>
         <FormReference
            dispatch={dispatch}
            storeDate={states}
         />
      </>
   )
}

export default Reference;