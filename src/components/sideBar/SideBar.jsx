import {
   CSidebar,
   CSidebarNav,
   CNavItem,
} from "@coreui/react"

// import Link from "next/link"
import Link from "next/link"
import Icon from "../Icon"
import ActiveLink from "../Active-link"

import vars from "./varsStyle"
import style from './SideBar.module.scss'

import helpIcon from '/public/images/icons/chat.svg?sprite'
import { routerLinksAsideMenu } from "../../constants/next-routers"

const SideBar = () => {
   return (
      <CSidebar style={vars}>
         <Link href="/" className={`${style.nav_logo}`}>
            Res<span>Tamplate</span>
         </Link>
         <CSidebarNav>
            {
               routerLinksAsideMenu.map((obj, index) => (
                  <CNavItem key={index}>
                     <ActiveLink href={`${obj.link}`} activeClassName="active">
                        <a className={`${style.nav_link} nav-link`}>
                           <Icon svg={obj.icon} classNames={[style.nav_icon, 'nav-icon']} />
                           {obj.name || ""}
                        </a>
                     </ActiveLink>
                  </CNavItem>
               ))
            }
         </CSidebarNav>

         <div className={`${style.nav_help}`}>
            <Link href="/certificaties" className={`${style.nav_help_link}`}>
               <Icon svg={helpIcon} classNames={[style.nav_icon, 'nav-icon']} />
               Need help?
            </Link>
         </div>
      </CSidebar>
   )
}

export default SideBar;