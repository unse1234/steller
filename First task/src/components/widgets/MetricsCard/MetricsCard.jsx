import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import './MetricsCard.css'

const TREND_ICONS = {
  up: { src: assets.icons.arrowUpRight, label: 'Trending up' },
  down: { src: assets.icons.arrowDownLeft, label: 'Trending down' },
}

const MetricsCard = ({ title, metrics, className }) => (
  <Card className={classNames('metrics-card', className)}>
    <p className="metrics-card__title">{title}</p>
    <hr className="card__divider metrics-card__divider" />
    <dl className="metrics-card__list">
      {metrics.map(({ label, value, suffix, trend }) => (
        <div key={label} className="metrics-card__row">
          <dt className="metrics-card__label">{label}</dt>
          <dd className="metrics-card__value">
            <AssetSlot
              className="metrics-card__trend"
              src={TREND_ICONS[trend].src}
              alt={TREND_ICONS[trend].label}
              name={`trend-${trend}-icon`}
            />
            <span>
              {value}
              {suffix && <span className="metrics-card__suffix">{suffix}</span>}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  </Card>
)

export default MetricsCard
