import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/** Stellar logo: cloud mark beside the wordmark, both scaled by font size. */
const Logo = ({ href, className }) => {
  const Element = href ? 'a' : 'span'
  const linkProps = href ? { href, 'aria-label': 'Stellar home' } : {}

  return (
    <Element
      className={classNames(
        'inline-flex items-center gap-[0.3em] text-xl leading-none font-bold tracking-tight text-primary no-underline',
        className,
      )}
      {...linkProps}
    >
      <AssetSlot className="aspect-19/14 w-[1em]" src={assets.logoMark} name="logo-mark" />
      <span>Stellar</span>
    </Element>
  )
}

export default Logo
