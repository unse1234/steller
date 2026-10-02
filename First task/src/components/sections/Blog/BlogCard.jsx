import { assets } from '../../../assets/index.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Button from '../../ui/Button/Button.jsx'
import ButtonIcon from '../../ui/Button/ButtonIcon.jsx'

/** Article teaser: framed cover, tags, title, excerpt and a read-more link. */
const BlogCard = ({ title, excerpt, href, tags, cover, coverLabel }) => (
  <article className="flex h-full flex-col items-start">
    {/* Cover art inset in a hairline frame. */}
    <div className="self-stretch rounded-md border border-border-subtle bg-surface p-(--ring-width-sm)">
      <AssetSlot className="aspect-326/285 w-full rounded-sm object-cover" src={cover} alt={coverLabel} name="blog-cover" />
    </div>
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag} className="rounded-pill bg-background-muted px-2 py-0.5 text-xs leading-5">
          {tag}
        </li>
      ))}
    </ul>
    <h3 className="mt-3 text-[1.375rem] leading-7.25 font-regular tracking-snug">{title}</h3>
    <p className="mt-2.25 mb-auto text-md leading-comfortable tracking-snug text-secondary">{excerpt}</p>
    <Button className="mt-6" href={href}>
      Read More<span className="sr-only">: {title}</span>
      <ButtonIcon src={assets.icons.arrowRight} name="arrow-icon" />
    </Button>
  </article>
)

export default BlogCard
