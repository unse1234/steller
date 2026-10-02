import { classNames } from '../../../utils/classNames.js'
import Container from '../Container/Container.jsx'

/**
 * Two-column section: copy beside a visual. Copy always comes first in the
 * document (and on narrow screens); `mediaFirst` moves the visual to the left
 * column on desktop.
 *
 * Each column is half of the 1152px container. Visuals are 576px-wide
 * compositions, so the columns sit side by side only once a half can hold
 * one (1152px + gutters, 1232px); below that the visual stacks under the
 * copy. Wide screens scale the layout to the design's 1216px measure. The
 * copy column's width is `--split-content-width` (default 456px).
 */
const SplitSection = ({ labelledBy, content, media, mediaFirst = false, className }) => (
  <section
    className={classNames('overflow-x-clip py-section [--split-content-width:28.5rem]', className)}
    aria-labelledby={labelledBy}
  >
    <Container
      size="narrow"
      className="grid justify-items-center gap-y-12 min-[1232px]:grid-cols-2 min-[1232px]:items-center wide:zoom-(--scale-narrow-to-medium)"
    >
      <div className="w-full max-w-(--split-content-width)">{content}</div>
      <div
        className={classNames(
          'grid w-full justify-items-center',
          mediaFirst && 'min-[1232px]:col-1 min-[1232px]:row-1',
        )}
      >
        {media}
      </div>
    </Container>
  </section>
)

export default SplitSection
