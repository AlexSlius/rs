import { CFormInput } from "@coreui/react"
import React from "react"

import Icon from "../../../components/Icon"
import deleteIcon from "/public/images/icons/delete.svg??sprite";

const Input = ({
   id = null,
   onChange = () => { },
   onBlur = () => { },
   onDelete = () => { },
   value,
   label = null,
   placeholder = "",
   type = "text",
   className = "",
   invalid = false,
   valid = false,
   name = '',
   obj,
   isDelete = false,
}) => {
   let classDelete = isDelete ? 'btn_delete' : '';

   return (
      <div className={classDelete}>
         <CFormInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className={`${className}`}
            type={type}
            floatingLabel={label}
            placeholder={placeholder}
            invalid={!!invalid}
            valid={!!valid}
            name={name}
            {...obj}
         />
         {
            isDelete && (
               <button className="bnt-delet-ite" onClick={() => { onDelete(id) }}>
                  <Icon svg={deleteIcon} />
               </button>
            )
         }
      </div>
   )
}
export default React.memo(Input);