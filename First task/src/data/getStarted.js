import { assets } from '../assets/index.js'
import { attendees } from './people.js'

const { companyLogos, icons } = assets

export const getStarted = {
  visualLabel:
    'Preview of Stellar workspaces: Slack Inc. at 62% progress with its team, and a fleet summary of 1,247 vehicles with the Stellar Template and UI Kit.',
  workspace: {
    name: 'Slack Inc.',
    updated: '12 Hours Ago',
    logo: companyLogos.slack,
    progress: 62,
    membersLabel: 'Stellar Peoples:',
    members: attendees,
    additionalMembers: 8,
    actionLabel: 'Join Us',
  },
  fleet: {
    title: 'Our Fleet Tonnage',
    summary: 'Total 1,247 vehicles',
    actionLabel: 'Review Fleet',
    items: [
      { name: 'Stellar Template', detail: '234 Components', icon: icons.circles, value: '$4,500' },
      { name: 'UI Kit', detail: '24+ Footer', icon: icons.brush, value: '$2,000' },
    ],
  },
}
