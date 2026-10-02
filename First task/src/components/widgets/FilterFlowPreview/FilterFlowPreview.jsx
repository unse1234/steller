import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'

const LINK_CLASS_NAME = 'h-px bg-border-subtle'
const ACTIVE_LINK_CLASS_NAME = 'h-px bg-violet-600'
const NODE_CLASS_NAME = 'grid aspect-square place-items-center rounded-[50%] border border-transparent'

/*
 * A node's outline turns from violet to grey away from the active link, and
 * its fill carries a faint grey wash on the same side. `angle` points from
 * the active side.
 */
const nodeBackground = (angle) =>
  [
    `linear-gradient(${angle}, color-mix(in srgb, var(--color-background-muted) 48%, transparent) 4%, transparent 50%) padding-box`,
    'linear-gradient(var(--color-surface), var(--color-surface)) padding-box',
    `linear-gradient(${angle}, var(--color-violet-450) 35%, var(--color-border-subtle)) border-box`,
  ].join(', ')

/**
 * Pipeline screen: a source node feeding a filter node, edge to edge. Lengths
 * are in the preview's unscaled units (see PreviewCard); the row bleeds
 * through the screen's padding so the links reach the card edges.
 */
const FilterFlowPreview = ({ title, sourceIcon, filterIcon, className }) => (
  <PreviewCard className={className} title={title}>
    {/* 52px from the divider (margins collapse). */}
    <div className="-mx-6.75 mt-13 grid grid-cols-[71fr_96px_32px_96px_87fr] items-center">
      <span className={ACTIVE_LINK_CLASS_NAME} />
      <span className={NODE_CLASS_NAME} style={{ background: nodeBackground('90deg') }}>
        <AssetSlot className="size-10" src={sourceIcon} name="cloud-icon" />
      </span>
      <span className={LINK_CLASS_NAME} />
      <span className={NODE_CLASS_NAME} style={{ background: nodeBackground('270deg') }}>
        <AssetSlot className="size-10" src={filterIcon} name="filter-icon" />
      </span>
      <span className={ACTIVE_LINK_CLASS_NAME} />
    </div>
  </PreviewCard>
)

export default FilterFlowPreview
