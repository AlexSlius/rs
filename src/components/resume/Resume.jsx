import ResumeHead from './resumeHead/ResumeHead'
import ResumeMain from './resumeMain/ResumeMain'
import ResumeFooter from './resumeFooter/ResumeFooter'
import { CCol } from '@coreui/react';

const Resume = () => {
   return (
      <CCol className='resume'>
         <ResumeHead />
         <ResumeMain />
         <ResumeFooter />
      </CCol>
   )
}
export default Resume;