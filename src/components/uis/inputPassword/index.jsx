import React from "react"

import { CFormInput } from "@coreui/react"

import Icon from "../../Icon"

import style from "./Style.module.scss"
import iconEye from "/public/images/icons/eye.svg?sprite"

export const InputPassword = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);

    let classBtnEye = showPassword ? style.open : ''
    let typeField = showPassword ? 'text' : 'password'

    return (
        <div className={`${style.row}`}>
            <CFormInput
                // onChange={(e) =>setEmail(e.target.value)}
                value={props.value}
                type={typeField}
                floatingLabel={props.label}
                placeholder={props.placeholder}
                className={`${style.in_password}`}
                invalid={props.invalid || false}
                valid={props.valid || false}
                {...props?.obj}
            />
            <button type="button" onClick={() => setShowPassword(prev => !prev)} className={`${style.btn_eye} ${classBtnEye}`}>
                <Icon svg={iconEye} />
            </button>
        </div>
    )
}