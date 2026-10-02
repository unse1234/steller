import { getStarted } from '../../../data/getStarted.js'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import FleetCard from '../../widgets/FleetCard/FleetCard.jsx'
import WorkspaceCard from '../../widgets/WorkspaceCard/WorkspaceCard.jsx'

const { visualLabel, workspace, fleet } = getStarted

/**
 * Illustrative dashboard composition. Assistive technology gets a single
 * summary instead of the sample data inside the widgets.
 *
 * From tablet width it is the design's fixed 576 × 486 composition; phones
 * stack the cards. Side by side with the copy (wide screens), the cards sit
 * slightly below the copy's centre line.
 */
const GetStartedVisual = () => (
  <div
    className="isolate grid w-full gap-y-8 tablet:relative tablet:block tablet:h-121.5 tablet:w-144 wide:top-1.5"
    role="img"
    aria-label={visualLabel}
  >
    {/* The disc sits below the cards' shadows (z-index −1). */}
    <PerspectiveGrid
      className="hidden tablet:absolute tablet:inset-s-16 tablet:top-6.75 tablet:-z-2 tablet:block tablet:w-107.5"
      scene="disc"
    />
    <WorkspaceCard
      className="tablet:absolute tablet:inset-s-9.25 tablet:top-0 tablet:w-66.5"
      {...workspace}
    />
    <FleetCard className="tablet:absolute tablet:inset-s-39.5 tablet:top-60.75 tablet:w-91" {...fleet} />
  </div>
)

export default GetStartedVisual
