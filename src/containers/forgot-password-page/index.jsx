import React from "react"
import {
    CForm,
    CCol,
    CRow,
    CButton
} from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { FormHead } from "../../components/formhead"
import Input from "../../components/uis/input"
import { AutorizationWrapper } from "../../wrappers/autorization"
import { LoadChildrenBtn } from "../../components/loadChildrenBtn"

import { localStorageGet } from "../../helpers/localStorage"
import { fetchAuthResetPassword } from "../../controllers/auth"
import { isLoader } from "../../helpers/loadings"

export const ForgotPasswordPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(prev => prev.auth.resetPassword)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
        setValue,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: '',
        }
    });

    const onSubmit = (data) => {
        dispatch(fetchAuthResetPassword(data));
    }

    React.useEffect(() => {
        (async () => {
            let dataStorageAuth = localStorageGet('authData', true);

            if (dataStorageAuth) {
                await setValue('email', dataStorageAuth.email);
            }
        })();
    }, []);

    return (
        <AutorizationWrapper>
            <>
                <FormHead title="Forgot password? 🔒" subTitle="Receive a password reset code by email" />
                <div className={`form_wrap form_wrap_mt`}>
                    <CForm
                        className="row r-gap-30"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <CRow className="g-30 r-gap-30">
                            <CCol>
                                <Input
                                    label="E-mail"
                                    placeholder="E-mail"
                                    invalid={errors?.email}
                                    valid={!errors?.email && /\S+@\S+\.\S+/.test(watch("email"))}
                                    obj={
                                        register("email", {
                                            required: true,
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                            },
                                        })
                                    }
                                />
                            </CCol>
                        </CRow >
                        <CRow>
                            <CCol>
                                <LoadChildrenBtn isLoad={isLoader(status)}>
                                    <CButton
                                        className={`btn_form`}
                                        type="submit"
                                        color="blue"
                                        disabled={!!!watch("email")}
                                    >Submit Code</CButton>
                                </LoadChildrenBtn>
                            </CCol>
                        </CRow >
                    </CForm>
                </div>
            </>
        </AutorizationWrapper>
    )
}