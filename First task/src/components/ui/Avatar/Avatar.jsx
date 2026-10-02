import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/** Circular profile picture. Size is controlled with `--avatar-size`. */
const Avatar = ({ src, name, className }) => (
  <AssetSlot
    className={classNames('size-(--avatar-size,40px) rounded-[50%] object-cover', className)}
    src={src}
    alt={name}
    name="avatar"
    shape="circle"
  />
)

export default Avatar
