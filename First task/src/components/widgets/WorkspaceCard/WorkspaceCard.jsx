import { classNames } from '../../../utils/classNames.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import AvatarGroup from '../../ui/AvatarGroup/AvatarGroup.jsx'
import Button from '../../ui/Button/Button.jsx'
import Card from '../../ui/Card/Card.jsx'
import ProgressBar from '../../ui/ProgressBar/ProgressBar.jsx'

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
  <Card className={classNames('p-6', className)}>
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs">{name}</p>
        <p className="text-xs text-muted">{updated}</p>
      </div>
      <span className="grid aspect-square w-10.25 flex-none place-items-center rounded-[50%] border border-border-subtle bg-surface">
        <AssetSlot className="size-4" src={logo} alt={name} name="company-logo" />
      </span>
    </div>

    <ProgressBar className="mt-4 text-2xs font-regular text-primary" value={progress} showTrack />

    <p className="mt-3 text-2xs font-medium text-secondary">{membersLabel}</p>
    <div className="mt-2.5 flex items-center justify-between gap-3">
      <AvatarGroup
        className="[--avatar-group-size:36px]"
        people={members}
        additionalCount={additionalMembers}
      />
      <Button as="span" className="h-9.5" variant="soft" size="sm">
        {actionLabel}
      </Button>
    </div>
  </Card>
)

export default WorkspaceCard
