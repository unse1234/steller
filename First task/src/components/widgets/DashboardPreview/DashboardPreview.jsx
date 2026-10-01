import { assets } from '../../../assets/index.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import PreviewCard from '../PreviewCard/PreviewCard.jsx'
import './DashboardPreview.css'

/** Dashboard screen: quick-action pills above a CSV import drop zone. */
const DashboardPreview = ({ title, actions, upload, className }) => (
  <PreviewCard className={className} title={title}>
    <ul className="dashboard-preview__actions">
      {actions.map(({ label, icon }) => (
        <li key={label} className="dashboard-preview__action">
          <AssetSlot className="dashboard-preview__action-icon" src={icon} name="action-icon" />
          {label}
        </li>
      ))}
    </ul>

    <div className="dashboard-preview__upload">
      <AssetSlot className="dashboard-preview__close" src={assets.icons.close} name="close-icon" />
      <p className="dashboard-preview__upload-title">{upload.title}</p>
      <p className="dashboard-preview__upload-text">{upload.text}</p>
      <span className="dashboard-preview__dropzone" />
    </div>
  </PreviewCard>
)

export default DashboardPreview
