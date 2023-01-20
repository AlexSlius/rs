import style from "./Style.module.scss";

import Icon from "../Icon"
import iconPreloader from "/public/images/icons/preloader-blue.svg?sprite"

export const LoadBlock = () => {
    return (
        <div className={style.wr}>
            <Icon svg={iconPreloader} />
        </div>
    )
}