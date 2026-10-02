import { assets } from '../assets/index.js'

const { covers } = assets

export const blogPosts = [
  {
    title: 'The Art of Designing Timeless Masterpieces',
    excerpt:
      'Dive into the realm of limitless creativity as we explore the techniques and inspirations behind crafting visually stunning and timeless designs that captivate hearts and minds.',
    href: '/blog/the-art-of-designing-timeless-masterpieces',
    tags: ['Slate', 'Contrux'],
    cover: covers.stellarDevices,
    coverLabel: 'The Stellar website on a desktop screen and a phone.',
  },
  {
    title: 'Stay Ahead of the Curve in the Visual World',
    excerpt:
      'Discover the secrets of designing impactful brand experiences that leave a lasting impression on your audience, forging deep connections and driving brand loyalty.',
    href: '/blog/stay-ahead-of-the-curve-in-the-visual-world',
    tags: ['Slate', 'Contrux'],
    cover: covers.integrationMap,
    coverLabel: 'Stellar connected to Twitter and Facebook.',
  },
  {
    title: 'Crafting Emotionally Engaging User Experiences',
    excerpt:
      "Join us on a journey of exploration as we push the boundaries of design, unveiling cutting-edge concepts and techniques that challenge conventional norms and redefine what's possible.",
    href: '/blog/crafting-emotionally-engaging-user-experiences',
    tags: ['Slate', 'Contrux'],
    cover: covers.stellarPhones,
    coverLabel: 'Two phones showing the Stellar app.',
  },
]
