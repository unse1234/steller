import { assets } from '../../../assets/index.js'
import { featureSpotlight } from '../../../data/featureSpotlight.js'
import { accountLinks } from '../../../data/navigation.js'
import SplitSection from '../../layout/SplitSection/SplitSection.jsx'
import Button from '../../ui/Button/Button.jsx'
import ButtonIcon from '../../ui/Button/ButtonIcon.jsx'
import CheckList from '../../ui/CheckList/CheckList.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import FeatureSpotlightVisual from './FeatureSpotlightVisual.jsx'

const TITLE_ID = 'feature-spotlight-title'

const FeatureSpotlight = () => (
  <SplitSection
    labelledBy={TITLE_ID}
    content={
      <>
        <SectionHeading
          eyebrow="Meet Stellar"
          title="Provide powerful solutions at all times"
          titleId={TITLE_ID}
          description="Stellar is more than just a SaaS and technology template—it's a complete digital transformation solution."
        />
        <CheckList className="mt-7.25" items={featureSpotlight.features} />
        <Button className="mt-11" href={accountLinks.signUp.href} size="lg">
          Get Free Trial
          <ButtonIcon src={assets.icons.arrowRight} name="arrow-icon" />
        </Button>
      </>
    }
    media={<FeatureSpotlightVisual />}
  />
)

export default FeatureSpotlight
