import { freeTrial } from '../../../data/freeTrial.js'
import Container from '../../layout/Container/Container.jsx'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import NewsletterForm from '../../ui/NewsletterForm/NewsletterForm.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const TITLE_ID = 'free-trial-title'

const FreeTrial = () => (
  <section
    className="relative isolate bg-background-muted py-section-lg desktop:pt-34.75 desktop:pb-36.75"
    aria-labelledby={TITLE_ID}
  >
    {/* The hero's perspective grid, split across the band as in the Powerful
        Features section. */}
    <PerspectiveGrid className="absolute inset-0 -z-1" scene="band" />

    {/* From desktop, copy beside the 461px form. */}
    <Container
      size="medium"
      className="grid gap-x-8 gap-y-10 desktop:grid-cols-[minmax(0,1fr)_minmax(0,28.8125rem)] desktop:[align-items:end]"
    >
      <SectionHeading
        titleClassName="tracking-snug"
        descriptionClassName="mt-3 text-base leading-normal font-regular tracking-snug"
        size="xl"
        eyebrow="Start building today!"
        title="Start your 7-day free trial"
        titleId={TITLE_ID}
        description="Experience the Stellar difference and unlock the true potential"
      />
      <NewsletterForm
        // The form's foot sits 8px below the copy's last line.
        className="desktop:-mb-2"
        layout="inline"
        submitLabel="Get Instant Access"
        note={
          <CheckList
            className="flex flex-wrap gap-x-10 gap-y-3 text-primary"
            itemClassName="text-md tracking-snug"
            iconClassName="size-6"
            items={freeTrial.perks}
          />
        }
        successMessage="Thanks! Check your inbox to start your free trial."
      />
    </Container>
  </section>
)

export default FreeTrial
