import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'
import './FilterFlowPreview.css'

/** Pipeline screen: a source node feeding a filter node, edge to edge. */
const FilterFlowPreview = ({ title, sourceIcon, filterIcon, className }) => (
  <PreviewCard className={className} title={title}>
    <div className="filter-flow-preview">
      <span className="filter-flow-preview__link filter-flow-preview__link--active" />
      <span className="filter-flow-preview__node filter-flow-preview__node--start">
        <AssetSlot className="filter-flow-preview__icon" src={sourceIcon} name="cloud-icon" />
      </span>
      <span className="filter-flow-preview__link" />
      <span className="filter-flow-preview__node filter-flow-preview__node--end">
        <AssetSlot className="filter-flow-preview__icon" src={filterIcon} name="filter-icon" />
      </span>
      <span className="filter-flow-preview__link filter-flow-preview__link--active" />
    </div>
  </PreviewCard>
)

export default FilterFlowPreview
