import { CFormInput } from "@coreui/react"
import React from "react"
import Icon from "../../Icon";

import style from "./Style.module.scss";
import iconSearch from "/public/images/icons/search-grey.svg?sprite";

const InputSearch = ({
   onChange = () => { },
   handleServerRequest = () => { },
   value,
   label = null,
   placeholder = "",
   type = "text",
   className = "",
   name = 'search',
   nTimeMs = 500,
}) => {
   const refIdTimeout = React.useRef(undefined);

   React.useEffect(() => {
      if (value) {
         if (refIdTimeout.current) {
            clearTimeout(refIdTimeout.current);
         }

         refIdTimeout.current = setTimeout(async () => {
            await handleServerRequest(value);
            clearTimeout(refIdTimeout.current);
         }, nTimeMs);
      }
   }, [value])

   return (
      <div className={style.wr}>
         <CFormInput
            onChange={onChange}
            value={value}
            className={`${className}`}
            type={type}
            floatingLabel={label}
            placeholder={placeholder}
            name={name}
         />
         <Icon svg={iconSearch} />
      </div>
   )
}
export default React.memo(InputSearch);