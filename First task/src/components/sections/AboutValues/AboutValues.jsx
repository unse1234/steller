import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import ValueMesh from './ValueMesh.jsx'

const values = [
  { title: 'Customer Focus', icon: assets.icons.bell, description: "Stellar is the game-changer you've been waiting for in the world of SaaS and technology. Gain unparalleled insights into your data with our robust analytics suite.", photo: assets.about.valueCustomerFocus, alt: 'A teammate collaborating at a desk', reverse: false },
  { title: 'Always be Growing', icon: assets.icons.apps, description: 'Uncover hidden patterns, track user behavior, and make data-driven decisions to propel your business forward. Optimized for SEO, Stellar ensures your website stands out', photo: assets.about.valueGrowing, alt: 'A teammate sharing ideas with a colleague', reverse: true },
]

const AboutValues = () => (
  <section className="relative isolate bg-background-muted py-section-lg desktop:pb-[117px]" aria-labelledby="about-values-title">
    <PerspectiveGrid className="absolute inset-0 -z-1" scene="band" />
    <Container className="max-w-[calc(1004px+2*var(--spacing-gutter))]">
      <SectionHeading titleId="about-values-title" eyebrow="Powerful Features" title="Our Company’s Values" size="3xl" align="center" titleClassName="mt-3.5 text-display-xl-plus" description="Our innovative SaaS template empowers businesses to stay ahead in the digital landscape." descriptionClassName="mt-4.5 max-w-105 text-base leading-relaxed font-regular tracking-snug" />
      <div className="mt-16 grid gap-8">
        {values.map(({ title, icon, description, photo, alt, reverse }) => (
          <div key={title} className={`grid gap-8 ${reverse ? 'tablet:grid-cols-[0.4fr_1fr]' : 'tablet:grid-cols-[1fr_0.4fr]'}`}>
            <article className={`relative isolate overflow-hidden rounded-md border border-border-subtle bg-surface p-7 ring-sm ring-surface tablet:p-9.5 ${reverse ? 'tablet:order-2' : ''}`}>
              <ValueMesh variant={reverse ? 'loop' : 'wave'} />
              <h3 className="flex items-center gap-4 text-[1.375rem] font-medium tracking-[normal] opsz-display"><span className="grid size-12 shrink-0 place-items-center rounded-pill border border-border"><img src={icon} alt="" className="size-8.5" /></span>{title}</h3>
              <p className="mt-4 max-w-125 text-base leading-relaxed tracking-snug text-secondary">{description}</p>
              <Button href="#free-trial" className="mt-7.75">Start Journey</Button>
            </article>
            <img src={photo} alt={alt} width="198" height="221" loading="lazy" className="h-72 w-full rounded-md object-cover ring-sm ring-surface tablet:h-full tablet:min-h-78" />
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default AboutValues

