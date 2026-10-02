import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'

const TREND_ICONS = {
  up: { src: assets.icons.arrowUpRight, label: 'Trending up' },
  down: { src: assets.icons.arrowDownLeft, label: 'Trending down' },
}

const MetricsCard = ({ title, metrics, className }) => (
  <Card className={classNames('w-70 px-7 pt-7 pb-6', className)}>
    <p className="text-lg">{title}</p>
    <CardDivider className="mt-5 mb-4.5" />
    <dl className="grid auto-rows-5 gap-y-4">
      {metrics.map(({ label, value, suffix, trend }) => (
        <div key={label} className="flex items-center justify-between gap-3 text-sm">
          <dt className="tracking-snug text-muted">{label}</dt>
          <dd className="flex items-center gap-2 text-xs font-medium">
            <AssetSlot
              className="size-2.25"
              src={TREND_ICONS[trend].src}
              alt={TREND_ICONS[trend].label}
              name={`trend-${trend}-icon`}
            />
            <span>
              {value}
              {suffix && <span className="text-subtle">{suffix}</span>}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  </Card>
)

export default MetricsCard
