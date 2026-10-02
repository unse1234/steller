import { assets } from '../../../assets/index.js'
import { integrations } from '../../../data/integrations.js'
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

const IntegrationsVisual = () => (
  <div
    className="integrations-visual"
    role="img"
    aria-label={visualLabel}
    style={{ '--map-aspect': `${map.width} / ${map.height}` }}
  >
    <svg
      className="integrations-visual__connectors"
      viewBox={`0 0 ${map.width} ${map.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CONNECTORS.map((path) => (
        <path key={path} d={path} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>

    <span className="integrations-visual__hub">
      <AssetSlot className="integrations-visual__hub-mark" src={assets.logoMark} name="logo-mark" />
    </span>

    {apps.map((app) => (
      <span key={app.name} className="integrations-visual__node" style={position(app)}>
        <AssetSlot className="integrations-visual__icon" src={app.icon} name="integration-icon" />
      </span>
    ))}
  </div>
)

export default IntegrationsVisual
