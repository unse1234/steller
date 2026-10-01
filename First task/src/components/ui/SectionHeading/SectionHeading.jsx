import { classNames } from '../../../utils/classNames.js'
import './SectionHeading.css'

/** Eyebrow, section title and optional supporting paragraph. */
const SectionHeading = ({
  eyebrow,
  title,
  titleId,
  description,
  size = 'md',
  align = 'start',
  className,
}) => (
  <div
    className={classNames(
      'section-heading',
      `section-heading--${size}`,
      align === 'center' && 'section-heading--center',
      className,
    )}
  >
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2 id={titleId} className="section-heading__title">
      {title}
    </h2>
    {description && <p className="section-heading__description">{description}</p>}
  </div>
)

export default SectionHeading
