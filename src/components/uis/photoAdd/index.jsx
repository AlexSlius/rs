import Icon from "../../../components/Icon";

import style from "./Style.module.scss"
import plusIcon from '/public/images/icons/plus.svg?sprite'

export const PhotoAdd = ({
    handleFileSelect = () => { },
    value = null,
}) => {
    let textbtn = value ? 'Edit Photo' : 'Add Photo'

    return (
        <div className={`${style.add_photo}`}>
            <img className={`${style.add_photo__image}`} />
            <input
                onChange={handleFileSelect}
                hidden
                type="file"
                accept="image/png, image/jpeg"
                id='upload'
                className={`${style.add_photo__inpu}`}
            />
            <label className={`${style.add_photo__label}`} htmlFor="upload">
                <Icon svg={plusIcon} classNames={[`${style.icon_add}`]} />
                {textbtn}
            </label>
        </div>
    )
}