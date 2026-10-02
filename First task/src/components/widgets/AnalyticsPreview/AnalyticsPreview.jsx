import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'

/* Lengths are in the preview's unscaled units (see PreviewCard). */
const ROW_CLASS_NAME = 'flex h-12 items-center rounded-pill border border-border-subtle px-3.75'

/** Analytics screen: labelled share bars; an empty row hints at more below. */
const AnalyticsPreview = ({ title, rows, className }) => (
  <PreviewCard className={className} title={title} fade>
    <ul className="grid gap-y-3">
      {rows.map(({ label, value }) => (
        <li key={label} className={ROW_CLASS_NAME}>
          <span className="w-19 flex-none text-xs">{label}</span>
          <ProgressBar
            className="flex-1 font-regular text-primary"
            // Bars end square, as in the product's share charts.
            fillClassName="rounded-e-none"
            labelClassName="w-6"
            value={value}
            showTrack
          />
        </li>
      ))}
      <li className={ROW_CLASS_NAME} aria-hidden="true" />
    </ul>
  </PreviewCard>
)

export default AnalyticsPreview
