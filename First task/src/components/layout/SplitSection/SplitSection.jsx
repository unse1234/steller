import { classNames } from '../../../utils/classNames.js'
import './SplitSection.css'

/**
 * Two-column section: copy beside a visual. Copy always comes first in the
 * document (and on narrow screens); `mediaFirst` moves the visual to the left
 * column on desktop.
 */
const SplitSection = ({ labelledBy, content, media, mediaFirst = false, className }) => (
  <section
    className={classNames('split-section', mediaFirst && 'split-section--media-first', className)}
    aria-labelledby={labelledBy}
  >
    <div className="container container--narrow split-section__inner">
      <div className="split-section__content">{content}</div>
      <div className="split-section__media">{media}</div>
    </div>
  </section>
)

export default SplitSection
