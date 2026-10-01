import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './LogoTicker.css'

/**
 * Continuously scrolling row of logos, clipped to its container. The list is
 * rendered twice so the loop is seamless; the copy is hidden from assistive
 * technology. Each item takes `{ name, logo, width, height }`.
 */
const LogoTicker = ({ items, label, className }) => (
  <div className={classNames('logo-ticker', className)}>
    <div className="logo-ticker__track">
      {['original', 'copy'].map((set) => (
        <ul
          key={set}
          className="logo-ticker__list"
          aria-label={set === 'original' ? label : undefined}
          aria-hidden={set === 'copy' || undefined}
        >
          {items.map(({ name, logo, width, height }, index) => (
            <li
              key={`${name}-${index}`}
              className="logo-ticker__item"
              style={{ '--logo-width': `${width}px`, '--logo-height': `${height}px` }}
            >
              <AssetSlot className="logo-ticker__logo" src={logo} alt={name} name="company-logo" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
)

export default LogoTicker
