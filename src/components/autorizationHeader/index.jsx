import Image from 'next/image'

import { ButtonBack } from "../uis/buttonBack"
import style from "./Style.module.scss"

export const AutorizationHeader = ({ isHidenBtnBack = false }) => {
    return (
        <div className={`${style.head}`}>
            <div className={`${style.head__row}`}>
                {
                    !isHidenBtnBack && (
                        <div className={`${style.head__back}`}>
                            <ButtonBack />
                        </div>
                    )
                }
                <div className={`${style.head__logo}`}>
                    <Image
                        src={'/images/other/logo_site.svg'}
                        width={140}
                        height={30}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}