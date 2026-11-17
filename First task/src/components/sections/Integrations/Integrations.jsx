import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import ButtonIcon from '../../ui/Button/ButtonIcon.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import IntegrationsVisual from './IntegrationsVisual.jsx'
import { developer } from '../../../data/developer.js'

const TITLE_ID = 'integrations-title'

const Integrations = () => (
  <section id="integrations" className="scroll-mt-52 py-section-lg" aria-labelledby={TITLE_ID}>
    <Container size="compact" className="flex flex-col items-center text-center">
      <SectionHeading
        // Keeps the design's break after "easier".
        titleClassName="max-w-[11em]"
        size="xl"
        align="center"
        eyebrow="An integration concept"
        title={
          <>
            Your workspace,{' '}
            <span className="font-regular text-accent">connected.</span>
          </>
        }
        titleId={TITLE_ID}
      />

      <IntegrationsVisual />

      <p className="mt-16.5 max-w-150 text-base leading-relaxed tracking-snug text-secondary">
        This illustration explores how connected tools could look in a product interface.
        The brand artwork is illustrative; this demo has no live service integrations.
      </p>

      <Button className="mt-10" href={developer.emailHref} variant="accent">
        Discuss your requirements
        <ButtonIcon src={assets.icons.arrowForward} name="arrow-icon" />
      </Button>
    </Container>
  </section>
)

export default Integrations
