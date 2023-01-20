import FormContact from "./FormContact"
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"

const Contact = () => {
   return (
      <>
         <HeadMainContent
            title={'Contact Section'}
            description={'This information will be placed at the top of your resume.'}
         />
         <FormContact />
      </>
   )
}

export default Contact;