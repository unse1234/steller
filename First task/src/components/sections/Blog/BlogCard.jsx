import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'

/** Article teaser: framed cover, tags, title, excerpt and a read-more link. */
const BlogCard = ({ id, title, excerpt, paragraphs, tags, cover, coverLabel }) => (
  <article id={'article-' + id} className="flex h-full scroll-mt-52 flex-col items-start">
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
    <details className="group mt-6 w-full">
      <summary className="w-fit cursor-pointer rounded-pill border border-border px-4 py-3 text-md transition-colors hover:border-violet-300 hover:text-accent">Read the notes<span className="sr-only">: {title}</span></summary>
      <div className="mt-5 grid gap-3 text-md leading-comfortable text-secondary">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </details>
  </article>
)

export default BlogCard
