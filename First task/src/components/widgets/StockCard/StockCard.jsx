import { classNames } from '../../../utils/classNames.js'
import Card from '../../ui/Card/Card.jsx'
import Sparkline from '../../ui/Sparkline/Sparkline.jsx'
import './StockCard.css'

const CHART_WIDTH = 170
const CHART_HEIGHT = 44

const StockCard = ({ title, periods, activePeriod, stocks, className }) => (
  <Card className={classNames('stock-card', className)}>
    <div className="stock-card__header">
      <p className="stock-card__title">{title}</p>
      <ul className="stock-card__periods">
        {periods.map((period) => (
          <li
            key={period}
            className={classNames(
              'stock-card__period',
              period === activePeriod && 'stock-card__period--active',
            )}
          >
            {period}
          </li>
        ))}
      </ul>
    </div>

    <hr className="card__divider stock-card__divider" />

    <ul className="stock-card__list">
      {stocks.map(({ symbol, change, trend, price, chart }) => (
        <li key={symbol} className="stock-card__row">
          <div>
            <p className="stock-card__meta">
              {symbol}
              <span className={classNames('stock-card__change', `stock-card__change--${trend}`)}>
                {change}
              </span>
            </p>
            <p className="stock-card__price">{price}</p>
          </div>
          <Sparkline
            className="stock-card__chart"
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
