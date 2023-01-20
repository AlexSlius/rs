import FormEducation from "./FormEducation";
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"

const Education = () => {
   return (
      <>
         <HeadMainContent
            title={'Education'}
            description={"If you've graduated from, or are currently enrolled in a college or university, you should NOT include your high school."}
         >
         </HeadMainContent>
         <FormEducation
            className={`row`}
            addText="Add one more education"
            updateText="Add one more education"
            buttonClassName="mt-4"
         />
      </>
   )
}

export default Education;