import {
    CFormCheck
} from "@coreui/react"

import style from "./Style.module.scss"

export const Checked = ({
    label = '',
    onChange = () => { },
}) => {
    return (
        <div className={`${style.main}`}>
            <CFormCheck
                label={label}
                onChange={onChange}
            />
        </div>
    )
}