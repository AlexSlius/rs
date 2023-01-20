import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import Icon from '../../Icon'

import { logout } from '../../../controllers/auth'

import style from './ResumeHead.module.scss'
import savedIcon from '/public/images/icons/saved.svg?sprite'
import arrowLeftIcon from '/public/images/icons/arrow-left.svg?sprite'
import arrowRightIcon from '/public/images/icons/arrow-right.svg?sprite'
import arrowProfileIcon from '/public/images/icons/arrow-profile.svg?sprite'
import iconDashboard from '/public/images/icons/icon-dashboard.svg?sprite'
import iconHelp from '/public/images/icons/icon-he.svg?sprite'
import iconLogout from '/public/images/icons/icon-logo.svg?sprite'

const ResumeHead = () => {
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = React.useState(false);
   const classIsShowMenu = showMenu ? style.opens : ''

   const {
      auth: {
         autorizate: {
            isAthorized,
         }
      },
      contacts: {
         contactObj
      },
   } = useSelector((state) => state);

   const handleOnClickOpen = () => {
      setShowMenu(prev => !prev);
   }

   React.useEffect(() => {
      function handleClick(e) {
         if (!e.target.closest('.btn_no_click_menu'))
            setShowMenu(prev => {
               if (prev)
                  return !prev

               return prev;
            })
      }

      !!document?.body && document.body.addEventListener('mousedown', handleClick);

      return !!document?.body && document.body.addEventListener('mousedown', handleClick);
   }, [])

   return (
      <div className={`${style.resume_head}`}>
         <div className={`${style.resume_head__status}`}>
            <Icon svg={savedIcon} classNames={[style.icon]} />
            Saved
         </div>
         <div className={`${style.resume_head__pagination}`}>
            <button className={`${style.resume_head__pagination_button}`}>
               <Icon svg={arrowLeftIcon} classNames={[style.icon]} />
            </button>
            <p>1/2</p>
            <button className={`${style.resume_head__pagination_button}`}>
               <Icon svg={arrowRightIcon} classNames={[style.icon]} />
            </button>
         </div>

         <div className={`${style.resume_head__profile} ${classIsShowMenu} btn_no_click_menu`}>
            <div className={`${style.resume_head__avatar_img} `} onClick={handleOnClickOpen}>
               <img src={contactObj?.picture || `/images/other/avatar-small.png`} />
            </div>
            {
               isAthorized && (
                  <>
                     <button className={`${style.resume_head__profile_arrow}`} onClick={handleOnClickOpen}>
                        <Icon svg={arrowProfileIcon} classNames={[style.icon]} />
                     </button>

                     <div className={`${style.mod}`}>
                        <div className={`${style.mod_wr}`}>
                           <ul className={`${style.mod_m_list}`}>
                              <li>
                                 <Link href="#">
                                    <Icon svg={iconDashboard} />
                                    <span>Dashboard</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="#">
                                    <Icon svg={iconHelp} />
                                    <span>Help</span>
                                 </Link>
                              </li>
                              <li>
                                 <button onClick={() => logout(dispatch)}>
                                    <Icon svg={iconLogout} />
                                    <span>Logout</span>
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </>
               )
            }
         </div>
      </div>
   )
}
export default ResumeHead;