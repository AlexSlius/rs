import { useState } from "react";
import { useSelector } from "react-redux";
import HeadMainContent from "../../../components/headMainContent/HeadMainContent"
import FormSkill from './FormSkill.jsx'
import { Switch } from "../../../components/uis/switch";

const Skills = () => {
   const [visibleRating, setVisibleRating] = useState(true);
   const skills = useSelector((state) => state.skills.skillss);

   const changeSwitch = (value) => {
      setVisibleRating(!value);
   }

   return (
      <>
         <HeadMainContent
            title={'Skills'}
            description={"Try to add 5-10 skills that are most relevant to your desired job."}
            switchOk={"Don't show experience level"}
            changeSwitch={changeSwitch}
         >
            <Switch
               label="Don't show experience level"
            // isChecked={false}
            // handleOnChange={}
            />
         </HeadMainContent>
         <FormSkill
            className={`row r-gap-30`}
            buttonClassName="gap-4 d-flex"
         />
      </>
   )
}
export default Skills;