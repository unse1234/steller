import { keyFeatures } from '../../../data/keyFeatures.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'
import './KeyFeatures.css'

const TITLE_ID = 'key-features-title'

const { features, phones } = keyFeatures

const KeyFeatures = () => (
  <section className="key-features" aria-labelledby={TITLE_ID}>
    <div className="container container--compact key-features__inner">
      <div className="key-features__content">
        <SectionHeading
          size="xl"
          eyebrow="Our Key Features"
          title="Build a solution that wins you more customers."
          titleId={TITLE_ID}
        />

        <ul className="key-features__list">
          {features.map(({ title, description, icon }) => (
            <li key={title} className="key-features__item">
              <span className="key-features__icon">
                <AssetSlot className="key-features__icon-mark" src={icon} name="key-feature-icon" />
              </span>
              <h3 className="key-features__title">{title}</h3>
              <p className="key-features__description">{description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="key-features__visual" role="img" aria-label={phones.visualLabel}>
        <AssetSlot
          className="key-features__phone key-features__phone--back"
          src={phones.back}
          name="phone-back"
        />
        <AssetSlot
          className="key-features__phone key-features__phone--front"
          src={phones.front}
          name="phone-front"
        />
      </div>
    </div>
  </section>
)

export default KeyFeatures
