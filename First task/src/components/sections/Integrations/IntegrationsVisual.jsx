import { assets } from '../../../assets/index.js'
import { integrations } from '../../../data/integrations.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'

const { visualLabel, map, apps } = integrations

/*
 * Connectors on the 1008 x 395 map. Outer pairs are joined directly; inner
 * nodes run to the hub (centre 504,197.5, radius 70) with a 23px chamfer at
 * each corner, meeting the hub at 45°. The right half mirrors the left.
 */
const CONNECTORS = [
  'M88 44H216',
  'M304 44H414L437 67V130.5L454.5 148',
  'M348 197.5H434',
  'M88 351H216',
  'M304 351H414L437 328V264.5L454.5 247',
  'M920 44H792',
  'M704 44H594L571 67V130.5L553.5 148',
  'M660 197.5H574',
  'M920 351H792',
  'M704 351H594L571 328V264.5L553.5 247',
]

const position = ({ x, y }) => ({
  '--x': x / map.width,
  '--y': y / map.height,
})

/* A disc on the map, centred on its position. */
const DISC = 'absolute grid aspect-square -translate-1/2 place-items-center rounded-[50%] bg-surface'

/* 140px white disc holding a 124px outlined circle. */
const HUB = [
  'top-1/2 left-1/2 w-[13.89%] shadow-floating-soft',
  'after:absolute after:inset-[5.71%] after:rounded-[50%] after:border after:border-border-subtle',
].join(' ')

/* 88px node */
const NODE = 'top-[calc(var(--y)*100%)] left-[calc(var(--x)*100%)] w-[8.73%] border border-border-subtle'

/**
 * The integration map scales as one: nodes are placed and sized as
 * fractions of the 1008 x 395 design map, connectors stay 1px.
 */
const IntegrationsVisual = () => (
  <div
    className="relative isolate mt-15.5 aspect-(--map-aspect) w-full max-w-252"
    role="img"
    aria-label={visualLabel}
    style={{ '--map-aspect': `${map.width} / ${map.height}` }}
  >
    <svg
      className="absolute inset-0 -z-1 h-full w-full fill-none stroke-border stroke-1"
      viewBox={`0 0 ${map.width} ${map.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CONNECTORS.map((path) => (
        <path key={path} d={path} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>

    <span className={classNames(DISC, HUB)}>
      {/* 48px mark */}
      <AssetSlot className="aspect-19/14 w-[34.3%]" src={assets.logoMark} name="logo-mark" />
    </span>

    {apps.map((app) => (
      <span key={app.name} className={classNames(DISC, NODE)} style={position(app)}>
        {/* 32px glyph */}
        <AssetSlot className="aspect-square w-[36.4%] object-contain" src={app.icon} name="integration-icon" />
      </span>
    ))}
  </div>
)

export default IntegrationsVisual
