import { assets } from '../assets/index.js'
import { accountLinks } from './navigation.js'

const { icons } = assets

export const footerTagline = 'Experience the Stellar difference and unlock the true potential'

export const footerColumns = [
  {
    title: 'Stellar Page',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '#about' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Blog', href: '#blog' },
      { label: 'Product', href: '#product' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Integration', href: '#integrations' },
      { label: 'Integration Detail', href: '/integrations/detail' },
      { label: 'Sign Up', href: accountLinks.signUp.href },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Login', href: accountLinks.signIn.href },
      { label: '404', href: '/404' },
      { label: 'More Templates', href: '/templates' },
    ],
  },
]

export const copyright = 'Copyright ©2023 Flowbase.co'

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: icons.facebook },
  { name: 'Twitter', href: 'https://twitter.com/', icon: icons.twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: icons.instagram },
]
