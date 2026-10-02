import { classNames } from '../../../utils/classNames.js'

/* Temporary stand-in for artwork that has not been supplied yet. */
const PLACEHOLDER_SHAPES = {
  rect: 'rounded-[4px]',
  circle: 'rounded-[50%]',
}

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
      className={classNames(
        'block flex-none bg-placeholder outline-1 outline-dashed outline-placeholder-outline -outline-offset-1',
        PLACEHOLDER_SHAPES[shape],
        className,
      )}
      data-asset={name}
      aria-hidden="true"
    />
  )
}

export default AssetSlot
