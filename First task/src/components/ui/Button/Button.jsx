import { classNames } from '../../../utils/classNames.js'
import './Button.css'

/** Renders a link styled as a button when `href` is set, otherwise a <button>. */
const Button = ({ href, variant = 'outline', size = 'md', className, children, ...rest }) => {
  const buttonClassName = classNames(
    'button',
    `button--${variant}`,
    size !== 'md' && `button--${size}`,
    className,
  )

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={buttonClassName} {...rest}>
      {children}
    </button>
  )
}

export default Button
