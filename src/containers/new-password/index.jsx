import {
    CForm,
    CCol,
    CRow,
    CButton
} from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { FormHead } from "../../components/formhead"
import { AutorizationWrapper } from "../../wrappers/autorization"
import { InputPassword } from "../../components/uis/inputPassword"
import { LoadChildrenBtn } from "../../components/loadChildrenBtn"

import { localStorageGet } from "../../helpers/localStorage"
import { fetchAuthNewPassword } from "../../controllers/auth"
import { isLoader } from "../../helpers/loadings"

export const NewPasswordPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(prev => prev.auth.newPassword)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            password: '',
            repeatPassword: '',
        }
    });

    const onSubmit = (data) => {
        let code = localStorageGet('numberCodeNewPassword');
        dispatch(fetchAuthNewPassword({ code, password: data.password }));
    }

    return (
        <AutorizationWrapper>
            <>
                <FormHead title="New password 🔒" subTitle="Enter your new password twice" />
                <div className={`form_wrap form_wrap_mt`}>
                    <CForm
                        className="row r-gap-30"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                                    >Save password</CButton>
                                </LoadChildrenBtn>
                            </CCol>
                        </CRow >
                    </CForm>
                </div>
            </>
        </AutorizationWrapper >
    )
}