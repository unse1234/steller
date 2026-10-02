import { assets } from '../../../assets/index.js'
import { featureSpotlight } from '../../../data/featureSpotlight.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import RevenueCard from '../../widgets/RevenueCard/RevenueCard.jsx'
import StockCard from '../../widgets/StockCard/StockCard.jsx'

const { visualLabel, stocks, revenue } = featureSpotlight

const BADGE =
  'hidden tablet:absolute tablet:inset-s-22.25 tablet:top-82.25 tablet:grid tablet:aspect-square tablet:w-21 tablet:place-items-center tablet:rounded-[50%]'

/**
 * Illustrative dashboard composition. Assistive technology gets a single
 * summary instead of the sample data inside the widgets.
 *
 * From tablet width it is the design's fixed 576 × 482 composition; phones
 * stack the cards.
 */
const FeatureSpotlightVisual = ({ className }) => (
  <div
    className={classNames(
      'isolate grid w-full gap-y-8 tablet:relative tablet:block tablet:h-120.5 tablet:w-144',
      className,
    )}
    role="img"
    aria-label={visualLabel}
  >
    {/* The disc sits below the cards' shadows (z-index −1). */}
    <PerspectiveGrid
      className="hidden tablet:absolute tablet:inset-s-20.25 tablet:top-6 tablet:-z-2 tablet:block tablet:w-107.5"
      scene="disc"
    />
    <StockCard className="tablet:absolute tablet:inset-s-13 tablet:top-0 tablet:w-91" {...stocks} />
    <Card className={BADGE}>
      <AssetSlot className="tablet:aspect-19/14 tablet:w-8" src={assets.logoMark} name="logo-mark" />
    </Card>
    <RevenueCard
      className="tablet:absolute tablet:inset-s-77.5 tablet:top-71.25 tablet:w-66.25"
      {...revenue}
    />
  </div>
)

export default FeatureSpotlightVisual
