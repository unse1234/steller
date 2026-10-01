import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'
import './RevenueCard.css'

const RevenueCard = ({ amount, caption, progress, className }) => (
  <Card className={classNames('revenue-card', className)}>
    <div className="revenue-card__header">
      <p className="revenue-card__amount">{amount}</p>
      <AssetSlot className="revenue-card__menu" src={assets.icons.moreVertical} name="more-icon" />
    </div>
    <p className="revenue-card__caption">{caption}</p>
    <div className="revenue-card__progress">
      {progress.map(({ label, value, tone }) => (
        <ProgressBar key={label} value={value} tone={tone} />
      ))}
    </div>
  </Card>
)

export default RevenueCard
