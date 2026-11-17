import { developer } from '../../../data/developer.js'
import { freeTrial } from '../../../data/freeTrial.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const FreeTrial = () => (
  <section id="contact" className="relative isolate scroll-mt-52 bg-background-muted py-section-lg desktop:py-32" aria-labelledby="contact-title">
    <PerspectiveGrid className="absolute inset-0 -z-1" scene="band" />
    <Container size="medium" className="grid items-center gap-10 desktop:grid-cols-[minmax(0,1fr)_minmax(0,28.8125rem)] desktop:gap-16">
      <div>
        <SectionHeading eyebrow={'Work with ' + developer.name} title="Have a page to build?" titleId="contact-title" size="xl" description="I turn supplied designs into responsive HTML, CSS, JavaScript and React websites. Send your brief and deadline for a clear project scope." />
        <Button className="mt-8" href={developer.emailHref} variant="accent" size="lg">Email {developer.name}</Button>
        <a className="mt-5 block w-fit break-all text-md text-secondary underline-offset-4 hover:underline" href={developer.emailHref}>{developer.email}</a>
      </div>
      <div id="pricing" className="scroll-mt-52 rounded-lg border border-border bg-surface p-6 shadow-floating-soft tablet:p-8">
        <p className="text-xs font-semibold text-accent">LANDING-PAGE DEVELOPMENT</p>
        <p className="mt-4 text-display-sm font-medium">US$400 <span className="text-md font-regular text-muted">per agreed page</span></p>
        <CheckList className="mt-6" items={freeTrial.perks} />
        <p className="mt-6 text-sm leading-comfortable text-secondary">50% deposit, 50% after the agreed work passes review. A 48-hour turnaround starts after complete materials and the deposit are received. Confirm availability before booking.</p>
        <p className="mt-3 text-sm leading-comfortable text-muted">Additional pages or functionality are quoted separately. Domain and hosting costs are agreed with the client.</p>
      </div>
    </Container>
  </section>
)

export default FreeTrial
