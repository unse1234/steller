import { freeTrial } from '../../../data/freeTrial.js'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import NewsletterForm from '../../ui/NewsletterForm/NewsletterForm.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import './FreeTrial.css'

const TITLE_ID = 'free-trial-title'

const FreeTrial = () => (
  <section className="free-trial" aria-labelledby={TITLE_ID}>
    <div className="container container--medium free-trial__inner">
      <SectionHeading
        className="free-trial__heading"
        size="xl"
        eyebrow="Start building today!"
        title="Start your 7-day free trial"
        titleId={TITLE_ID}
        description="Experience the Stellar difference and unlock the true potential"
      />
      <NewsletterForm
        className="free-trial__form"
        layout="inline"
        submitLabel="Get Instant Access"
        note={<CheckList className="free-trial__perks" items={freeTrial.perks} />}
        successMessage="Thanks! Check your inbox to start your free trial."
      />
    </div>
  </section>
)

export default FreeTrial
