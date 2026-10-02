import { assets } from '../../../assets/index.js'
import { heroShowcase } from '../../../data/heroShowcase.js'
import { classNames } from '../../../utils/classNames.js'
import DeviceMockup from '../../ui/DeviceMockup/DeviceMockup.jsx'
import EventCard from '../../widgets/EventCard/EventCard.jsx'
import MetricsCard from '../../widgets/MetricsCard/MetricsCard.jsx'
import ProfileCard from '../../widgets/ProfileCard/ProfileCard.jsx'
import StatCard from '../../widgets/StatCard/StatCard.jsx'

const { visualLabel, stat, profile, meeting, highlights } = heroShowcase

/*
 * Mobile:  compact widgets side by side, device below.
 * Tablet:  both widget stacks side by side, device below.
 * Desktop: stacks flank the device and rise above its top edge.
 */
const LAYOUT = [
  "isolate grid grid-cols-2 gap-x-3 gap-y-12 [grid-template-areas:'start_end'_'device_device'] tablet:gap-x-6",
  "desktop:grid-cols-[minmax(max-content,1fr)_minmax(0,658px)_minmax(max-content,1fr)] desktop:gap-x-0 desktop:[grid-template-areas:'start_device_end']",
].join(' ')

const STACK = 'flex flex-col gap-12 desktop:-mt-23.75 desktop:[align-self:start]'

/* Phones show the two compact cards only, at a narrower size. */
const CARD = 'max-tablet:w-full max-tablet:max-w-44 max-tablet:p-5 max-tablet:[--avatar-group-size:36px]'
const DETAIL_CARD = `${CARD} max-tablet:hidden`

/**
 * Product preview: a phone flanked by two stacks of dashboard widgets.
 * It is illustrative, so assistive technology gets a single summary instead
 * of the sample data inside the widgets.
 */
const HeroShowcase = ({ className }) => (
  <div className={classNames(LAYOUT, className)} role="img" aria-label={visualLabel}>
    <div className={classNames(STACK, 'items-end [grid-area:start]')}>
      <StatCard className={CARD} {...stat} />
      <ProfileCard className={DETAIL_CARD} {...profile} />
    </div>

    {/* The design places the device slightly right of the page centre. */}
    <DeviceMockup
      className="justify-self-center [grid-area:device] desktop:translate-x-3"
      src={assets.deviceMockup}
    />

    <div className={classNames(STACK, 'items-start [grid-area:end]')}>
      <EventCard className={CARD} {...meeting} />
      <MetricsCard className={DETAIL_CARD} {...highlights} />
    </div>
  </div>
)

export default HeroShowcase
