import { classNames } from '../../../utils/classNames.js'

/*
 * Hover fill: a solid `--button-fill` layer that sweeps in from the left.
 * Layers start at the border edge so the transparent border never shows a
 * gap. On the way in, the label changes colour just behind the sweep.
 */
const BASE =
  'inline-flex h-10.5 cursor-pointer items-center justify-center gap-3 rounded-pill border border-transparent px-4 text-md leading-none font-regular whitespace-nowrap no-underline ' +
  'bg-[linear-gradient(var(--button-fill),var(--button-fill))] bg-size-[0%_100%] bg-left bg-no-repeat bg-origin-border ' +
  'transition-[background-size,color,border-color] duration-medium ease-standard'

const INTERACTIVE =
  'hover:bg-size-[100%_100%] hover:delay-[0s,80ms,0s] focus-visible:bg-size-[100%_100%] focus-visible:delay-[0s,80ms,0s]'

const SIZES = {
  sm: 'h-8.5 px-3 text-2xs font-medium',
  md: '',
  lg: 'h-12 px-4.5 text-sm font-medium',
}

const VARIANTS = {
  /* Fills with the brand violet; label and icon turn white. */
  outline: {
    base: 'border-border bg-surface text-primary [--button-fill:var(--color-violet-600)]',
    interactive:
      'group/outline-button hover:border-violet-600 hover:text-inverse focus-visible:border-violet-600 focus-visible:text-inverse',
  },
  /* Filled variants deepen to a darker violet. */
  primary: {
    base: 'bg-violet-600 text-inverse [--button-fill:var(--color-violet-700)]',
  },
  /* Raised gradient pill, the design's emphasised call to action. The hover
     fill is layered over the gradient so the gradient never drops out. */
  accent: {
    base:
      'border-transparent text-inverse shadow-accent-button [--button-fill:var(--color-violet-700)] ' +
      'bg-[linear-gradient(var(--button-fill),var(--button-fill)),var(--background-image-gradient-accent)] bg-size-[0%_100%,100%_100%]',
    interactive: 'hover:bg-size-[100%_100%,100%_100%] focus-visible:bg-size-[100%_100%,100%_100%]',
  },
  soft: {
    base: 'bg-background-muted text-primary [--button-fill:var(--color-gray-100)]',
  },
}

/**
 * Renders a link styled as a button when `href` is set, otherwise a <button>.
 * `as` overrides the element, e.g. `as="span"` for a purely visual pill
 * inside an illustration; only links and buttons react to hover and focus.
 */
const Button = ({ as, href, variant = 'outline', size = 'md', className, children, ...rest }) => {
  const Element = as ?? (href ? 'a' : 'button')
  const isInteractive = Element === 'a' || Element === 'button'
  const elementProps = Element === 'button' ? { type: 'button' } : {}
  const { base, interactive } = VARIANTS[variant]

  return (
    <Element
      className={classNames(
        BASE,
        isInteractive && INTERACTIVE,
        SIZES[size],
        base,
        isInteractive && interactive,
        className,
      )}
      href={href}
      {...elementProps}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default Button
