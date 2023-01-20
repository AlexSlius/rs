import { useState } from 'react';
import {
   CFormInput,
   CFormFloating
} from "@coreui/react";
import removeIco from '/public/images/icons/delete.svg'
import style from './InputRemove.module.scss'
import Icon from '../../Icon';

const InputRemove = () => {
   const [value, setValue] = useState('');

   const handleClick = (e) => {
      setValue('');
   }

   return (
      <div className={`${style.remove_input}`}>
         <CFormInput value={value} type="text" onChange={(e) => setValue(e.target.value)} placeholder="Field of study" />
         <span onClick={(e) => handleClick(e)} className={`${style.remove_input__button}`}>
            <Icon svg={removeIco} classNames={['icon-20']} />
         </span>
      </div>
   )
}
export default InputRemove;