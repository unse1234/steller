import { developer } from './developer.js'

export const primaryNavigation = [
  { label: 'Product', href: '/#product' },
  { label: 'About', href: '/about' },
  { label: 'Work with me', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Notes', href: '/#blog' },
]

export const accountLinks = {
  signIn: { label: 'About this demo', href: '/about' },
  signUp: { label: 'Hire M.Unse', href: developer.emailHref },
}
