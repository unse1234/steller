import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './Avatar.css'

/** Circular profile picture. Size is controlled with `--avatar-size`. */
const Avatar = ({ src, name, className }) => (
  <AssetSlot
    className={classNames('avatar', className)}
    src={src}
    alt={name}
    name="avatar"
    shape="circle"
  />
)

export default Avatar
