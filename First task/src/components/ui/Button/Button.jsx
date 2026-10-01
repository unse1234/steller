import { classNames } from '../../../utils/classNames.js'
import './Button.css'

/**
 * Renders a link styled as a button when `href` is set, otherwise a <button>.
 * `as` overrides the element, e.g. `as="span"` for a purely visual pill
 * inside an illustration.
 */
const Button = ({ as, href, variant = 'outline', size = 'md', className, children, ...rest }) => {
  const buttonClassName = classNames(
    'button',
    `button--${variant}`,
    size !== 'md' && `button--${size}`,
    className,
  )
  const Element = as ?? (href ? 'a' : 'button')
  const elementProps = Element === 'button' ? { type: 'button' } : {}

  return (
    <Element className={buttonClassName} href={href} {...elementProps} {...rest}>
      {children}
    </Element>
  )
}

export default Button
