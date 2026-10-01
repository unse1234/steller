import SplitSection from '../../layout/SplitSection/SplitSection.jsx'
import NewsletterForm from '../../ui/NewsletterForm/NewsletterForm.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import GetStartedVisual from './GetStartedVisual.jsx'
import './GetStarted.css'

const TITLE_ID = 'get-started-title'

const GetStarted = () => (
  <SplitSection
    className="get-started"
    labelledBy={TITLE_ID}
    mediaFirst
    content={
      <>
        <SectionHeading
          className="get-started__heading"
          size="lg"
          eyebrow="Get Started"
          title="Start your Stellar journey here."
          titleId={TITLE_ID}
          description="Unlock the power of data analytics and gain actionable insights to make informed business decisions."
        />
        <NewsletterForm
          className="get-started__form"
          submitLabel="Subscribe"
          note="14 day trial – No credit card required"
          successMessage="Thanks! Check your inbox to confirm your subscription."
        />
      </>
    }
    media={<GetStartedVisual />}
  />
)

export default GetStarted
