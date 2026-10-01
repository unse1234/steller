import { assets } from '../../../assets/index.js'
import { heroShowcase } from '../../../data/heroShowcase.js'
import { classNames } from '../../../utils/classNames.js'
import DeviceMockup from '../../ui/DeviceMockup/DeviceMockup.jsx'
import EventCard from '../../widgets/EventCard/EventCard.jsx'
import MetricsCard from '../../widgets/MetricsCard/MetricsCard.jsx'
import ProfileCard from '../../widgets/ProfileCard/ProfileCard.jsx'
import StatCard from '../../widgets/StatCard/StatCard.jsx'
import './HeroShowcase.css'

const { description, stat, profile, meeting, highlights } = heroShowcase

/**
 * Product preview: a phone flanked by two stacks of dashboard widgets.
 * It is illustrative, so assistive technology gets a single summary instead
 * of the sample data inside the widgets.
 */
const HeroShowcase = ({ className }) => (
  <div className={classNames('hero-showcase', className)} role="img" aria-label={description}>
    <div className="hero-showcase__stack hero-showcase__stack--start">
      <StatCard className="hero-showcase__card" {...stat} />
      <ProfileCard className="hero-showcase__card hero-showcase__card--detail" {...profile} />
    </div>

    <DeviceMockup className="hero-showcase__device" src={assets.deviceMockup} />

    <div className="hero-showcase__stack hero-showcase__stack--end">
      <EventCard className="hero-showcase__card" {...meeting} />
      <MetricsCard className="hero-showcase__card hero-showcase__card--detail" {...highlights} />
    </div>
  </div>
)

export default HeroShowcase
