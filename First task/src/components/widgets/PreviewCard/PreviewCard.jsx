import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import './PreviewCard.css'

/**
 * Fixed-height card that frames a miniature product screen: a titled header
 * with a menu glyph, a divider, then `children`. Content past the card's
 * height is cropped; `fade` softens the crop with a white fade.
 */
const PreviewCard = ({ title, fade = false, className, children }) => (
  <Card className={classNames('preview-card', fade && 'preview-card--fade', className)}>
    <div className="preview-card__viewport">
      <div className="preview-card__screen">
        <div className="preview-card__header">
          <p className="preview-card__title">{title}</p>
          <span className="preview-card__menu">
            <AssetSlot className="preview-card__menu-icon" src={assets.icons.moreVertical} name="more-icon" />
          </span>
        </div>
        <hr className="card__divider preview-card__divider" />
        {children}
      </div>
    </div>
  </Card>
)

export default PreviewCard
