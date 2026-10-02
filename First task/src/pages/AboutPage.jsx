import AboutBenefits from '../components/sections/AboutBenefits/AboutBenefits.jsx'
import AboutFaq from '../components/sections/AboutFaq/AboutFaq.jsx'
import AboutHero from '../components/sections/AboutHero/AboutHero.jsx'
import AboutMetrics from '../components/sections/AboutMetrics/AboutMetrics.jsx'
import AboutStory from '../components/sections/AboutStory/AboutStory.jsx'
import AboutTeam from '../components/sections/AboutTeam/AboutTeam.jsx'
import AboutValues from '../components/sections/AboutValues/AboutValues.jsx'
import FreeTrial from '../components/sections/FreeTrial/FreeTrial.jsx'
import Testimonials from '../components/sections/Testimonials/Testimonials.jsx'
import TrustedBy from '../components/sections/TrustedBy/TrustedBy.jsx'
import DottedGlobe from '../components/ui/DottedGlobe/DottedGlobe.jsx'

const AboutPage = () => (
  <>
    <AboutHero />
    <AboutMetrics />
    <AboutStory />
    <AboutValues />
    <AboutBenefits />
    <div className="relative isolate overflow-hidden desktop:pt-11.75">
      <DottedGlobe className="absolute top-4 left-1/2 -z-1 w-[min(100%,1080px)] -translate-x-1/2 opacity-55 desktop:top-22.75" />
      <TrustedBy />
    </div>
    <AboutTeam />
    {/* The About design sets this band 3px tighter than the home page. */}
    <Testimonials className="desktop:pt-[calc(var(--spacing-section-lg)-1px)]" />
    <AboutFaq />
    <div id="free-trial" className="scroll-mt-32"><FreeTrial /></div>
  </>
)

export default AboutPage
