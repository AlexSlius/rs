import {
   CContainer,
   CRow,
   CCol
} from "@coreui/react"
import SideBar from "../../components/sideBar/SideBar"
import Resume from "../../components/resume/Resume"

import style from "./AdminPage.module.scss"

const AdminPage = ({ children }) => {
   return (
      <CContainer fluid className={`${style.container_admin}`}>
         <CRow className="row-main">
            <SideBar />
            <CCol className={`${style.main_content} main-content`}>
               {children}
            </CCol>
            <Resume />
         </CRow>

      </CContainer>
   )
}
export default AdminPage;