import style from "./Style.module.scss";

export const LoadWr = ({
    children,
    isLoad = false
}) => {
    let classLoad = isLoad ? style.load_bg : '';

    return (
        <div className={`${style.wr} ${classLoad}`}>
        {children}
    </div>
    )
}