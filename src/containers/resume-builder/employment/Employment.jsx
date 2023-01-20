import FormEmployment from "./FormEmployment";
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import { useSelector } from "react-redux";
import uuid from "react-uuid";

const initialState = {
   title: "",
   period_from: null,
   period_to: null,
   country: "",
   company: "",
   assignment: "",
   id: uuid()
};

const Employment = () => {
   const employments = useSelector((state) => state.employment.employments);
   const loading = useSelector((state) => state.app.loading);
   // const country = useSelector((state) => state.country?.countrys);

   // if (loading) {
   //    return null
   // }

   return (
      <>
         <HeadMainContent
            title={'Employment History'}
         />
         <FormEmployment
            valuesFromStore={employments}
            className={`row`}
            initialState={initialState}
            addText="Add one more employment"
            updateText="Add one more employment"
            // countries={country}
            buttonClassName="mt-4"
         />
      </>
   )
}

export default Employment;