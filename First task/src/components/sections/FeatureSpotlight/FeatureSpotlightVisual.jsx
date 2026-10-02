import { assets } from '../../../assets/index.js'
import { featureSpotlight } from '../../../data/featureSpotlight.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import RevenueCard from '../../widgets/RevenueCard/RevenueCard.jsx'
import StockCard from '../../widgets/StockCard/StockCard.jsx'

const { visualLabel, stocks, revenue } = featureSpotlight

/**
 * Illustrative dashboard composition. Assistive technology gets a single
 * summary instead of the sample data inside the widgets.
 */
const FeatureSpotlightVisual = ({ className }) => (
  <div
    className={classNames('feature-spotlight-visual', className)}
    role="img"
    aria-label={visualLabel}
  >
    <PerspectiveGrid className="feature-spotlight-visual__backdrop" scene="disc" />
    <StockCard className="feature-spotlight-visual__stocks" {...stocks} />
    <Card className="feature-spotlight-visual__badge">
      <AssetSlot
        className="feature-spotlight-visual__badge-mark"
        src={assets.logoMark}
        name="logo-mark"
      />
    </Card>
    <RevenueCard className="feature-spotlight-visual__revenue" {...revenue} />
  </div>
)

export default FeatureSpotlightVisual
