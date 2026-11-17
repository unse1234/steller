import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import DottedGlobe from '../../ui/DottedGlobe/DottedGlobe.jsx'
import AboutHeroVisual from './AboutHeroVisual.jsx'

const AboutHero = () => (
  <section className="relative isolate overflow-hidden bg-background-muted pt-52 pb-16 desktop:pt-64 desktop:pb-20" aria-labelledby="about-title">
    <DottedGlobe className="absolute -right-36 bottom-0 -z-1 w-240 translate-y-[59.7%] desktop:right-auto desktop:left-[36.94%] desktop:w-[77.08%]" />
    <Container size="medium" className="grid items-center gap-14 desktop:grid-cols-2 desktop:gap-10">
      <div>
        <p className="text-xs text-accent">About this portfolio concept</p>
        <h1 id="about-title" className="mt-5 max-w-145 text-display-xl-plus leading-[1.2] font-medium tracking-[normal] opsz-display">
          Thoughtful design.<br className="max-tablet:hidden" /> Responsive{' '}
          <span className="inline-block rounded-pill bg-gradient-accent px-[0.34em] leading-[1.41] text-inverse shadow-accent-pill">development.</span>
        </h1>
        <p className="mt-4.25 max-w-105 text-base leading-relaxed tracking-snug text-secondary">
          A front-end implementation of the Stellar template by M.Unse, built with React, Vite and Tailwind CSS. The original design is credited in the footer.
        </p>
        <CheckList className="mt-7.75 gap-y-3.75" itemClassName="text-md font-regular tracking-snug" iconClassName="size-6" items={['Reusable sections with responsive layouts', 'Accessible navigation and clear demo interactions']} />
        <div className="mt-7.75 flex flex-wrap items-center gap-8">
          <Button href="#free-trial" size="lg" className="h-12.5 px-5 text-md tracking-snug">Work with M.Unse</Button>
          <a href="#our-story" className="text-md font-medium tracking-snug no-underline hover:text-accent">See How it Works</a>
        </div>
      </div>
      <AboutHeroVisual />
    </Container>
  </section>
)

export default AboutHero
