import { assets } from '../assets/index.js'
import { attendees, sarahSmith } from './people.js'

const { icons } = assets

export const heroShowcase = {
  visualLabel:
    'Preview of the Stellar app: 12K customers, a personal greeting for Sarah Smith, an upcoming sales meeting and key performance highlights.',
  stat: {
    icon: icons.siren,
    value: '12K',
    label: 'Customers',
  },
  profile: {
    greeting: 'Hi Sarah Smith,',
    prompt: 'What would you like to explore today?',
    person: {
      ...sarahSmith,
      date: 'July 27, 2023',
      dateTime: '2023-07-27',
    },
    location: {
      icon: icons.mapPin,
      label: 'Sydney, Australia, 2000',
    },
  },
  meeting: {
    title: 'Sales Meeting',
    time: '11:00 - 01:30',
    attendees,
    additionalAttendees: 8,
  },
  highlights: {
    title: 'Stellar Highlights',
    metrics: [
      { label: 'Avg. Client Rating', value: '8.8', suffix: '/10', trend: 'up' },
      { label: 'Avg. Quotes', value: '748', trend: 'down' },
      { label: 'Avg. Agent Earnings', value: '$4,500', trend: 'up' },
      { label: 'Avg. Client Stellar', value: '92%', trend: 'up' },
    ],
  },
}
