import { testimonials } from '../../../data/testimonials.js'
import Button from '../../ui/Button/Button.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import './Testimonials.css'

const TITLE_ID = 'testimonials-title'

const Testimonials = () => (
  <section className="testimonials" aria-labelledby={TITLE_ID}>
    <PerspectiveGrid className="testimonials__grid" scene="ceiling" />

    <div className="container container--compact">
      <SectionHeading
        className="testimonials__heading"
        size="3xl"
        align="center"
        eyebrow="Our Customers"
        title="See what our customers are saying"
        titleId={TITLE_ID}
      />

      <div className="testimonials__wall">
        <ul className="testimonials__list">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials__item">
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
        <Button className="testimonials__cta" href="#social" variant="accent" size="lg">
          Follow us on Social Media
        </Button>
      </div>
    </div>
  </section>
)

export default Testimonials
