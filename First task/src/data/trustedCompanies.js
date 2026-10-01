import { assets } from '../assets/index.js'

const { companyLogos } = assets

/**
 * Logos shown in the "trusted by" ticker, in display order. Width and height
 * are the logo's rendered size in px, taken from the design.
 */
export const trustedCompanies = [
  { name: 'Peng', logo: companyLogos.peng, width: 106, height: 10 },
  { name: 'Amplitude', logo: companyLogos.amplitude, width: 93, height: 20 },
  { name: 'Verox Floor', logo: companyLogos.veroxFloor, width: 98, height: 12 },
  { name: 'Republica', logo: companyLogos.republica, width: 116, height: 12 },
  { name: 'Amplitude', logo: companyLogos.amplitude, width: 93, height: 20 },
  { name: 'Invoice2go', logo: companyLogos.invoice2go, width: 103, height: 18 },
]
