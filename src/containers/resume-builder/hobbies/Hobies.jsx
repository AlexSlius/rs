
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormHobies from "./FormHobies";

const Hobies = () => {
   return (
      <>
         <HeadMainContent
            title={'Hobbies'}
            description={'What do you like?'}
         >
         </HeadMainContent>
         <FormHobies
            className={`row r-gap-30`}
            buttonClassName="gap-4 d-flex"
         />
      </>
   )
}

export default Hobies;