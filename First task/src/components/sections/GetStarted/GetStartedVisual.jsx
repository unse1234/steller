import { getStarted } from '../../../data/getStarted.js'
import FleetCard from '../../widgets/FleetCard/FleetCard.jsx'
import WorkspaceCard from '../../widgets/WorkspaceCard/WorkspaceCard.jsx'

const { visualLabel, workspace, fleet } = getStarted

/**
 * Illustrative dashboard composition. Assistive technology gets a single
 * summary instead of the sample data inside the widgets.
 */
const GetStartedVisual = () => (
  <div className="get-started-visual" role="img" aria-label={visualLabel}>
    <div className="get-started-visual__backdrop" />
    <WorkspaceCard className="get-started-visual__workspace" {...workspace} />
    <FleetCard className="get-started-visual__fleet" {...fleet} />
  </div>
)

export default GetStartedVisual
