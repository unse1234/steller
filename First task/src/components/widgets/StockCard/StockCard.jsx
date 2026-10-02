import { classNames } from '../../../utils/classNames.js'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'
import Sparkline from '../../ui/Sparkline/Sparkline.jsx'

const CHART_WIDTH = 170
const CHART_HEIGHT = 44

/* Trend caret drawn as a small triangle before the percentage. */
const CHANGE_CLASS_NAME =
  'inline-flex items-center gap-1.5 before:border-x-[3px] before:border-b-[3px] before:border-x-transparent before:border-b-current'

const TRENDS = {
  up: 'text-accent',
  down: 'before:rotate-180',
}

const StockCard = ({ title, periods, activePeriod, stocks, className }) => (
  <Card className={classNames('p-6.5', className)}>
    <div className="flex items-center justify-between">
      <p className="text-[1.0625rem]">{title}</p>
      <ul className="flex gap-2">
        {periods.map((period) => (
          <li
            key={period}
            className={classNames(
              'grid h-5 place-items-center rounded-pill border border-transparent px-2 text-2xs leading-none text-muted',
              period === activePeriod && 'border-border text-primary',
            )}
          >
            {period}
          </li>
        ))}
      </ul>
    </div>

    <CardDivider className="mt-5.5 mb-6.5" />

    <ul className="grid gap-y-6.25">
      {stocks.map(({ symbol, change, trend, price, chart }) => (
        <li key={symbol} className="flex items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-4.5 text-2xs text-muted">
              {symbol}
              <span className={classNames(CHANGE_CLASS_NAME, TRENDS[trend])}>
                {change}
              </span>
            </p>
            <p className="mt-2 text-sm font-medium">{price}</p>
          </div>
          <Sparkline
            className="h-11 w-42.5 flex-none"
            points={chart}
            width={CHART_WIDTH}
            height={CHART_HEIGHT}
            tone={trend === 'up' ? 'accent' : 'neutral'}
          />
        </li>
      ))}
    </ul>
  </Card>
)

export default StockCard
