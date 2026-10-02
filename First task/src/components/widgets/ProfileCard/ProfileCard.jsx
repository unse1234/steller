import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Avatar from '../../ui/Avatar/Avatar.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'
import './ProfileCard.css'

const ProfileCard = ({ greeting, prompt, person, location, className }) => (
  <Card className={classNames('profile-card', className)}>
    <p className="profile-card__greeting">{greeting}</p>
    <p className="profile-card__prompt">{prompt}</p>

    <div className="profile-card__person">
      <Avatar className="profile-card__avatar" src={person.avatar} name={person.name} />
      <div className="profile-card__identity">
        <p className="profile-card__name">{person.name}</p>
        <time className="profile-card__date" dateTime={person.dateTime}>
          {person.date}
        </time>
      </div>
    </div>

    <CardDivider className="profile-card__divider" />

    <p className="profile-card__location">
      <AssetSlot className="profile-card__location-icon" src={location.icon} name="location-icon" />
      {location.label}
    </p>
  </Card>
)

export default ProfileCard
