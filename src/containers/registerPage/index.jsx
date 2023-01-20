import {
    CForm,
    CFormInput,
    CCol,
    CRow,
    CButton
} from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { FormHead } from "../../components/formhead"
import { AutorizationWrapper } from "../../wrappers/autorization"
import { InputPassword } from "../../components/uis/inputPassword"
import Input from "../../components/uis/input"
import { LoadChildrenBtn } from "../../components/loadChildrenBtn"

import { fetchAuthRegister } from "../../controllers/auth"
import { isLoader } from "../../helpers/loadings"
import { localStorageGet } from "../../helpers/localStorage"

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(prev => prev.auth.register)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
        watch,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const onSubmit = (data) => {
        let session_empty = localStorageGet('session_id');
        dispatch(fetchAuthRegister({ email: data.email, password: data.password, session_id: session_empty }));
    }

    return (
        <AutorizationWrapper>
            <>
                <FormHead title="Register ✍️" subTitle="Please enter your details." />
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
                        <CRow className="g-30 r-gap-30">
                            <CCol>
                                <InputPassword
                                    label="password"
                                    placeholder="password"
                                    invalid={!!errors?.password}
                                    valid={!errors?.password && watch("password").length > 0}
                                    obj={
                                        register("password", {
                                            required: true,
                                            minLength: {
                                                value: 1
                                            }
                                        })
                                    }
                                />
                            </CCol>
                        </CRow >
                        <CRow className="g-30 r-gap-30">
                            <CCol>
                                <InputPassword
                                    label="Repeat password"
                                    placeholder="Repeat password"
                                    invalid={!!errors?.repeatPassword}
                                    valid={!errors?.repeatPassword && (watch("password").length > 0) && (watch("password") == watch("repeatPassword"))}
                                    obj={
                                        register("repeatPassword", {
                                            required: true,
                                            minLength: {
                                                value: 1
                                            },
                                            validate: (input) => (watch("password").length > 0) && (input == watch("password")) ? true : false
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
                                        disabled={!isValid}
                                    >Register</CButton>
                                </LoadChildrenBtn>
                            </CCol>
                        </CRow >
                    </CForm>
                </div>
            </>
        </AutorizationWrapper>
    )
}