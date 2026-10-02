import { classNames } from '../../../utils/classNames.js'

/* Display sizes set Inter's display optical size without tracking. */
const DISPLAY_TITLE = 'opsz-display tracking-[normal]'

const SIZES = {
  md: {
    eyebrow: '',
    title: 'text-[clamp(1.875rem,1.6rem+1.1vw,2.5rem)] leading-[1.375]', // 30px → 40px
  },
  lg: {
    eyebrow: '',
    title: 'text-[clamp(1.875rem,1.53rem+1.2vw,2.625rem)] leading-[1.275]', // 30px → 42px
  },
  xl: {
    eyebrow: 'text-md',
    title: `mt-[15px] text-display-sm leading-[1.285] ${DISPLAY_TITLE}`,
  },
  '2xl': {
    eyebrow: 'text-xs font-medium',
    title: `text-display-xl leading-[1.39] ${DISPLAY_TITLE}`,
  },
  '3xl': {
    eyebrow: 'text-xs font-medium',
    title: `text-display-lg leading-[1.25] ${DISPLAY_TITLE}`,
  },
}

/** Eyebrow, section title and optional supporting paragraph. */
const SectionHeading = ({
  eyebrow,
  title,
  titleId,
  description,
  size = 'md',
  align = 'start',
  className,
  titleClassName,
  descriptionClassName,
}) => {
  const isCentered = align === 'center'

  return (
    <div className={classNames(isCentered && 'text-center', className)}>
      <p className={classNames('text-sm text-accent', SIZES[size].eyebrow)}>{eyebrow}</p>
      <h2
        id={titleId}
        className={classNames(
          'mt-3 font-medium tracking-snugger',
          SIZES[size].title,
          isCentered && 'mx-auto',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={classNames(
            'mt-3.5 text-md-plus leading-[2.1] font-medium tracking-snug text-secondary',
            isCentered && 'mx-auto',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
