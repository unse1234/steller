import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Button from '../../ui/Button/Button.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'
import './FleetCard.css'

const FleetCard = ({ title, summary, actionLabel, items, className }) => (
  <Card className={classNames('fleet-card', className)}>
    <div className="fleet-card__header">
      <div>
        <p className="fleet-card__title">{title}</p>
        <p className="fleet-card__summary">{summary}</p>
      </div>
      <Button as="span" className="fleet-card__action" size="sm">
        {actionLabel}
      </Button>
    </div>

    <CardDivider className="fleet-card__divider" />

    <ul className="fleet-card__list">
      {items.map(({ name, detail, icon, value }) => (
        <li key={name} className="fleet-card__item">
          <span className="fleet-card__icon">
            <AssetSlot className="fleet-card__icon-mark" src={icon} name="fleet-item-icon" />
          </span>
          <div className="fleet-card__text">
            <p className="fleet-card__name">{name}</p>
            <p className="fleet-card__detail">{detail}</p>
          </div>
          <p className="fleet-card__value">
            <AssetSlot
              className="fleet-card__trend"
              src={assets.icons.arrowUpRight}
              alt="Trending up"
              name="trend-up-icon"
            />
            {value}
          </p>
        </li>
      ))}
    </ul>
  </Card>
)

export default FleetCard
