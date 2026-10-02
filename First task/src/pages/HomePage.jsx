import Blog from '../components/sections/Blog/Blog.jsx'
import FeatureShowcase from '../components/sections/FeatureShowcase/FeatureShowcase.jsx'
import FeatureSpotlight from '../components/sections/FeatureSpotlight/FeatureSpotlight.jsx'
import FreeTrial from '../components/sections/FreeTrial/FreeTrial.jsx'
import GetStarted from '../components/sections/GetStarted/GetStarted.jsx'
import Hero from '../components/sections/Hero/Hero.jsx'
import Integrations from '../components/sections/Integrations/Integrations.jsx'
import KeyFeatures from '../components/sections/KeyFeatures/KeyFeatures.jsx'
import Testimonials from '../components/sections/Testimonials/Testimonials.jsx'
import TrustedBy from '../components/sections/TrustedBy/TrustedBy.jsx'

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <FeatureSpotlight />
    <GetStarted />
    <FeatureShowcase />
    <KeyFeatures />
    <Integrations />
    <Testimonials />
    <Blog />
    <FreeTrial />
  </>
)

export default HomePage
