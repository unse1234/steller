import { classNames } from '../../../utils/classNames.js'
import './ProgressBar.css'

/**
 * Horizontal bar whose length tracks `value` (0–100), followed by the
 * percentage. With `showTrack` the bar fills a visible track and the label
 * sits at the track's end; otherwise the label follows the fill.
 */
const ProgressBar = ({ value, tone = 'accent', showTrack = false, className }) => (
  <div
    className={classNames(
      'progress-bar',
      `progress-bar--${tone}`,
      showTrack && 'progress-bar--track',
      className,
    )}
    style={{ '--progress-value': value / 100 }}
  >
    {showTrack ? (
      <span className="progress-bar__track">
        <span className="progress-bar__fill" />
      </span>
    ) : (
      <span className="progress-bar__fill" />
    )}
    <span className="progress-bar__label">{value}%</span>
  </div>
)

export default ProgressBar
