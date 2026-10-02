import { useId } from 'react'
import { classNames } from '../../../utils/classNames.js'

/*
 * One receding grid plane, measured from the design. Rows sit at distance
 * DEPTH_SCALE / (DEPTH_OFFSET + n) from the vanishing point (equal steps in
 * depth, row 0 nearest the viewer); columns spread COLUMN_SPREAD x that
 * distance to either side of the vanishing point. Lengths are design pixels.
 */
const DEPTH_SCALE = 14376
const DEPTH_OFFSET = 31.32
const COLUMN_SPREAD = 0.1423

/* Opacity by distance from the vanishing point: [distance, opacity]. The
   band edges and discs fade out a little sooner than the hero's floor. */
const HERO_FLOOR_FADE = [
  [217, 0],
  [377, 0.9],
]
const EDGE_FADE = [
  [236, 0],
  [372, 0.9],
]
const HERO_CEILING_FADE = [
  [234, 0],
  [255, 0.12],
  [310, 0.67],
  [406, 0.67],
  [484, 0],
]

/*
 * Each scene is a frame (design pixels) holding one or two planes. `direction`
 * is -1 for a ceiling (drawn above its vanishing point) and 1 for a floor.
 * Band edges mirror the floor, 386px from their vanishing point to the edge.
 * The disc frame is the 430px disc at the desktop scale (1216 / 1152).
 */
const SCENES = {
  hero: {
    width: 1440,
    height: 714,
    planes: [
      { name: 'ceiling', vanishing: [720, 500], direction: -1, fade: HERO_CEILING_FADE },
      { name: 'floor', vanishing: [720, 328], direction: 1, fade: HERO_FLOOR_FADE },
    ],
  },
  ceiling: {
    width: 1440,
    height: 386,
    planes: [{ name: 'ceiling', vanishing: [720, 386], direction: -1, fade: EDGE_FADE }],
  },
  floor: {
    width: 1440,
    height: 386,
    planes: [{ name: 'floor', vanishing: [720, 0], direction: 1, fade: EDGE_FADE }],
  },
  disc: {
    width: 454,
    height: 454,
    planes: [{ name: 'floor', vanishing: [227, 27], direction: 1, fade: EDGE_FADE }],
  },
}

/* Pinned art spans the full width at the scene's own proportions (set
   inline), cropped by its box. */
const PINS = {
  top: 'absolute inset-x-0 top-0 h-auto',
  bottom: 'absolute inset-x-0 bottom-0 h-auto',
}

/* Band: each half of the box shows one edge of the grid. */
const HALVES = {
  ceiling: 'absolute inset-x-0 top-0 h-1/2 overflow-hidden',
  floor: 'absolute inset-x-0 bottom-0 h-1/2 overflow-hidden',
}

/* Disc: a muted round window, lighter at the top, showing the floor below. */
const DISC =
  'aspect-square rounded-[50%] bg-[linear-gradient(180deg,var(--color-surface)_0%,var(--color-gray-50)_40%,var(--color-gray-100)_100%)]'

const round = (value) => Math.round(value * 100) / 100

/** Path data for a plane's rows and columns, from the frame edge to its fade. */
const planePath = ({ width, height }, { vanishing: [vanishingX, vanishingY], direction, fade }) => {
  const yAt = (distance) => vanishingY + direction * distance
  const nearest = Math.min(...fade.map(([distance]) => distance))
  const farthest = direction < 0 ? vanishingY : height - vanishingY

  const rows = []
  const firstRow = Math.max(0, Math.ceil(DEPTH_SCALE / farthest - DEPTH_OFFSET))
  for (let n = firstRow; ; n += 1) {
    const distance = DEPTH_SCALE / (DEPTH_OFFSET + n)
    if (distance < nearest) break
    rows.push(`M0 ${round(yAt(distance))}H${width}`)
  }

  const columns = []
  const reach = Math.ceil(Math.max(vanishingX, width - vanishingX) / (COLUMN_SPREAD * nearest))
  for (let i = -reach; i <= reach; i += 1) {
    const x = (distance) => round(vanishingX + i * COLUMN_SPREAD * distance)
    columns.push(`M${x(farthest)} ${round(yAt(farthest))}L${x(nearest)} ${round(yAt(nearest))}`)
  }

  return [...rows, ...columns].join('')
}

/** Gradient stops along the frame's y axis, top to bottom. */
const fadeStops = ({ vanishing: [, vanishingY], direction, fade }) => {
  const stops = fade
    .map(([distance, opacity]) => [vanishingY + direction * distance, opacity])
    .sort(([a], [b]) => a - b)
  const start = stops[0][0]
  const end = stops.at(-1)[0]

  return { start, end, stops: stops.map(([y, opacity]) => [(y - start) / (end - start), opacity]) }
}

const ART = Object.fromEntries(
  Object.entries(SCENES).map(([key, scene]) => [
    key,
    {
      ...scene,
      planes: scene.planes.map((plane) => ({
        ...plane,
        d: planePath(scene, plane),
        gradient: fadeStops(plane),
      })),
    },
  ]),
)

/** One copy of a scene; `id` must be unique in the document. */
const GridArt = ({ id, scene, pin }) => {
  const { width, height, planes } = ART[scene]

  return (
    <svg
      className={classNames('block h-full w-full', PINS[pin])}
      style={pin ? { aspectRatio: `${width} / ${height}` } : undefined}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={pin ? 'xMidYMid meet' : 'xMidYMid slice'}
      focusable="false"
    >
      <defs>
        {planes.map(({ name, gradient: { start, end, stops } }) => (
          <linearGradient
            key={name}
            id={`${id}-${name}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={start}
            x2="0"
            y2={end}
          >
            {stops.map(([offset, opacity]) => (
              <stop key={offset} offset={offset} stopColor="currentColor" stopOpacity={opacity} />
            ))}
          </linearGradient>
        ))}
      </defs>
      {planes.map(({ name, d }) => (
        <path
          key={name}
          d={d}
          fill="none"
          stroke={`url(#${id}-${name})`}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  )
}

/**
 * Decorative perspective-grid backdrop; size and place it from the consumer.
 *
 * - `hero`: ceiling and floor filling the box like a cover background.
 * - `band`: a mirrored ceiling pinned to the top edge and a floor pinned to
 *   the bottom edge, each at full width and its own proportions.
 * - `ceiling`: the band's top edge only.
 * - `disc`: a floor seen through a muted round window; set its width.
 */
const PerspectiveGrid = ({ scene = 'hero', className }) => {
  const id = useId()
  const rootClassName = classNames(
    'pointer-events-none relative overflow-hidden text-gray-200',
    scene === 'disc' && DISC,
    className,
  )

  if (scene === 'band') {
    return (
      <div className={rootClassName} aria-hidden="true">
        {['ceiling', 'floor'].map((edge) => (
          <div key={edge} className={HALVES[edge]}>
            <GridArt id={`${id}-${edge}`} scene={edge} pin={edge === 'ceiling' ? 'top' : 'bottom'} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={rootClassName} aria-hidden="true">
      <GridArt id={id} scene={scene} pin={scene === 'ceiling' ? 'top' : undefined} />
    </div>
  )
}

export default PerspectiveGrid
