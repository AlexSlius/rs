import Icon from "../../Icon"

import deleteIcon from "/public/images/icons/delete.svg??sprite";

export const ButtonDeleteItem = ({
    onDelete = () => { },
}) => {
    return (
        <button className="bnt-delet-ite" onClick={onDelete}>
            <Icon svg={deleteIcon} />
        </button >
    )
}