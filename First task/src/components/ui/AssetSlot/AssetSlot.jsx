import { classNames } from '../../../utils/classNames.js'
import './AssetSlot.css'

/**
 * Renders an image asset, or a same-sized placeholder while the asset is
 * still missing. Dimensions always come from `className`, so supplying the
 * final file never changes the layout.
 */
const AssetSlot = ({ src, alt = '', name, shape = 'rect', className }) => {
  if (src) {
    return <img className={className} src={src} alt={alt} decoding="async" />
  }

  return (
    <span
      className={classNames('asset-slot', `asset-slot--${shape}`, className)}
      data-asset={name}
      aria-hidden="true"
    />
  )
}

export default AssetSlot
