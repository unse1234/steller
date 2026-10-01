import { accountLinks } from '../../../data/navigation.js'
import { trustedCompanies } from '../../../data/trustedCompanies.js'
import Button from '../../ui/Button/Button.jsx'
import LogoTicker from '../../ui/LogoTicker/LogoTicker.jsx'
import './TrustedBy.css'

const TITLE_ID = 'trusted-by-title'

const TrustedBy = () => (
  <section className="trusted-by" aria-labelledby={TITLE_ID}>
    <div className="container trusted-by__inner">
      <h2 id={TITLE_ID} className="trusted-by__title">
        The world&apos;s best companies trust Stellar.
      </h2>
      <LogoTicker
        className="trusted-by__logos"
        items={trustedCompanies}
        label="Companies that use Stellar"
      />
      <p className="trusted-by__summary">
        Stellar is used by over 55,000+ companies across the globe
      </p>
      <Button className="trusted-by__cta" href={accountLinks.signUp.href} size="lg">
        Start your Stellar Journey
      </Button>
    </div>
  </section>
)

export default TrustedBy
