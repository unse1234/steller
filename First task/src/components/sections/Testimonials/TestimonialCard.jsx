import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Avatar from '../../ui/Avatar/Avatar.jsx'
import Card from '../../ui/Card/Card.jsx'

/** Customer quote with its author and the network it was posted on. */
const TestimonialCard = ({ title, quote, author, network }) => (
  <Card as="figure" className="rounded-md p-8 tracking-snug">
    <h3 className="text-base leading-6 font-medium">{title}</h3>
    <blockquote className="m-0 mt-3 text-md leading-comfortable text-secondary">
      <p>{quote}</p>
    </blockquote>
    <figcaption className="mt-10 flex items-center gap-4">
      <Avatar className="flex-none [--avatar-size:48px]" src={author.avatar} name={author.name} />
      <span className="me-auto grid min-w-0 gap-y-0.5">
        <span className="text-md leading-6">{author.name}</span>
        <span className="text-sm leading-5 text-accent">{author.handle}</span>
      </span>
      <span className="grid aspect-square w-12 flex-none place-items-center rounded-[50%] border border-border-subtle">
        <AssetSlot className="size-5 object-contain" src={network.icon} name="network-icon" />
        <span className="sr-only">on {network.name}</span>
      </span>
    </figcaption>
  </Card>
)

export default TestimonialCard
