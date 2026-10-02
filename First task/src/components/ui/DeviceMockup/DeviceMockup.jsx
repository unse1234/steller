import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/**
 * Phone mockup artwork, cropped at the bottom edge. The visible part is
 * 497 × 401px at desktop, including the artwork's transparent margins
 * around the side buttons.
 */
const DeviceMockup = ({ src, alt, className }) => (
  <AssetSlot
    className={classNames('aspect-359/290 w-124.25 max-w-full', className)}
    src={src}
    alt={alt}
    name="device-mockup"
  />
)

export default DeviceMockup
