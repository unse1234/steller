import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import DottedGlobe from '../../ui/DottedGlobe/DottedGlobe.jsx'
import AboutHeroVisual from './AboutHeroVisual.jsx'

const AboutHero = () => (
  <section className="relative isolate overflow-hidden bg-background-muted pt-40 pb-16 desktop:pt-52 desktop:pb-20" aria-labelledby="about-title">
    <DottedGlobe className="absolute -right-36 bottom-0 -z-1 w-240 translate-y-[59.7%] desktop:right-auto desktop:left-[36.94%] desktop:w-[77.08%]" />
    <Container size="medium" className="grid items-center gap-14 desktop:grid-cols-2 desktop:gap-10">
      <div>
        <p className="text-xs text-accent">Our Values</p>
        <h1 id="about-title" className="mt-5 max-w-145 text-display-xl-plus leading-[1.2] font-medium tracking-[normal] opsz-display">
          Our team shares<br className="max-tablet:hidden" /> values to{' '}
          <span className="inline-block rounded-pill bg-gradient-accent px-[0.34em] leading-[1.41] text-inverse shadow-accent-pill">Success</span>
        </h1>
        <p className="mt-4.25 max-w-105 text-base leading-relaxed tracking-snug text-secondary">
          Stellar is more than just a SaaS and technology template—it&apos;s a complete solution.
        </p>
        <CheckList className="mt-7.75 gap-y-3.75" itemClassName="text-md font-regular tracking-snug" iconClassName="size-6" items={['Add your feature details here', 'Inform your customers about your features']} />
        <div className="mt-7.75 flex flex-wrap items-center gap-8">
          <Button href="#free-trial" size="lg" className="h-12.5 px-5 text-md tracking-snug">Get Free Trial</Button>
          <a href="#our-story" className="text-md font-medium tracking-snug no-underline hover:text-accent">See How it Works</a>
        </div>
      </div>
      <AboutHeroVisual />
    </Container>
  </section>
)

export default AboutHero
