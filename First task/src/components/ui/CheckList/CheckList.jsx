import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/** Bulleted list with a check badge before each item. */
const CheckList = ({ items, className, itemClassName, iconClassName }) => (
  <ul className={classNames('grid gap-y-4', className)}>
    {items.map((item) => (
      <li
        key={item}
        className={classNames('flex min-h-5.5 items-center gap-3 text-sm font-medium', itemClassName)}
      >
        <AssetSlot
          className={classNames('size-5.5 flex-none', iconClassName)}
          src={assets.icons.checkCircle}
          name="check-icon"
          shape="circle"
        />
        {item}
      </li>
    ))}
  </ul>
)

export default CheckList
