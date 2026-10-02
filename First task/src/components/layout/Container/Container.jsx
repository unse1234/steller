import { classNames } from '../../../utils/classNames.js'

/* Content measure of each size; the side gutter is added on both sides. */
const SIZES = {
  page: 'max-w-[calc(var(--container-page)+2*var(--spacing-gutter))]',
  medium: 'max-w-[calc(var(--container-medium)+2*var(--spacing-gutter))]',
  narrow: 'max-w-[calc(var(--container-narrow)+2*var(--spacing-gutter))]',
  compact: 'max-w-[calc(var(--container-compact)+2*var(--spacing-gutter))]',
}

/** Centred page column with the responsive side gutter. */
const Container = ({ size = 'page', className, children }) => (
  <div className={classNames('mx-auto w-full px-gutter', SIZES[size], className)}>{children}</div>
)

export default Container
