import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import AvatarGroup from '../../ui/AvatarGroup/AvatarGroup.jsx'
import Button from '../../ui/Button/Button.jsx'
import Card from '../../ui/Card/Card.jsx'
import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'
import './WorkspaceCard.css'

const WorkspaceCard = ({
  name,
  updated,
  logo,
  progress,
  membersLabel,
  members,
  additionalMembers,
  actionLabel,
  className,
}) => (
  <Card className={classNames('workspace-card', className)}>
    <div className="workspace-card__header">
      <div>
        <p className="workspace-card__name">{name}</p>
        <p className="workspace-card__updated">{updated}</p>
      </div>
      <span className="workspace-card__logo">
        <AssetSlot className="workspace-card__logo-mark" src={logo} alt={name} name="company-logo" />
      </span>
    </div>

    <ProgressBar className="workspace-card__progress" value={progress} showTrack />

    <p className="workspace-card__members-label">{membersLabel}</p>
    <div className="workspace-card__footer">
      <AvatarGroup
        className="workspace-card__members"
        people={members}
        additionalCount={additionalMembers}
      />
      <Button as="span" className="workspace-card__action" variant="soft" size="sm">
        {actionLabel}
      </Button>
    </div>
  </Card>
)

export default WorkspaceCard
