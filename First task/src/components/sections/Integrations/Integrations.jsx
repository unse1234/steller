import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import ButtonIcon from '../../ui/Button/ButtonIcon.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import IntegrationsVisual from './IntegrationsVisual.jsx'

const TITLE_ID = 'integrations-title'

const Integrations = () => (
  <section id="py-section-lg" className="py-section-lg" aria-labelledby={TITLE_ID}>
    <Container size="compact" className="flex flex-col items-center text-center">
      <SectionHeading
        // Keeps the design's break after "easier".
        titleClassName="max-w-[11em]"
        size="xl"
        align="center"
        eyebrow="Our Primary Integrations"
        title={
          <>
            Make productivity easier with{' '}
            <span className="font-regular text-accent">50+ Integrations</span>
          </>
        }
        titleId={TITLE_ID}
      />

      <IntegrationsVisual />

      <p className="mt-16.5 max-w-150 text-base leading-relaxed tracking-snug text-secondary">
        Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher,
        attracts more visitors, and generates leads like never before.
      </p>

      <Button className="mt-10" href="#integrations" variant="accent">
        See Integrations
        <ButtonIcon src={assets.icons.arrowForward} name="arrow-icon" />
      </Button>
    </Container>
  </section>
)

export default Integrations
