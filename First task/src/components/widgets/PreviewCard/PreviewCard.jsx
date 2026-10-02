import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'

const FADE =
  'after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-9 ' +
  'after:bg-[linear-gradient(color-mix(in_srgb,var(--color-surface)_20%,transparent),var(--color-surface))]'

/**
 * Fixed-height card that frames a miniature product screen: a titled header
 * with a menu glyph, a divider, then `children`. Content past the card's
 * height is cropped; `fade` softens the crop with a white fade.
 *
 * The screen is a miniature of the product UI, drawn at 87.5% of its real
 * size: lengths inside it are the UI's own (unscaled) measurements.
 */
const PreviewCard = ({ title, fade = false, className, children }) => (
  <Card className={classNames('h-63.75 rounded-md before:shadow-floating-soft', className)}>
    <div
      className={classNames(
        'relative h-full overflow-hidden rounded-[calc(var(--radius-md)-1px)]',
        fade && FADE,
      )}
    >
      <div className="px-6.75 pt-6.75 zoom-[0.875]">
        <div className="flex h-7 items-center justify-between gap-4">
          <p className="text-lg font-medium opsz-display">{title}</p>
          <span className="grid size-7 flex-none place-items-center">
            <AssetSlot className="h-[15.75px] w-auto" src={assets.icons.moreVertical} name="more-icon" />
          </span>
        </div>
        <CardDivider className="mt-5.75 mb-6" />
        {children}
      </div>
    </div>
  </Card>
)

export default PreviewCard
