import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/**
 * Icon inside a Button. The artwork carries ~4px of built-in padding, pulled
 * in so spacing measures to the glyph itself. On an outline button it turns
 * white with the label.
 */
const ButtonIcon = ({ src, name }) => (
  <AssetSlot
    className={
      '-mx-1 size-6 transition-[filter] duration-medium ease-standard ' +
      'group-hover/outline-button:brightness-0 group-hover/outline-button:invert ' +
      'group-focus-visible/outline-button:brightness-0 group-focus-visible/outline-button:invert'
    }
    src={src}
    name={name}
  />
)

export default ButtonIcon
