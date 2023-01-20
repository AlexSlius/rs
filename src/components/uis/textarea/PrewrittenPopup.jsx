import { CCard, CCardBody, CListGroup, CListGroupItem } from '@coreui/react'

import Icon from "../../Icon"

import checkIcon from '/public/images/icons/activities.svg?sprite'
import backIcon from '/public/images/icons/activities-back.svg?sprite'

const PrewrittenPopup = ({ items, handleAddItemClick, handleDeleteItemClick }) => {
   return (
      <div className="prewritten-popup">
         <CCard style={{ width: 380 / 16 + 'rem', height: 350 / 16 + 'rem' }} className="prewritten-popup__card">
            <CCardBody className="prewritten-popup__card-body">
               <CListGroup className='prewritten-popup__list'>
                  {items && items.map(item => {
                     return (
                        <CListGroupItem
                           className="prewritten-popup__list-item"
                           key={item.id}
                        >
                           {item.selected ? (
                              <div className="icon icon-custom-size" onClick={handleDeleteItemClick.bind(null, item.id)}>
                                 <Icon svg={checkIcon} classNames={["check"]} />
                              </div>
                           ) : (
                              <div className="icon icon-custom-size" onClick={handleAddItemClick.bind(null, item.id)}>
                                 <Icon svg={backIcon} classNames={["back"]} />
                              </div>
                           )
                           }
                           <div className="text">{item.text}</div>
                        </CListGroupItem>
                     )
                  })}
               </CListGroup>
            </CCardBody>
         </CCard>
      </div>
   )
}
export default PrewrittenPopup;