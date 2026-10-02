import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const TITLE_ID = 'about-benefits-title'

const benefits = [
  {
    title: 'Deploy faster together',
    description: 'Real-Time Visibility - Monitor Performance Instantly',
    icon: assets.icons.flame,
  },
  {
    title: 'Beautiful No-Code',
    description: 'Intuitive Dashboards - Control at Your Fingertips',
    icon: assets.icons.bolt,
  },
  {
    title: 'Good Communication',
    description: 'Cutting-Edge Technology - Stay Ahead of the Curve',
    icon: assets.icons.pieChart,
  },
  {
    title: 'Easily Customised',
    description: 'SEO Optimization - Dominate Search Rankings',
    icon: assets.icons.bell,
  },
]

const BenefitList = ({ items }) => (
  <ul className="grid content-start gap-y-12 desktop:gap-y-16.25 desktop:pt-16">
    {items.map(({ title, description, icon }) => (
      <li key={title}>
        <span className="grid size-12 place-items-center rounded-[50%] border border-border-subtle bg-surface">
          <AssetSlot className="size-8" src={icon} name="benefit-icon" />
        </span>
        <h3 className="mt-4 text-base leading-6 font-regular">{title}</h3>
        <p className="mt-3 max-w-60 text-md leading-comfortable tracking-snug text-secondary">{description}</p>
      </li>
    ))}
  </ul>
)

const AboutBenefits = () => (
  <section className="pt-section-lg" aria-labelledby={TITLE_ID}>
    <Container className="max-w-[calc(1066px+2*var(--spacing-gutter))]">
      <SectionHeading
        size="xl"
        align="center"
        eyebrow="Available Stellar"
        title={<>Build a solution that wins<br className="hidden tablet:block" /> you more customers.</>}
        className="[&>p]:text-xs"
        titleClassName="mt-[18px] max-w-180"
        titleId={TITLE_ID}
      />

      <div className="mt-12.5 grid grid-cols-2 gap-x-6 gap-y-12 tablet:gap-x-12 desktop:grid-cols-[240px_minmax(0,1fr)_240px] desktop:gap-x-20">
        <div className="order-2 desktop:order-1">
          <BenefitList items={benefits.slice(0, 2)} />
        </div>

        {/* Reuse the blank foot of the source artwork to continue the phone
            frame down to the reference's lower crop. */}
        <div className="relative order-1 col-span-2 mx-auto aspect-380/490 w-full max-w-95 overflow-hidden desktop:order-2 desktop:col-span-1">
          <img
            className="relative z-1 block h-auto w-full"
            src={assets.about.stellarPhone}
            width="512"
            height="512"
            alt="Stellar on a mobile phone"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-x-0 top-[70%] bottom-0 bg-size-[100%_auto] bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${assets.about.stellarPhone})` }}
            aria-hidden="true"
          />
        </div>

        <div className="order-3">
          <BenefitList items={benefits.slice(2)} />
        </div>
      </div>
    </Container>
  </section>
)

export default AboutBenefits
