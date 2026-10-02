import { blogPosts } from '../../../data/blog.js'
import Container from '../../layout/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import BlogCard from './BlogCard.jsx'

const TITLE_ID = 'blog-title'

const Blog = () => (
  <section id="blog" className="py-section-lg desktop:pb-37.5" aria-labelledby={TITLE_ID}>
    <Container size="compact">
      <div className="grid gap-x-8 gap-y-6 [align-items:end] desktop:grid-cols-[449px_minmax(0,1fr)]">
        <SectionHeading size="xl" eyebrow="Our Blog" title="Blog & Articles" titleId={TITLE_ID} />
        <p className="max-w-136 text-base leading-relaxed tracking-snug text-secondary">
          Unlock the power of data analytics and gain actionable insights to make informed business
          decisions. Enhance your website&apos;s visibility
        </p>
      </div>

      {/* Cards at least 288px wide fill the row; desktop shows three. */}
      <ul className="mt-13.75 grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-x-8 gap-y-14 desktop:grid-cols-3">
        {blogPosts.map((post) => (
          <li key={post.href}>
            <BlogCard {...post} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
)

export default Blog
