import { trustedCompanies } from '../../../data/trustedCompanies.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'
import LogoTicker from '../../ui/LogoTicker/LogoTicker.jsx'

const TITLE_ID = 'trusted-by-title'

const TITLE = 'text-[clamp(1.375rem,1.2rem+0.75vw,var(--text-xl))] leading-tight font-regular text-balance' // 22px → 26px
const SUMMARY = 'text-[clamp(var(--text-base),0.93rem+0.3vw,var(--text-lg))] font-medium text-secondary' // 16px → 18px

const TrustedBy = () => (
  <section className="py-section desktop:pt-42.25" aria-labelledby={TITLE_ID}>
    {/* Wide screens scale to the design's 1216px measure. */}
    <Container className="flex flex-col items-center text-center wide:zoom-(--scale-narrow-to-medium)">
      <h2 id={TITLE_ID} className={TITLE}>
        A connected workspace for modern teams.
      </h2>
      {/* The ticker is clipped to a narrower measure than the page container. */}
      <LogoTicker
        className="my-13.5 w-full max-w-narrow max-tablet:my-10"
        items={trustedCompanies}
        label="Illustrative brand logos from the concept design"
      />
      <p className={SUMMARY}>
        Illustrative logos from the original design. No customer relationship or endorsement is claimed.
      </p>
      <Button className="mt-10 max-tablet:mt-8" href="/#product" size="lg">
        Explore the concept
      </Button>
    </Container>
  </section>
)

export default TrustedBy
