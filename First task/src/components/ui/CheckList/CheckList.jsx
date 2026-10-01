import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './CheckList.css'

/** Bulleted list with a check badge before each item. */
const CheckList = ({ items, className }) => (
  <ul className={classNames('check-list', className)}>
    {items.map((item) => (
      <li key={item} className="check-list__item">
        <AssetSlot className="check-list__icon" src={assets.icons.checkCircle} name="check-icon" shape="circle" />
        {item}
      </li>
    ))}
  </ul>
)

export default CheckList
