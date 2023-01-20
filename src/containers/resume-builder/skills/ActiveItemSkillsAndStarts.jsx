import ReactStars from "react-rating-stars-component";

import Icon from "../../../components/Icon"
import deleteIcon from "/public/images/icons/delete.svg??sprite";
import dragIcon from "/public/images/icons/many-dots.svg?sprite";

export const ActiveItemSkillsAndStarts = ({
    onDelete = () => { },
    ratingChanged = () => { },
    id = null,
    label = "",
    valueStats = 0,
}) => {
    let colorStart = "#ffd700";

    switch (valueStats) {
        case 1:
        case 2: {
            colorStart = "#F63B3B";
            break;
        }
        case 3: {
            colorStart = "#FFAD61";
            break;
        }
        case 4:
        case 5: {
            colorStart = "#6DC26C";
            break;
        }
    }

    return (
        <div className="active-item-skills-starts">
            <div className="active-item-skills-starts__row">
                <button className="btn-drops">
                    <Icon svg={dragIcon} />
                </button>
                <div className="active-item-skills-starts__center">
                    <span>{label}</span>
                    <div className="active-item-skills-starts__str">
                        <ReactStars
                            count={5}
                            onChange={(value) => ratingChanged(id, { name: label, level: value })}
                            value={valueStats}
                            size={14}
                            activeColor={colorStart}
                            color="#DADCE3"
                        />
                    </div>
                </div>
                <button className="bnt-delet-ite" onClick={() => { onDelete(id) }}>
                    <Icon svg={deleteIcon} />
                </button>
            </div>
        </div>
    )
}