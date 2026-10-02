/*
 * Asset manifest. Files are named in kebab-case after what they depict;
 * the data files decide what each one is used for. An entry set to null
 * renders as an AssetSlot placeholder until its file is supplied.
 */

// Brand
import logoMarkImage from './images/brand/logo-mark.svg'

// Mockups
import deviceMockupImage from './images/mockups/device-mockup.svg'
import phoneBackImage from './images/mockups/phone-back.svg'
import phoneFrontImage from './images/mockups/phone-front.svg'

// Icons
import appsIcon from './images/icons/apps.svg'
import arrowDownLeftIcon from './images/icons/arrow-down-left.svg'
import arrowForwardIcon from './images/icons/arrow-forward.svg'
import arrowRightIcon from './images/icons/arrow-right.svg'
import arrowUpRightIcon from './images/icons/arrow-up-right.svg'
import bellIcon from './images/icons/bell.svg'
import boltIcon from './images/icons/bolt.svg'
import brushIcon from './images/icons/brush.svg'
import calendarIcon from './images/icons/calendar.svg'
import checkCircleIcon from './images/icons/check-circle.svg'
import circlesIcon from './images/icons/circles.svg'
import closeIcon from './images/icons/close.svg'
import cloudIcon from './images/icons/cloud.svg'
import databaseIcon from './images/icons/database.svg'
import filterIcon from './images/icons/filter.svg'
import flameIcon from './images/icons/flame.svg'
import handHeartIcon from './images/icons/hand-heart.svg'
import keyholeIcon from './images/icons/keyhole.svg'
import mailIcon from './images/icons/mail.svg'
import mapPinIcon from './images/icons/map-pin.svg'
import moreVerticalIcon from './images/icons/more-vertical.svg'
import pieChartIcon from './images/icons/pie-chart.svg'
import sirenIcon from './images/icons/siren.svg'

// Avatars
import attendeeOneAvatar from './images/avatars/attendee-1.svg'
import attendeeTwoAvatar from './images/avatars/attendee-2.svg'
import attendeeThreeAvatar from './images/avatars/attendee-3.svg'
import sarahSmithAvatar from './images/avatars/sarah-smith.svg'
import amayaLocostaAvatar from './images/avatars/amaya-locosta.svg'
import figNelsonAvatar from './images/avatars/fig-nelson.svg'
import sadieBerlinAvatar from './images/avatars/sadie-berlin.svg'

// Social glyphs (footer)
import facebookGlyph from './images/social-glyphs/facebook.svg'
import instagramGlyph from './images/social-glyphs/instagram.svg'
import twitterGlyph from './images/social-glyphs/twitter.svg'

// Company logos
import amplitudeLogo from './images/company-logos/amplitude.svg'
import invoice2goLogo from './images/company-logos/invoice2go.svg'
import pengLogo from './images/company-logos/peng.svg'
import republicaLogo from './images/company-logos/republica.svg'
import slackLogo from './images/company-logos/slack.svg'
import veroxFloorLogo from './images/company-logos/verox-floor.svg'
import facebookLogo from './images/company-logos/facebook.svg'
import figmaLogo from './images/company-logos/figma.svg'
import instagramLogo from './images/company-logos/instagram.svg'
import mailchimpLogo from './images/company-logos/mailchimp.svg'
import mondayLogo from './images/company-logos/monday.svg'
import pinterestLogo from './images/company-logos/pinterest.svg'
import snapchatLogo from './images/company-logos/snapchat.svg'
import twitterLogo from './images/company-logos/twitter.svg'
import dropboxLogo from './images/company-logos/dropbox.svg'

// About page artwork
import globeImage from './images/about/globe.png'
import ourStoryImage from './images/about/our-story.jpg'
import stellarPhoneImage from './images/about/stellar-phone.png'
import valueCustomerFocusImage from './images/about/value-customer-focus.svg'
import valueGrowingImage from './images/about/value-growing.svg'

// Blog covers
import integrationMapCover from './images/blog-covers/integration-map.svg'
import stellarDevicesCover from './images/blog-covers/stellar-devices.svg'
import stellarPhonesCover from './images/blog-covers/stellar-phones.svg'

export const assets = {
  logoMark: logoMarkImage,
  deviceMockup: deviceMockupImage,
  phones: {
    back: phoneBackImage,
    front: phoneFrontImage,
  },
  icons: {
    apps: appsIcon,
    arrowDownLeft: arrowDownLeftIcon,
    arrowForward: arrowForwardIcon,
    arrowRight: arrowRightIcon,
    arrowUpRight: arrowUpRightIcon,
    bell: bellIcon,
    bolt: boltIcon,
    brush: brushIcon,
    calendar: calendarIcon,
    checkCircle: checkCircleIcon,
    circles: circlesIcon,
    close: closeIcon,
    cloud: cloudIcon,
    database: databaseIcon,
    filter: filterIcon,
    flame: flameIcon,
    handHeart: handHeartIcon,
    keyhole: keyholeIcon,
    mail: mailIcon,
    mapPin: mapPinIcon,
    moreVertical: moreVerticalIcon,
    pieChart: pieChartIcon,
    siren: sirenIcon,
    // Violet social glyphs (footer).
    facebook: facebookGlyph,
    instagram: instagramGlyph,
    twitter: twitterGlyph,
  },
  avatars: {
    attendeeOne: attendeeOneAvatar,
    attendeeTwo: attendeeTwoAvatar,
    attendeeThree: attendeeThreeAvatar,
    sarahSmith: sarahSmithAvatar,
    amayaLocosta: amayaLocostaAvatar,
    figNelson: figNelsonAvatar,
    sadieBerlin: sadieBerlinAvatar,
  },
  companyLogos: {
    amplitude: amplitudeLogo,
    invoice2go: invoice2goLogo,
    peng: pengLogo,
    republica: republicaLogo,
    slack: slackLogo,
    veroxFloor: veroxFloorLogo,
  },
  // Full-colour app marks; Slack reuses its company logo.
  brandIcons: {
    dropbox: dropboxLogo,
    facebook: facebookLogo,
    figma: figmaLogo,
    instagram: instagramLogo,
    mailchimp: mailchimpLogo,
    monday: mondayLogo,
    pinterest: pinterestLogo,
    slack: slackLogo,
    snapchat: snapchatLogo,
    twitter: twitterLogo,
  },
  // About page photographs and artwork.
  about: {
    globe: globeImage,
    ourStory: ourStoryImage,
    stellarPhone: stellarPhoneImage,
    valueCustomerFocus: valueCustomerFocusImage,
    valueGrowing: valueGrowingImage,
  },
  // Blog cover art.
  covers: {
    integrationMap: integrationMapCover,
    stellarDevices: stellarDevicesCover,
    stellarPhones: stellarPhonesCover,
  },
}
