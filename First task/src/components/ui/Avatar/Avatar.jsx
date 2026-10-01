import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../AssetSlot/AssetSlot.jsx'
import './Avatar.css'

/** Circular profile picture. Size is controlled with `--avatar-size`. */
export const Avatar = ({ src, name, className }) => (
  <AssetSlot
    className={classNames('avatar', className)}
    src={src}
    alt={name}
    name="avatar"
    shape="circle"
  />
)

/** Overlapping row of avatars; earlier avatars sit on top of later ones. */
export const AvatarGroup = ({ people, additionalCount = 0, className }) => (
  <ul className={classNames('avatar-group', className)}>
    {people.map((person, index) => (
      <li
        key={person.name}
        className="avatar-group__item"
        style={{ '--avatar-stack-level': people.length - index }}
      >
        <Avatar src={person.avatar} name={person.name} />
      </li>
    ))}
    {additionalCount > 0 && (
      <li className="avatar-group__item avatar-group__overflow">
        <span aria-hidden="true">+{additionalCount}</span>
        <span className="visually-hidden">and {additionalCount} more</span>
      </li>
    )}
  </ul>
)
