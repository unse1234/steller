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
    id="product"
    labelledBy={TITLE_ID}
    content={
      <>
        <SectionHeading
          eyebrow="Meet Stellar"
          title="Provide powerful solutions at all times"
          titleId={TITLE_ID}
          description="A dashboard concept that brings charts, summaries and everyday workflows into one clear interface. All figures shown are sample data."
        />
        <CheckList className="mt-7.25" items={featureSpotlight.features} />
        <Button className="mt-11" href={accountLinks.signUp.href} size="lg">
          Discuss your project
          <ButtonIcon src={assets.icons.arrowRight} name="arrow-icon" />
        </Button>
      </>
    }
    media={<FeatureSpotlightVisual />}
  />
)

export default FeatureSpotlight
