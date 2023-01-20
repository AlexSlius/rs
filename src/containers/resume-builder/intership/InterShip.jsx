import FormInterShip from "./FormInterShip"
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import { useSelector, useDispatch } from "react-redux";

const InterShip = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'Internship'}
         >
         </HeadMainContent>
         <FormInterShip
            dispatch={dispatch}
            storeDate={states}
            addText="Add one more internship"
            updateText="Add one more internship"
            buttonClassName="gap-4 d-flex mt-4"
         />
      </>
   )
}

export default InterShip;