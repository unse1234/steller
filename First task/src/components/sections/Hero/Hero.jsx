import Container from '../../layout/Container/Container.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import HeroShowcase from './HeroShowcase.jsx'

const TITLE_ID = 'hero-title'

/* Sized in em so the pill scales with the fluid heading (88px at 56px). */
const HIGHLIGHT =
  'inline-flex h-[1.5714em] items-center rounded-pill border border-accent bg-gradient-accent px-[0.37em] tracking-snug text-inverse shadow-accent'

const Hero = () => (
  <section
    className="relative isolate overflow-x-clip pt-37.5 desktop:pt-52"
    aria-labelledby={TITLE_ID}
  >
    {/* Muted perspective-grid band behind the top of the hero; it ends partway down the device. */}
    <PerspectiveGrid className="absolute inset-x-0 top-0 -z-1 h-[76%] bg-background-muted" />

    <Container>
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold text-accent">Our Framer Template</p>
        <h1 id={TITLE_ID} className="mt-4 flex flex-col items-center leading-tight font-regular">
          <span className="text-display-lg font-bold tracking-tighter">Save time and build</span>{' '}
          <span className="flex flex-wrap items-center justify-center gap-x-[0.23em] text-display-md">
            better with <span className={HIGHLIGHT}>Stellar</span>
          </span>
        </h1>
        <p className="mt-3.5 max-w-110 leading-relaxed tracking-snug text-secondary">
          Gain unparalleled insights into your data with our robust analytics suite and Stellar.
        </p>
      </div>

      <HeroShowcase className="mt-12 desktop:mt-13.75" />
    </Container>
  </section>
)

export default Hero
