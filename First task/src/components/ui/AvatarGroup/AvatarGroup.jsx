import { classNames } from '../../../utils/classNames.js'
import Avatar from '../Avatar/Avatar.jsx'

/* Each item overlaps the previous one by a third and is outlined in white. */
const ITEM_CLASS_NAME =
  'relative z-(--avatar-stack-level,0) flex-none rounded-[50%] ring-2 ring-surface not-first:-ms-(--avatar-group-overlap)'

/**
 * Overlapping row of avatars; earlier avatars sit on top of later ones.
 * Avatar size is set with `--avatar-group-size` (default 42px), which an
 * ancestor can also set.
 */
const AvatarGroup = ({ people, additionalCount = 0, className }) => (
  <ul
    className={classNames(
      'isolate flex items-center',
      '[--avatar-size:var(--avatar-group-size,42px)] [--avatar-group-overlap:calc(var(--avatar-size)/3)]',
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
          'grid size-(--avatar-size) place-items-center border border-border-subtle bg-surface text-xs text-secondary',
        )}
      >
        <span aria-hidden="true">+{additionalCount}</span>
        <span className="sr-only">and {additionalCount} more</span>
      </li>
    )}
  </ul>
)

export default AvatarGroup
