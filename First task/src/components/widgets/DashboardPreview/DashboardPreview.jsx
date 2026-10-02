import { assets } from '../../../assets/index.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'

/* Long-dash outline of the drop panel; CSS `dashed` can't set the dash length. */
const DASHED_OUTLINE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' rx='12' fill='none' stroke='%23E9EBF1' stroke-width='2' stroke-dasharray='16 16'/%3E%3C/svg%3E\")"

/*
 * Dashboard screen: quick-action pills above a CSV import drop zone. Lengths
 * are in the preview's unscaled units (see PreviewCard). The drop zone runs
 * past the card; the panel's ::after fades it out at the crop.
 */
const DashboardPreview = ({ title, actions, upload, className }) => (
  <PreviewCard className={className} title={title}>
    <ul className="flex flex-wrap gap-3">
      {actions.map(({ label, icon }) => (
        <li
          key={label}
          className="inline-flex h-8 items-center gap-1 rounded-pill border border-border-subtle pr-3 pl-2 text-md"
        >
          <AssetSlot className="size-4" src={icon} name="action-icon" />
          {label}
        </li>
      ))}
    </ul>

    <div
      className="relative mt-6 rounded-md bg-background-muted p-6 after:absolute after:inset-x-0 after:top-29.75 after:h-4 after:bg-[linear-gradient(transparent,var(--color-background-muted))]"
      style={{ backgroundImage: DASHED_OUTLINE }}
    >
      <AssetSlot className="absolute inset-e-4 top-4 size-4" src={assets.icons.close} name="close-icon" />
      <p className="text-md leading-6 font-medium opsz-display">{upload.title}</p>
      <p className="mt-1 text-xs leading-5 text-muted">{upload.text}</p>
      <span className="mt-4 block h-15.25 rounded-sm bg-surface" />
    </div>
  </PreviewCard>
)

export default DashboardPreview
