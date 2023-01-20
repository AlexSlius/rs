import Icon from "../../Icon";

import style from "./Style.module.scss"

import helpIcon from '/public/images/icons/chat-norm.svg?sprite'

export const Buttonhelp = () => {
    return (
        <a href="#" className={`${style.btn_need}`}>
            <Icon svg={helpIcon} classNames={[style.btn_need_icon]} />
            Need help?
        </a>
    )
}