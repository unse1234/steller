import { classNames } from '../../../utils/classNames.js'

/**
 * Floating white surface: hairline border, outer white ring and soft shadow.
 * The shadow is drawn on the negative z layer so that neighbouring cards
 * never shade one another; place cards inside an element that establishes a
 * stacking context (e.g. `isolate`).
 */
const Card = ({ as = 'div', className, children }) => {
  const Element = as

  return (
    <Element
      className={classNames(
        'relative rounded-sm border border-border-subtle bg-surface ring-sm ring-surface',
        'before:absolute before:-inset-px before:-z-1 before:rounded-[inherit] before:shadow-floating',
        className,
      )}
    >
      {children}
    </Element>
  )
}

export default Card
