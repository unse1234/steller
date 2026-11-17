import SplitSection from '../../layout/SplitSection/SplitSection.jsx'
import NewsletterForm from '../../ui/NewsletterForm/NewsletterForm.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import GetStartedVisual from './GetStartedVisual.jsx'

const TITLE_ID = 'get-started-title'

const GetStarted = () => (
  <SplitSection
    className="[--split-content-width:30.25rem] desktop:pt-19.5 desktop:pb-41.25"
    labelledBy={TITLE_ID}
    mediaFirst
    content={
      <>
        <SectionHeading
          // Keeps the design's break after "Stellar".
          titleClassName="max-w-[10em]"
          size="lg"
          eyebrow="Interactive preview"
          title="Try the demo form."
          titleId={TITLE_ID}
          description="Explore the email validation and confirmation states using a sample address. This portfolio demo does not create accounts."
        />
        <NewsletterForm
          className="mt-7.5"
          submitLabel="Try demo form"
          note="Demo only. Email addresses are not sent or stored."
          successMessage="Demo complete. No email was sent, no address was saved, and no account was created."
        />
      </>
    }
    media={<GetStartedVisual />}
  />
)

export default GetStarted
