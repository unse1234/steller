import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'

/*
 * Each item is a fixed-width logo cell followed by a hairline divider, so the
 * rhythm stays even regardless of logo width. The track holds two identical
 * lists and moves by exactly one list width per loop, starting from the
 * frame shown in the design (--logo-ticker-offset). The offset is a
 * `transform` because the animation moves the track with `transform` too.
 */
const ROOT =
  'group/ticker overflow-hidden [--logo-ticker-cell:172px] [--logo-ticker-divider-gap:44px] [--logo-ticker-height:32px] [--logo-ticker-offset:-66px]'

/**
 * Continuously scrolling row of logos, clipped to its container. The list is
 * rendered twice so the loop is seamless; the copy is hidden from assistive
 * technology. Each item takes `{ name, logo, width, height }`. Hovering
 * pauses the loop.
 */
const LogoTicker = ({ items, label, className }) => (
  <div className={classNames(ROOT, className)}>
    <div className="flex w-max animate-logo-ticker transform-[translateX(var(--logo-ticker-offset))] group-hover/ticker:[animation-play-state:paused] motion-reduce:animate-none">
      {['original', 'copy'].map((set) => (
        <ul
          key={set}
          className="flex"
          aria-label={set === 'original' ? label : undefined}
          aria-hidden={set === 'copy' || undefined}
        >
          {items.map(({ name, logo, width, height }, index) => (
            <li
              key={`${name}-${index}`}
              className="grid h-(--logo-ticker-height) grid-cols-[var(--logo-ticker-cell)_1px] place-items-center gap-x-(--logo-ticker-divider-gap) after:h-full after:w-px after:bg-border-subtle"
              style={{ '--logo-width': `${width}px`, '--logo-height': `${height}px` }}
            >
              <AssetSlot className="h-(--logo-height) w-(--logo-width)" src={logo} alt={name} name="company-logo" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
)

export default LogoTicker
