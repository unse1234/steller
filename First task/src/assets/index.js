/*
 * Asset manifest. Files are named in kebab-case after what they depict;
 * the data files decide what each one is used for.
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
import arrowRightIcon from './images/icons/arrow-right.svg'
import arrowUpRightIcon from './images/icons/arrow-up-right.png'
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
import mapPinIcon from './images/icons/map-pin.png'
import moreVerticalIcon from './images/icons/more-vertical.svg'
import pieChartIcon from './images/icons/pie-chart.svg'
import sirenIcon from './images/icons/siren.svg'

// Avatars
import attendeeOneAvatar from './images/avatars/attendee-1.svg'
import attendeeTwoAvatar from './images/avatars/attendee-2.svg'
import attendeeThreeAvatar from './images/avatars/attendee-3.svg'
import sarahSmithAvatar from './images/avatars/sarah-smith.svg'

// Company logos
import amplitudeLogo from './images/company-logos/amplitude.svg'
import invoice2goLogo from './images/company-logos/invoice2go.svg'
import pengLogo from './images/company-logos/peng.svg'
import republicaLogo from './images/company-logos/republica.png'
import slackLogo from './images/company-logos/slack.svg'
import veroxFloorLogo from './images/company-logos/verox-floor.svg'

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
  },
  avatars: {
    attendeeOne: attendeeOneAvatar,
    attendeeTwo: attendeeTwoAvatar,
    attendeeThree: attendeeThreeAvatar,
    sarahSmith: sarahSmithAvatar,
  },
  companyLogos: {
    amplitude: amplitudeLogo,
    invoice2go: invoice2goLogo,
    peng: pengLogo,
    republica: republicaLogo,
    slack: slackLogo,
    veroxFloor: veroxFloorLogo,
  },
}
