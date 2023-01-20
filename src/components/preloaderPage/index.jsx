import Icon from "../Icon"

import style from "./Style.module.scss";
import isonPreloaderPage from "/public/images/icons/preloader_page.svg?sprite"

export const PreloaderPage = () => {
    return (
        <div className={style.wr}>
            <div className={style.opas}></div>
            <Icon svg={isonPreloaderPage} />
        </div>
    )
}