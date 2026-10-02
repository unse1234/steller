import { testimonials } from '../../../data/testimonials.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'

const TITLE_ID = 'testimonials-title'

/* The band's foot darkens, fading the last cards out under the call to action. */
const SECTION = [
  'relative isolate bg-background-muted pt-[calc(var(--spacing-section-lg)+3px)] pb-3',
  'after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-64',
  'after:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-gray-150)_0%,transparent)_0%,var(--color-gray-150)_90%)]',
].join(' ')

const Testimonials = () => (
  <section className={SECTION} aria-labelledby={TITLE_ID}>
    {/* The hero's perspective-grid ceiling across the top half of the band. */}
    <PerspectiveGrid className="absolute inset-x-0 top-0 -z-1 h-1/2" scene="ceiling" />

    <Container size="compact">
      <SectionHeading
        // Keeps the design's break after "our".
        titleClassName="max-w-[9.6em]"
        size="3xl"
        align="center"
        eyebrow="Our Customers"
        title="See what our customers are saying"
        titleId={TITLE_ID}
      />

      <div className="relative mt-14.5">
        {/* Masonry wall: cards flow down each column in turn. Items are padded to
            make room for each card's outer ring; gaps measure 32px between card
            borders. */}
        <ul className="isolate -mx-(--ring-width-sm) gap-x-[calc(--spacing(8)-var(--ring-width-sm)*2)] tablet:columns-2 desktop:columns-3">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="break-inside-avoid p-(--ring-width-sm) not-first:mt-[calc(--spacing(8)-var(--ring-width-sm)*2)]"
            >
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
        <Button
          className="absolute bottom-14.75 left-1/2 z-1 -translate-x-1/2 text-md font-regular"
          href="#social"
          variant="accent"
          size="lg"
        >
          Follow us on Social Media
        </Button>
      </div>
    </Container>
  </section>
)

export default Testimonials
