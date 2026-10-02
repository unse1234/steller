import { featureShowcase } from '../../../data/featureShowcase.js'
import Container from '../../layout/Container/Container.jsx'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PerspectiveGrid from '../../ui/PerspectiveGrid/PerspectiveGrid.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import AnalyticsPreview from '../../widgets/AnalyticsPreview/AnalyticsPreview.jsx'
import DashboardPreview from '../../widgets/DashboardPreview/DashboardPreview.jsx'
import FilterFlowPreview from '../../widgets/FilterFlowPreview/FilterFlowPreview.jsx'

const TITLE_ID = 'feature-showcase-title'

const PREVIEWS = {
  dashboard: DashboardPreview,
  filters: FilterFlowPreview,
  analytics: AnalyticsPreview,
}

/* Sized in em so the pill scales with the fluid heading (85px at 58px). The
   negative margin keeps it from stretching its line. */
const HIGHLIGHT =
  'my-[-0.036em] inline-block rounded-pill bg-gradient-accent px-[0.345em] leading-[1.462] text-inverse shadow-accent-pill'

const FeatureShowcase = () => (
  <section className="relative isolate bg-background-muted py-section-lg" aria-labelledby={TITLE_ID}>
    {/* The hero's perspective grid: its ceiling across the top half of the band,
        its floor across the bottom half, never stretched with the band. */}
    <PerspectiveGrid className="absolute inset-0 -z-1" scene="band" />

    <Container>
      <SectionHeading
        // Keeps the design's break after "has".
        titleClassName="max-w-[9.5em]"
        size="2xl"
        align="center"
        eyebrow="Powerful Features"
        title={
          <>
            Our product has these big <span className={HIGHLIGHT}>features</span>
          </>
        }
        titleId={TITLE_ID}
      />

      {/* Three 336px cards; desktop always shows one row, the cards giving up a
          few pixels near 1120px. */}
      <ul className="isolate mx-auto mt-16.5 flex max-w-compact flex-wrap justify-center gap-x-8 gap-y-14 desktop:flex-nowrap">
        {featureShowcase.features.map(({ title, description, icon, preview }) => {
          const { type, visualLabel, ...previewProps } = preview
          const Preview = PREVIEWS[type]

          return (
            <li key={title} className="min-w-0 flex-[0_1_21rem]">
              <div role="img" aria-label={visualLabel}>
                <Preview {...previewProps} />
              </div>
              <h3 className="mt-8 flex items-center gap-2 text-[1.375rem] leading-8 font-medium opsz-display">
                <AssetSlot className="size-8" src={icon} name="feature-icon" />
                {title}
              </h3>
              <p className="mt-3 max-w-80 text-md leading-comfortable text-secondary">{description}</p>
            </li>
          )
        })}
      </ul>
    </Container>
  </section>
)

export default FeatureShowcase
