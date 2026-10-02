import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Avatar from '../../ui/Avatar/Avatar.jsx'
import Card from '../../ui/Card/Card.jsx'

/** Customer quote with its author and the network it was posted on. */
const TestimonialCard = ({ title, quote, author, network }) => (
  <Card as="figure" className="testimonial-card">
    <h3 className="testimonial-card__title">{title}</h3>
    <blockquote className="testimonial-card__quote">
      <p>{quote}</p>
    </blockquote>
    <figcaption className="testimonial-card__author">
      <Avatar className="testimonial-card__avatar" src={author.avatar} name={author.name} />
      <span className="testimonial-card__person">
        <span className="testimonial-card__name">{author.name}</span>
        <span className="testimonial-card__handle">{author.handle}</span>
      </span>
      <span className="testimonial-card__network">
        <AssetSlot className="testimonial-card__network-icon" src={network.icon} name="network-icon" />
        <span className="visually-hidden">on {network.name}</span>
      </span>
    </figcaption>
  </Card>
)

export default TestimonialCard
