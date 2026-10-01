import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './DeviceMockup.css'

/** Phone mockup artwork, cropped at the bottom edge. */
const DeviceMockup = ({ src, alt, className }) => (
  <AssetSlot
    className={classNames('device-mockup', className)}
    src={src}
    alt={alt}
    name="device-mockup"
  />
)

export default DeviceMockup
