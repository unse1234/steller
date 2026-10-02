import FeatureShowcase from '../components/sections/FeatureShowcase/FeatureShowcase.jsx'
import FeatureSpotlight from '../components/sections/FeatureSpotlight/FeatureSpotlight.jsx'
import GetStarted from '../components/sections/GetStarted/GetStarted.jsx'
import Hero from '../components/sections/Hero/Hero.jsx'
import Integrations from '../components/sections/Integrations/Integrations.jsx'
import KeyFeatures from '../components/sections/KeyFeatures/KeyFeatures.jsx'
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
  </>
)

export default HomePage
