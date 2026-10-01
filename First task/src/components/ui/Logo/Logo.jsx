import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './Logo.css'

/** Stellar logo: cloud mark beside the wordmark, both scaled by font size. */
const Logo = ({ href, className }) => {
  const Element = href ? 'a' : 'span'
  const linkProps = href ? { href, 'aria-label': 'Stellar home' } : {}

  return (
    <Element className={classNames('logo', className)} {...linkProps}>
      <AssetSlot className="logo__mark" src={assets.logoMark} name="logo-mark" />
      <span className="logo__wordmark">Stellar</span>
    </Element>
  )
}

export default Logo
