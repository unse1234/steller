import { classNames } from '../../../utils/classNames.js'

const TONES = {
  accent: 'bg-violet-600',
  neutral: 'bg-gray-300',
}

/**
 * Horizontal bar whose length tracks `value` (0–100), followed by the
 * percentage. With `showTrack` the bar fills a visible track and the label
 * sits at the track's end; otherwise the label follows the fill: the fill's
 * full length is the row minus room for the label, so at high values the
 * fill shrinks rather than pushing the label out.
 */
const ProgressBar = ({
  value,
  tone = 'accent',
  showTrack = false,
  className,
  fillClassName,
  labelClassName,
}) => {
  const fill = (
    <span
      className={classNames(
        'rounded-pill',
        TONES[tone],
        showTrack
          ? 'h-full w-[calc(100%*var(--progress-value))]'
          : 'h-1.25 w-[calc((100%-var(--progress-label-space))*var(--progress-value))]',
        fillClassName,
      )}
    />
  )

  return (
    <div
      className={classNames(
        'flex items-center gap-2.5 text-xs font-medium text-secondary [--progress-label-space:25px]',
        showTrack && 'gap-3',
        className,
      )}
      style={{ '--progress-value': value / 100 }}
    >
      {showTrack ? <span className="flex h-1.5 flex-1 rounded-pill bg-violet-100">{fill}</span> : fill}
      <span className={classNames('flex-none', labelClassName)}>{value}%</span>
    </div>
  )
}

export default ProgressBar
