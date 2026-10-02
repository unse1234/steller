import { useId } from 'react'
import { classNames } from '../../../utils/classNames.js'

/**
 * Builds an SVG path through `points`, rounding every interior vertex with a
 * quadratic curve. The radius is capped at half of each adjoining segment so
 * neighbouring curves never overlap; straight runs keep the traced shape.
 */
const roundedPath = (points, radius) => {
  const [first, ...rest] = points
  let path = `M ${first[0]},${first[1]}`

  rest.forEach((point, index) => {
    const next = rest[index + 1]
    if (!next) {
      path += ` L ${point[0]},${point[1]}`
      return
    }

    const prev = points[index]
    const inLength = Math.hypot(point[0] - prev[0], point[1] - prev[1])
    const outLength = Math.hypot(next[0] - point[0], next[1] - point[1])
    const r = Math.min(radius, inLength / 2, outLength / 2)
    const start = [
      point[0] - ((point[0] - prev[0]) / inLength) * r,
      point[1] - ((point[1] - prev[1]) / inLength) * r,
    ]
    const end = [
      point[0] + ((next[0] - point[0]) / outLength) * r,
      point[1] + ((next[1] - point[1]) / outLength) * r,
    ]
    path += ` L ${start[0]},${start[1]} Q ${point[0]},${point[1]} ${end[0]},${end[1]}`
  })

  return path
}

const TONES = {
  accent: 'text-accent',
  neutral: 'text-muted',
}

/**
 * Minimal line chart with a soft area fill. `points` are `[x, y]` pairs in a
 * `width` × `height` coordinate space (y grows downwards); colour follows
 * `currentColor`, set by `tone`. `cornerRadius` rounds the peaks and dips.
 */
const Sparkline = ({ points, width, height, cornerRadius = 6, tone = 'accent', className }) => {
  const gradientId = useId()
  const line = roundedPath(points, cornerRadius)
  const area = `${line} L ${width},${height} L 0,${height} Z`

  return (
    <svg
      className={classNames('overflow-visible', TONES[tone], className)}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Sparkline
