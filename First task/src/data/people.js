import { assets } from '../assets/index.js'

const { avatars } = assets

/** Sample team shown in avatar stacks across the page. */
export const attendees = [
  { name: 'Attendee one', avatar: avatars.attendeeOne },
  { name: 'Attendee two', avatar: avatars.attendeeTwo },
  { name: 'Attendee three', avatar: avatars.attendeeThree },
]

export const sarahSmith = {
  name: 'Sarah Smith',
  avatar: avatars.sarahSmith,
}

export const figNelson = {
  name: 'Fig Nelson',
  handle: '@fignel_sooon',
  avatar: avatars.figNelson,
}

export const sadieBerlin = {
  name: 'Sadie Berlin',
  handle: '@sadiieberlin00',
  avatar: avatars.sadieBerlin,
}

export const amayaLocosta = {
  name: 'Amaya Locosta',
  handle: '@amaylocosta',
  avatar: avatars.amayaLocosta,
}
