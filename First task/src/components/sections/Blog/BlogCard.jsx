import { assets } from '../../../assets/index.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Button from '../../ui/Button/Button.jsx'
import ButtonIcon from '../../ui/Button/ButtonIcon.jsx'

/** Article teaser: framed cover, tags, title, excerpt and a read-more link. */
const BlogCard = ({ title, excerpt, href, tags, cover, coverLabel }) => (
  <article className="blog-card">
    <div className="blog-card__cover">
      <AssetSlot className="blog-card__image" src={cover} alt={coverLabel} name="blog-cover" />
    </div>
    <ul className="blog-card__tags" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag} className="blog-card__tag">
          {tag}
        </li>
      ))}
    </ul>
    <h3 className="blog-card__title">{title}</h3>
    <p className="blog-card__excerpt">{excerpt}</p>
    <Button className="blog-card__cta" href={href}>
      Read More<span className="sr-only">: {title}</span>
      <ButtonIcon src={assets.icons.arrowRight} name="arrow-icon" />
    </Button>
  </article>
)

export default BlogCard
