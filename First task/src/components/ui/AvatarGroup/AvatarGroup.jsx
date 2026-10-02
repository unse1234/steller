import { classNames } from '../../../utils/classNames.js'
import Avatar from '../Avatar/Avatar.jsx'
import './AvatarGroup.css'

/** Overlapping row of avatars; earlier avatars sit on top of later ones. */
const AvatarGroup = ({ people, additionalCount = 0, className }) => (
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
        <span className="sr-only">and {additionalCount} more</span>
      </li>
    )}
  </ul>
)

export default AvatarGroup
