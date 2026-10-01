export const featureSpotlight = {
  features: [
    'Share the extra text you want to add as a feature.',
    'Add your feature text here.',
    "Add the text you'd like to include as a feature.",
  ],
  visualLabel:
    'Preview of Stellar dashboards: stock details for ASDX and TSA with price charts, and $16,248.50 in new customer revenue this month.',
  stocks: {
    title: 'Stock Details',
    periods: ['10M', '1H', '1D'],
    activePeriod: '1D',
    // Chart points are [x, y] in a 170 × 44 space, traced from the design.
    stocks: [
      {
        symbol: 'ASDX',
        change: '2.78%',
        trend: 'up',
        price: '$201.56',
        chart: [
          [0, 29], [23.5, 11], [41.7, 25.2], [52.2, 18.7], [70.4, 31.7],
          [105.7, 5.6], [122.6, 16.1], [130.5, 13.5], [151.3, 26.5], [170, 12.2],
        ],
      },
      {
        symbol: 'TSA',
        change: '1.34%',
        trend: 'down',
        price: '$64.33',
        chart: [
          [0, 15.9], [19.6, 31.6], [41.7, 19.8], [50.9, 25], [70.4, 13.3],
          [109.6, 39.4], [122.6, 29], [130.5, 31.6], [151.3, 18.5], [170, 31.6],
        ],
      },
    ],
  },
  revenue: {
    amount: '$16,248.50',
    caption: 'New Customers This Month',
    progress: [
      { label: 'Returning customers', value: 44, tone: 'neutral' },
      { label: 'New customers', value: 96, tone: 'accent' },
    ],
  },
}
