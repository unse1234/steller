import { classNames } from '../../../utils/classNames.js'
import AvatarGroup from '../../ui/AvatarGroup/AvatarGroup.jsx'
import Card from '../../ui/Card/Card.jsx'
import './EventCard.css'

const EventCard = ({ title, time, attendees, additionalAttendees, className }) => (
  <Card className={classNames('event-card', className)}>
    <p className="event-card__title">{title}</p>
    <p className="event-card__time">{time}</p>
    <AvatarGroup
      className="event-card__attendees"
      people={attendees}
      additionalCount={additionalAttendees}
    />
  </Card>
)

export default EventCard
