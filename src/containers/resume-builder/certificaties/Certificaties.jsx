import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormCertificaties from "./FormCertificaties";
import { useSelector, useDispatch } from "react-redux";

const Certificaties = () => {
   const dispatch = useDispatch();
   const states = useSelector((state) => state);

   return (
      <>
         <HeadMainContent
            title={'Certificates'}
            description={'Enter your licenses or certifications one at a time.'}
         >
         </HeadMainContent>
         <FormCertificaties
            dispatch={dispatch}
            storeDate={states}
         />
      </>
   )
}

export default Certificaties;