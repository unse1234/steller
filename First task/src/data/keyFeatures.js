import { assets } from '../assets/index.js'

const { icons, phones } = assets

export const keyFeatures = {
  features: [
    {
      title: 'Deploy faster together',
      description: 'Gain a competitive edge with our SEO optimization tools',
      icon: icons.flame,
    },
    {
      title: 'Beautiful No-Code',
      description: "Enhance your website's visibility and drive targeted traffic",
      icon: icons.bolt,
    },
    {
      title: 'Good Communication',
      description: 'Experience the Stellar difference and unlock the true potential',
      icon: icons.pieChart,
    },
    {
      title: 'Easily Customised',
      description: 'From content creation and deployment to performance',
      icon: icons.bell,
    },
  ],
  phones: {
    back: phones.back,
    front: phones.front,
    visualLabel:
      'Stellar on two phones: the home screen in front, a Beautiful Design feature screen behind.',
  },
}
