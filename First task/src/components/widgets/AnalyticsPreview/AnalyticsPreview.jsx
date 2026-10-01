import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'
import './AnalyticsPreview.css'

/** Analytics screen: labelled share bars; an empty row hints at more below. */
const AnalyticsPreview = ({ title, rows, className }) => (
  <PreviewCard className={className} title={title} fade>
    <ul className="analytics-preview__list">
      {rows.map(({ label, value }) => (
        <li key={label} className="analytics-preview__row">
          <span className="analytics-preview__label">{label}</span>
          <ProgressBar className="analytics-preview__bar" value={value} showTrack />
        </li>
      ))}
      <li className="analytics-preview__row" aria-hidden="true" />
    </ul>
  </PreviewCard>
)

export default AnalyticsPreview
