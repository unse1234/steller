import { classNames } from '../../../utils/classNames.js'
import AvatarGroup from '../../ui/AvatarGroup/AvatarGroup.jsx'
import Card from '../../ui/Card/Card.jsx'

const EventCard = ({ title, time, attendees, additionalAttendees, className }) => (
  <Card className={classNames('flex aspect-square w-44 flex-col items-start px-6 pt-6 pb-5.25', className)}>
    <p className="text-lg">{title}</p>
    <p className="mt-1 text-xs font-medium text-muted">{time}</p>
    <AvatarGroup
      className="mt-auto"
      people={attendees}
      additionalCount={additionalAttendees}
    />
  </Card>
)

export default EventCard
