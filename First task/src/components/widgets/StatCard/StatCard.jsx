import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'

const StatCard = ({ icon, value, label, className }) => (
  <Card className={classNames('flex aspect-square w-44 flex-col items-start p-6', className)}>
    {/* 48px tile with the 28px glyph centred, as in the design. */}
    <AssetSlot className="size-12 px-2.5 py-2.25 object-contain" src={icon} name="stat-icon" />
    <p className="mt-3 text-2xl leading-tight font-medium tracking-tight">{value}</p>
    <p className="mt-1.5 text-md text-muted">{label}</p>
  </Card>
)

export default StatCard
