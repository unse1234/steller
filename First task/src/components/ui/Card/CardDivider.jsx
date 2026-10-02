import { classNames } from '../../../utils/classNames.js'

/** Hairline rule between the sections of a Card. */
const CardDivider = ({ className }) => (
  <hr className={classNames('m-0 h-0 border-0 border-t border-t-border-subtle', className)} />
)

export default CardDivider
