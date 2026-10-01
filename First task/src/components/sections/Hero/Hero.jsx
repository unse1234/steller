import HeroShowcase from './HeroShowcase.jsx'
import './Hero.css'

const TITLE_ID = 'hero-title'

const Hero = () => (
  <section className="hero" aria-labelledby={TITLE_ID}>
    <div className="hero__backdrop" aria-hidden="true" />

    <div className="container">
      <div className="hero__intro">
        <p className="hero__eyebrow">Our Framer Template</p>
        <h1 id={TITLE_ID} className="hero__title">
          <span className="hero__title-primary">Save time and build</span>{' '}
          <span className="hero__title-secondary">
            better with <span className="hero__title-highlight">Stellar</span>
          </span>
        </h1>
        <p className="hero__description">
          Gain unparalleled insights into your data with our robust analytics suite and Stellar.
        </p>
      </div>

      <HeroShowcase className="hero__showcase" />
    </div>
  </section>
)

export default Hero
