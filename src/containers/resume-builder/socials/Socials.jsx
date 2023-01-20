import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormSocials from "./FormSocials";

const Socials = () => {
   return (
      <>
         <HeadMainContent
            title={'Social Links'}
            description={`You can add links to websites you want hiring managers to see!  
            \nPerhaps It will be a link to your portfolio, LinkedIn profile, or personal website`}
         >
         </HeadMainContent>
         <FormSocials
            className={`row r-gap-30`}
            buttonClassName="gap-4 d-flex"
         />
      </>
   )
}

export default Socials;