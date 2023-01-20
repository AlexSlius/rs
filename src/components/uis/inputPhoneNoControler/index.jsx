import React from "react"
import PhoneInput from "react-phone-number-input/input"
import { isPossiblePhoneNumber } from 'react-phone-number-input'

export const InputPhoneNoControler = ({
    onChange = () => { },
    value = '',
    label = null,
    placeholder = "",
    className = "",
    name = 'phone',
    required = false
}) => {
    const classNameValid = React.useRef('');

    const handleOnBlur = () => {
        if (!required) {
            (!isPossiblePhoneNumber(value || '') && !!value) && (classNameValid.current = 'is-invalid');
        } else {
            (!isPossiblePhoneNumber(value || '2') || (value.length == 0)) && (classNameValid.current = 'is-invalid');
        }
    }

    (isPossiblePhoneNumber(value || '')) && (classNameValid.current = 'is-valid');

    return (
        <div className="form-floating" >
            <PhoneInput
                value={value}
                defaultValue={value}
                onChange={onChange}
                className={`form-control ${className} ${classNameValid.current}`}
                placeholder={placeholder}
                name={name}
                onBlur={handleOnBlur}
            />
            <label className="form-label">{label}</label>
        </div>
    )
}