import Icon from '../../Icon'
import style from './AddButton.module.scss'

import addIcon from '/public/images/icons/plus.svg?sprite'

const AddButton = (props) => {
   return (
      <button className={style.addButton} {...props}>
         <Icon svg={addIcon} classNames={['icon-20']} />
         {props.text}
      </button>
   )
}
export default AddButton;