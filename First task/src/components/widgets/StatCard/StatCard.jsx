import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import './StatCard.css'

const StatCard = ({ icon, value, label, className }) => (
  <Card className={classNames('stat-card', className)}>
    <AssetSlot className="stat-card__icon" src={icon} name="stat-icon" />
    <p className="stat-card__value">{value}</p>
    <p className="stat-card__label">{label}</p>
  </Card>
)

export default StatCard
