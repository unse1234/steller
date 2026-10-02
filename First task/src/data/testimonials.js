import { assets } from '../assets/index.js'
import { amayaLocosta, figNelson, sadieBerlin } from './people.js'

const { brandIcons } = assets

const networks = {
  facebook: { name: 'Facebook', icon: brandIcons.facebook },
  instagram: { name: 'Instagram', icon: brandIcons.instagram },
  twitter: { name: 'Twitter', icon: brandIcons.twitter },
}

const quotes = {
  dashboards: "Stellar's user-friendly dashboards have simplified our digital strategy management.",
  insights:
    "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
  presence:
    "Stellar has truly transformed our online presence. With its powerful analytics and seamless integration, we've gained invaluable insights.",
}

/** Listed column by column, as the wall lays them out. */
export const testimonials = [
  { title: 'Incredibly useful product', quote: quotes.dashboards, author: figNelson, network: networks.twitter },
  { title: 'Incredibly useful product', quote: quotes.insights, author: sadieBerlin, network: networks.instagram },
  { title: 'Incredibly useful product', quote: quotes.presence, author: sadieBerlin, network: networks.instagram },
  { title: 'Incredibly useful product', quote: quotes.dashboards, author: figNelson, network: networks.twitter },
  { title: 'Incredibly useful product', quote: quotes.insights, author: amayaLocosta, network: networks.facebook },
  { title: 'Incredibly useful product', quote: quotes.dashboards, author: sadieBerlin, network: networks.instagram },
]
