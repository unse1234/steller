import { assets } from '../../../assets/index.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Button from '../../ui/Button/Button.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import IntegrationsVisual from './IntegrationsVisual.jsx'
import './Integrations.css'

const TITLE_ID = 'integrations-title'

const Integrations = () => (
  <section id="integrations" className="integrations" aria-labelledby={TITLE_ID}>
    <div className="container container--compact integrations__inner">
      <SectionHeading
        className="integrations__heading"
        size="xl"
        align="center"
        eyebrow="Our Primary Integrations"
        title={
          <>
            Make productivity easier with{' '}
            <span className="integrations__highlight">50+ Integrations</span>
          </>
        }
        titleId={TITLE_ID}
      />

      <IntegrationsVisual />

      <p className="integrations__summary">
        Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher,
        attracts more visitors, and generates leads like never before.
      </p>

      <Button className="integrations__cta" href="#integrations" variant="accent">
        See Integrations
        <AssetSlot className="button__icon" src={assets.icons.arrowForward} name="arrow-icon" />
      </Button>
    </div>
  </section>
)

export default Integrations
