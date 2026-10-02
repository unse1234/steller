import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Card from '../../ui/Card/Card.jsx'
import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'

const RevenueCard = ({ amount, caption, progress, className }) => (
  <Card className={classNames('pt-6 pr-6 pb-6.5 pl-6.5', className)}>
    <div className="flex items-center justify-between gap-4">
      <p className="text-[1.8125rem] leading-tight font-medium tracking-tight">{amount}</p>
      <AssetSlot className="h-2.5 w-0.75 flex-none" src={assets.icons.moreVertical} name="more-icon" />
    </div>
    <p className="mt-3.25 text-xs text-muted">{caption}</p>
    <div className="mt-7.75 grid gap-y-3">
      {progress.map(({ label, value, tone }) => (
        <ProgressBar key={label} value={value} tone={tone} />
      ))}
    </div>
  </Card>
)

export default RevenueCard
