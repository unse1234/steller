import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Button from '../../ui/Button/Button.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'

const FleetCard = ({ title, summary, actionLabel, items, className }) => (
  <Card className={classNames('px-6.5 pt-7.5 pb-6.5', className)}>
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-md-plus">{title}</p>
        <p className="mt-1 text-2xs font-medium text-muted">{summary}</p>
      </div>
      <Button as="span" size="sm">
        {actionLabel}
      </Button>
    </div>

    <CardDivider className="mt-5 mb-5.5" />

    <ul className="grid gap-y-3.5">
      {items.map(({ name, detail, icon, value }) => (
        <li key={name} className="flex items-center gap-4">
          <span className="grid aspect-square w-10.5 flex-none place-items-center rounded-[50%] border border-border-subtle">
            <AssetSlot className="size-3.5" src={icon} name="fleet-item-icon" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{name}</p>
            <p className="mt-0.5 text-2xs font-medium text-muted">{detail}</p>
          </div>
          <p className="flex items-center gap-1.5 text-2xs font-medium">
            <AssetSlot
              className="size-2.25"
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
