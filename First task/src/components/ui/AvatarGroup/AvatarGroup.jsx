import { classNames } from '../../../utils/classNames.js'
import Avatar from '../Avatar/Avatar.jsx'

/* Each item overlaps the previous one and is outlined in white. */
const ITEM_CLASS_NAME =
  'relative z-(--avatar-stack-level,0) flex-none rounded-[50%] ring-(length:--avatar-group-ring) ring-surface not-first:-ms-(--avatar-group-overlap)'

/**
 * Overlapping row of avatars; earlier avatars sit on top of later ones.
 * Avatar size is set with `--avatar-group-size` (default 40px), which an
 * ancestor can also set. The overlap, outline and count text scale with it,
 * in the design's proportions.
 */
const AvatarGroup = ({ people, additionalCount = 0, className }) => (
  <ul
    className={classNames(
      'isolate flex items-center',
      '[--avatar-size:var(--avatar-group-size,40px)] [--avatar-group-overlap:calc(var(--avatar-size)*0.3)] [--avatar-group-ring:calc(var(--avatar-size)*0.04)]',
      className,
    )}
  >
    {people.map((person, index) => (
      <li
        key={person.name}
        className={ITEM_CLASS_NAME}
        style={{ '--avatar-stack-level': people.length - index }}
      >
        <Avatar src={person.avatar} name={person.name} />
      </li>
    ))}
    {additionalCount > 0 && (
      <li
        className={classNames(
          ITEM_CLASS_NAME,
          'grid size-(--avatar-size) place-items-center bg-surface text-[calc(var(--avatar-size)*0.3)] text-primary ring-1 ring-gray-150',
        )}
      >
        <span aria-hidden="true">+{additionalCount}</span>
        <span className="sr-only">and {additionalCount} more</span>
      </li>
    )}
  </ul>
)

export default AvatarGroup
