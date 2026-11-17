import { developer } from './developer.js'

export const footerTagline = 'A fictional SaaS website concept. Front-end implementation by M.Unse, based on the original Stellar design.'
export const footerColumns = [
  { title: 'Explore', links: [{ label: 'Home', href: '/' }, { label: 'About the demo', href: '/about' }, { label: 'Product concept', href: '/#product' }] },
  { title: 'Details', links: [{ label: 'Integration concept', href: '/#integrations' }, { label: 'Design notes', href: '/#blog' }, { label: 'Demo FAQ', href: '/about#about-faq-heading' }] },
  { title: 'Work with me', links: [{ label: 'Project package', href: '/#pricing' }, { label: 'Contact M.Unse', href: '/#contact' }, { label: 'Send a brief', href: developer.emailHref }] },
  { title: 'Credits', links: [{ label: 'Developer GitHub', href: developer.githubHref }, { label: 'Project source', href: developer.repositoryHref }, { label: 'Original design: Flowbase', href: 'https://www.flowbase.co/' }] },
]
// Preserve the original template attribution.
export const copyright = 'Copyright ©2023 Flowbase.co'
export const socialLinks = [{ name: 'Email M.Unse', href: developer.emailHref }, { name: 'GitHub', href: developer.githubHref }]
