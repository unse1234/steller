import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Avatar from '../../ui/Avatar/Avatar.jsx'
import Card from '../../ui/Card/Card.jsx'
import CardDivider from '../../ui/Card/CardDivider.jsx'

const ProfileCard = ({ greeting, prompt, person, location, className }) => (
  <Card className={classNames('w-70 px-7 pt-7 pb-5', className)}>
    <p className="text-lg">{greeting}</p>
    <p className="mt-2.5 text-xs text-muted">{prompt}</p>

    <div className="mt-6 flex items-center gap-3">
      <Avatar className="[--avatar-size:48px]" src={person.avatar} name={person.name} />
      <div className="grid gap-y-0.5">
        <p className="text-md">{person.name}</p>
        <time className="text-xs text-muted" dateTime={person.dateTime}>
          {person.date}
        </time>
      </div>
    </div>

    <CardDivider className="my-6" />

    <p className="flex items-center gap-1 text-xs font-medium text-secondary">
      {/* 24px tile with the 14px pin centred, as in the design. */}
      <AssetSlot className="size-6 px-1.25 py-0.75 object-contain" src={location.icon} name="location-icon" />
      {location.label}
    </p>
  </Card>
)

export default ProfileCard
