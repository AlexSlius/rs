import React from "react"

import { AutorizationBigPicture } from "../../components/autorizationBigPicture"

import style from "./Autorization-wraper.module.scss"
import { AutorizationHeader } from "../../components/autorizationHeader"
import { Buttonhelp } from "../../components/uis/buttonHelp"

export const AutorizationWrapper = (props) => {
    return (
        <div className={`${style.main_wrapper_autorization}`}>
            <div className={`${style.autoriaztion__row}`}>
                <div className={`${style.autoriaztion__left} ${style.autoriaztion__col}`}>
                    <AutorizationBigPicture />
                </div>
                <div className={`${style.autoriaztion__right} ${style.autoriaztion__col}`}>
                    <AutorizationHeader isHidenBtnBack={props.isHidenBtnBack} />
                    <div className={`${style.autoriaztion__right_center}`}>
                        {props.children}
                    </div>
                    <div className={`${style.autoriaztion__right_bottom}`}>
                        <Buttonhelp />
                    </div>
                </div>
            </div>
        </div>
    )
}