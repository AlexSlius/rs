import Icon from '../../../components/Icon'

import addIcon from '/public/images/icons/plus.svg?sprite'
import deleteIcon from '/public/images/icons/remove.svg?sprite'

const SkillItem = ({
   selected,
   text,
   id,
   onClick,
   onClickDelete
}) => {
   return (
      <div
         className="skills__item d-flex gap-2 align-items-center"
         onClick={(e) => selected ? onClickDelete(id) : onClick(id, text)}
      >
         {text}
         <button className="skills__button">
            {selected ? <Icon svg={deleteIcon} classNames={['icon-20']} /> : <Icon svg={addIcon} classNames={['icon-20']} />}
         </button>
      </div>
   )
}
export default SkillItem;