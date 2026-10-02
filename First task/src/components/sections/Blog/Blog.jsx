import { blogPosts } from '../../../data/blog.js'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import BlogCard from './BlogCard.jsx'
import './Blog.css'

const TITLE_ID = 'blog-title'

const Blog = () => (
  <section id="blog" className="blog" aria-labelledby={TITLE_ID}>
    <div className="container container--compact">
      <div className="blog__header">
        <SectionHeading size="xl" eyebrow="Our Blog" title="Blog & Articles" titleId={TITLE_ID} />
        <p className="blog__intro">
          Unlock the power of data analytics and gain actionable insights to make informed business
          decisions. Enhance your website&apos;s visibility
        </p>
      </div>

      <ul className="blog__list">
        {blogPosts.map((post) => (
          <li key={post.href}>
            <BlogCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Blog
