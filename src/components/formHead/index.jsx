import style from "./Style.module.scss"

export const FormHead = (props) => {
    return (
        <div className={`${style.main}`}>
            <div className={`${style.main__title}`}>{props.title}</div>
            <div className={`${style.main__title_bub}`}>{props.subTitle}</div>
        </div>
    )
}