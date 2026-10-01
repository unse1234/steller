import { assets } from '../assets/index.js'

const { icons } = assets

export const featureShowcase = {
  features: [
    {
      title: 'Beautiful Design',
      description:
        'Gain a competitive edge with our SEO optimization tools, so your site ranks higher.',
      icon: icons.apps,
      preview: {
        type: 'dashboard',
        title: 'Dashboard',
        visualLabel: 'Dashboard preview with Date, Mail and Console shortcuts and a CSV import panel.',
        actions: [
          { label: 'Date', icon: icons.calendar },
          { label: 'Mail', icon: icons.mail },
          { label: 'Console', icon: icons.keyhole },
        ],
        upload: {
          title: 'Import CSV',
          text: 'Lorem ipsum dolor sit amet, consectetur.',
        },
      },
    },
    {
      title: 'Clean Development',
      description:
        'Unlock the power of data analytics and gain actionable insights to make informed decisions.',
      icon: icons.database,
      preview: {
        type: 'filters',
        title: 'Stellar Filters',
        visualLabel: 'Data flowing from the cloud through Stellar filters.',
        sourceIcon: icons.cloud,
        filterIcon: icons.filter,
      },
    },
    {
      title: 'Easily Customised',
      description:
        'From content creation and deployment to performance monitoring and optimization.',
      icon: icons.handHeart,
      preview: {
        type: 'analytics',
        title: 'Project Data & Analytics',
        visualLabel: 'Analytics breakdown: Sector 96%, Industry 32%, AAPL 72%.',
        rows: [
          { label: 'Sector', value: 96 },
          { label: 'Industry', value: 32 },
          { label: 'AAPL', value: 72 },
        ],
      },
    },
  ],
}
