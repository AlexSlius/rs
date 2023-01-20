import { CButton } from '@coreui/react'
import { useSelector } from 'react-redux'

import Icon from "../../../components/Icon"

import templateIcon from '/public/images/icons/select.svg?sprite'
import downloadIcon from '/public/images/icons/download.svg?sprite'
import dotsIcon from '/public/images/icons/dots.svg?sprite'

const ResumeFooter = () => {
   const {
      auth: {
         autorizate: {
            isAthorized,
         }
      },
   } = useSelector((state) => state);

   return (
      <div className="resume-footer d-flex gap-3 justify-content-between py-3">
         <div className="resume-footer__left">
            <CButton className='resume-footer__button' color="secondary" variant="outline">
               <Icon svg={templateIcon} classNames={['icon-20']} />
               Select template
            </CButton>
         </div>
         <div className="resume-footer__right d-flex gap-3">
            <CButton
               className='resume-footer__button'
               color="secondary" variant="outline"
               disabled={!isAthorized}
            >
               <Icon svg={downloadIcon} classNames={['icon-20']} />
               Download PDF
            </CButton>
            <CButton
               className='resume-footer__button'
               color="secondary"
               variant="outline"
               disabled={!isAthorized}
            >
               <Icon svg={dotsIcon} classNames={['icon-20']} />
            </CButton>
         </div>
      </div>
   )
}
export default ResumeFooter;