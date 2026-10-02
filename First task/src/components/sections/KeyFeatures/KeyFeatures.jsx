import { keyFeatures } from '../../../data/keyFeatures.js'
import { classNames } from '../../../utils/classNames.js'
import Container from '../../layout/Container/Container.jsx'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const TITLE_ID = 'key-features-title'

const { features, phones } = keyFeatures

/*
 * A 520 x 560 composition that scales as one: two phones, the front one
 * overlapping the back one, standing in an outlined panel that fills the
 * lower half. Both phones are cropped flush with the panel's bottom edge.
 */
const VISUAL = [
  'relative isolate mx-auto aspect-520/560 w-full max-w-130',
  'before:absolute before:inset-x-0 before:bottom-0 before:-z-1 before:h-1/2',
  'before:rounded-t-[20px] before:rounded-b-sm before:border before:border-border-subtle',
].join(' ')
const PHONE = 'absolute bottom-0 object-cover object-top'

const KeyFeatures = () => (
  <section className="overflow-x-clip py-section-lg" aria-labelledby={TITLE_ID}>
    <Container size="compact" className="grid gap-y-12 desktop:grid-cols-2 desktop:gap-x-8">
      <div>
        <SectionHeading
          size="xl"
          eyebrow="Our Key Features"
          title="Build a solution that wins you more customers."
          titleId={TITLE_ID}
        />

        <ul className="mt-16 grid gap-x-8 gap-y-12 tablet:grid-cols-2">
          {features.map(({ title, description, icon }) => (
            <li key={title}>
              <span className="grid aspect-square w-12 place-items-center rounded-[50%] border border-border-subtle bg-surface">
                <AssetSlot className="size-6" src={icon} name="key-feature-icon" />
              </span>
              <h3 className="mt-4 text-base leading-6 font-regular">{title}</h3>
              <p className="mt-3 text-md leading-comfortable text-secondary">{description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={VISUAL} role="img" aria-label={phones.visualLabel}>
        {/* 272 x 540 at x 178 */}
        <AssetSlot
          className={classNames(PHONE, 'left-[34.23%] h-[96.43%] w-[52.31%]')}
          src={phones.back}
          name="phone-back"
        />
        {/* 304 x 401 at x 70 */}
        <AssetSlot
          className={classNames(PHONE, 'left-[13.46%] h-[71.61%] w-[58.46%]')}
          src={phones.front}
          name="phone-front"
        />
      </div>
    </Container>
  </section>
)

export default KeyFeatures
