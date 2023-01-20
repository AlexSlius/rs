import { CFormTextarea } from '@coreui/react'
import { useState, useEffect } from 'react';
import PrewrittenPopup from './PrewrittenPopup';
import Icon from "../../Icon"

import plusIcon from '/public/images/icons/plus.svg?sprite'

const PrewrittenTextarea = ({
   prewriteButtonHandler,
   prewritePopupShow,
   prewriteItems,
   value,
   onChange,
   currentValueId,
   ...rest }) => {

   const [localPrewriteItems, setLocalPrewriteItems] = useState(prewriteItems);
   const [item, setItem] = useState('');
   const [localValue, setLocalValue] = useState(value);

   useEffect(() => {
      setLocalValue(value);
   }, []);


   useEffect(() => {
      if (item.selected) {
         setLocalValue(prev => {
            return prev ? prev + item.text : value + item.text;
         });
      } else {
         setLocalValue(prev => {
            return prev.replace(item.text, '');
         });
      }

   }, [item]);

   useEffect(() => {
      if (!currentValueId) {
         setLocalValue('');
      }
      setLocalPrewriteItems(prev => {
         return prev.map(el => ({ ...el, selected: false }));
      });
   }, [currentValueId]);

   useEffect(() => {
      onChange?.(null, localValue);
   }, [localValue])

   const clickHandler = (e) => {
      e.preventDefault();
   }

   const handleAddItemClick = (id, e) => {
      const item = localPrewriteItems.filter(item => item.id === id)[0];
      if (!item.selected) {
         item.selected = true;
         setItem(item);
      }

      setLocalPrewriteItems(prev => {
         const index = prev.findIndex(el => el.id === id);
         const before = prev.slice(0, index);
         const after = prev.slice(index + 1);
         return [...before, { ...item }, ...after];
      });
   }


   const handleDeleteItemClick = (id, e) => {
      const item = localPrewriteItems.filter(item => item.id === id)[0];
      if (item.selected) {
         item.selected = false;
         setItem(item);
      }

      setLocalPrewriteItems(prev => {
         const index = prev.findIndex(el => el.id === id);
         const before = prev.slice(0, index);
         const after = prev.slice(index + 1);
         return [...before, { ...item }, ...after];
      });

   }

   const handleChange = (e) => {
      setLocalValue(e.target.value);
   }


   return (
      <>
         <CFormTextarea
            value={localValue || value}
            onChange={handleChange}
            {...rest}
         >
         </CFormTextarea>
         <button onClick={(e) => { clickHandler(e); prewriteButtonHandler?.(); }} className={`textarea__prewrite-button ${prewritePopupShow ? 'active' : ''}`}>
            Pre-written phrases  <Icon svg={plusIcon} classNames={['icon-20']} />
         </button>
         {prewritePopupShow && (
            <PrewrittenPopup
               items={localPrewriteItems}
               handleAddItemClick={handleAddItemClick}
               handleDeleteItemClick={handleDeleteItemClick}
            />
         )
         }

      </>

   )
}
export default PrewrittenTextarea;