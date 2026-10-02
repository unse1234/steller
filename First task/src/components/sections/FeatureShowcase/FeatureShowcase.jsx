import { featureShowcase } from '../../../data/featureShowcase.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import AnalyticsPreview from '../../widgets/AnalyticsPreview/AnalyticsPreview.jsx'
import DashboardPreview from '../../widgets/DashboardPreview/DashboardPreview.jsx'
import FilterFlowPreview from '../../widgets/FilterFlowPreview/FilterFlowPreview.jsx'
import './FeatureShowcase.css'

const TITLE_ID = 'feature-showcase-title'

const PREVIEWS = {
  dashboard: DashboardPreview,
  filters: FilterFlowPreview,
  analytics: AnalyticsPreview,
}

const FeatureShowcase = () => (
  <section className="feature-showcase" aria-labelledby={TITLE_ID}>
    <PerspectiveGrid className="feature-showcase__grid" scene="band" />

    <div className="container">
      <SectionHeading
        className="feature-showcase__heading"
        size="2xl"
        align="center"
        eyebrow="Powerful Features"
        title={
          <>
            Our product has these big <span className="feature-showcase__highlight">features</span>
          </>
        }
        titleId={TITLE_ID}
      />

      <ul className="feature-showcase__list">
        {featureShowcase.features.map(({ title, description, icon, preview }) => {
          const { type, visualLabel, ...previewProps } = preview
          const Preview = PREVIEWS[type]

          return (
            <li key={title} className="feature-showcase__item">
              <div role="img" aria-label={visualLabel}>
                <Preview {...previewProps} />
              </div>
              <h3 className="feature-showcase__title">
                <AssetSlot className="feature-showcase__icon" src={icon} name="feature-icon" />
                {title}
              </h3>
              <p className="feature-showcase__description">{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
)

export default FeatureShowcase
