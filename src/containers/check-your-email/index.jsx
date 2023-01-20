import {
    CForm,
    CCol,
    CRow,
    CButton
} from "@coreui/react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { isString } from "lodash"

import { FormHead } from "../../components/formhead"
import { AutorizationWrapper } from "../../wrappers/autorization"
import InputCode from "../../components/uis/inputCode"
import { LoadChildrenBtn } from "../../components/loadChildrenBtn"

import { fetchAuthCodeResetPassword } from "../../controllers/auth"
import { localStorageSet } from "../../helpers/localStorage"
import { isLoader } from "../../helpers/loadings"


export const CheckYourEmailPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(prev => prev.auth.checkEmailCode)
    const [stateNumber, setStateNumber] = React.useState();
    let isValid = isString(stateNumber) && stateNumber.length == 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorageSet('numberCodeNewPassword', stateNumber);
        dispatch(fetchAuthCodeResetPassword(stateNumber));
    }

    return (
        <AutorizationWrapper>
            <>
                <FormHead title="Check your email 📬" subTitle="We sent the code to reset the password" />
                <div className={`form_wrap form_wrap_mt`}>
                    <CForm className="row r-gap-30" onSubmit={handleSubmit}>
                        <CRow className="g-30 r-gap-30">
                            <CCol>
                                <InputCode setState={setStateNumber} />
                            </CCol>
                        </CRow >
                        <CRow>
                            <CCol>
                                <LoadChildrenBtn isLoad={isLoader(status)}>
                                    <CButton
                                        className={`btn_form`}
                                        type="submit"
                                        color="blue"
                                        disabled={!isValid}
                                    >Restore password</CButton>
                                </LoadChildrenBtn>
                            </CCol>
                        </CRow >
                    </CForm>
                </div>
            </>
        </AutorizationWrapper>
    )
}