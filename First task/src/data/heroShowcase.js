import { assets } from '../assets/index.js'

export const heroShowcase = {
  description:
    'Preview of the Stellar app: 12K customers, a personal greeting for Sarah Smith, an upcoming sales meeting and key performance highlights.',
  stat: {
    icon: assets.icons.customers,
    value: '12K',
    label: 'Customers',
  },
  profile: {
    greeting: 'Hi Sarah Smith,',
    prompt: 'What would you like to explore today?',
    person: {
      name: 'Sarah Smith',
      avatar: assets.avatars.sarahSmith,
      date: 'July 27, 2023',
      dateTime: '2023-07-27',
    },
    location: {
      icon: assets.icons.location,
      label: 'Sydney, Australia, 2000',
    },
  },
  meeting: {
    title: 'Sales Meeting',
    time: '11:00 - 01:30',
    attendees: [
      { name: 'Attendee one', avatar: assets.avatars.attendeeOne },
      { name: 'Attendee two', avatar: assets.avatars.attendeeTwo },
      { name: 'Attendee three', avatar: assets.avatars.attendeeThree },
    ],
    additionalAttendees: 8,
  },
  highlights: {
    title: 'Stellar Highlights',
    metrics: [
      { label: 'Avg. Client Rating', value: '8.8', suffix: '/10', trend: 'up' },
      { label: 'Avg. Quotes', value: '748', trend: 'down' },
      { label: 'Avg. Agent Earnings', value: '$4.500', trend: 'up' },
      { label: 'Avg. Client Stellar', value: '%92', trend: 'up' },
    ],
  },
}
