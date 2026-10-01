import { classNames } from '../../../utils/classNames.js'
import './Card.css'

/** Floating white surface: hairline border, outer white ring and soft shadow. */
const Card = ({ as = 'div', className, children }) => {
  const Element = as

  return <Element className={classNames('card', className)}>{children}</Element>
}

export default Card
