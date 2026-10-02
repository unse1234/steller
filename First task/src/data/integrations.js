import { assets } from '../assets/index.js'

const { brandIcons } = assets

/*
 * Apps around the Stellar hub, positioned on the design's 1008 x 395 map.
 * `x`/`y` are node centres in design pixels.
 */
export const integrations = {
  visualLabel:
    'Stellar at the centre, connected to Figma, monday.com, Twitter, Pinterest, Dropbox, Instagram, Mailchimp, Facebook, Slack and Snapchat.',
  map: { width: 1008, height: 395 },
  apps: [
    { name: 'Figma', icon: brandIcons.figma, x: 44, y: 44 },
    { name: 'monday.com', icon: brandIcons.monday, x: 260, y: 44 },
    { name: 'Twitter', icon: brandIcons.twitter, x: 304, y: 197.5 },
    { name: 'Pinterest', icon: brandIcons.pinterest, x: 44, y: 351 },
    { name: 'Dropbox', icon: brandIcons.dropbox, x: 260, y: 351 },
    { name: 'Instagram', icon: brandIcons.instagram, x: 748, y: 44 },
    { name: 'Mailchimp', icon: brandIcons.mailchimp, x: 964, y: 44 },
    { name: 'Facebook', icon: brandIcons.facebook, x: 704, y: 197.5 },
    { name: 'Slack', icon: brandIcons.slack, x: 748, y: 351 },
    { name: 'Snapchat', icon: brandIcons.snapchat, x: 964, y: 351 },
  ],
}
