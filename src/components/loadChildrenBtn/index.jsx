import style from "./Style.module.scss"

export const LoadChildrenBtn = ({
    isLoad = false,
    children
}) => {
    let isLoadClass = isLoad ? style.load : '';

    return (
        <div className={`${style.wr} ${isLoadClass}`}>
            {children}
        </div>
    )
}