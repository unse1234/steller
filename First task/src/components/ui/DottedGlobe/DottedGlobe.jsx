import { assets } from '../../../assets/index.js'
import { classNames } from '../../../utils/classNames.js'

// The supplied dotted hemisphere, shared by the About hero and company logo band.
const DottedGlobe = ({ className }) => (
  <img src={assets.about.globe} alt="" aria-hidden="true" width="2220" height="1050" decoding="async" className={classNames('pointer-events-none h-auto max-w-none select-none', className)} />
)

export default DottedGlobe
