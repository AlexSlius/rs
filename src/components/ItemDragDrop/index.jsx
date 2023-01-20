import Icon from "../Icon"
import deleteIcon from "/public/images/icons/delete.svg??sprite";
import dragIcon from "/public/images/icons/many-dots.svg?sprite";

export const ItemDragDrop = ({
    onDelete = () => { },
    id = null,
    label = "",
}) => {
    return (
        <div className="active-item-skills-starts item-drag-drops">
            <div className="active-item-skills-starts__row">
                <button className="btn-drops">
                    <Icon svg={dragIcon} />
                </button>
                <div className="active-item-skills-starts__center">
                    <span>{label}</span>
                </div>
                <button className="bnt-delet-ite" onClick={() => { onDelete(id) }}>
                    <Icon svg={deleteIcon} />
                </button>
            </div>
        </div>
    )
}