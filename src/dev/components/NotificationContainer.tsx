import React, { FC, ReactNode, useState } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer as DefaultContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'
import { NotificationMode } from '../../lib/Notification'
import { Button } from './Button'

const modes = [NotificationMode.Expanded, NotificationMode.Collapsed, NotificationMode.Expandable]

export const NotificationContainer: FC = () => {
  const { dispatch, notifications } = useNotifications()
  const [mode, setMode] = useState(NotificationMode.Expanded)

  const onNotificationClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  const renderModeButton = (type: NotificationMode): ReactNode => (
    <Button key={type} onClick={() => setMode(type)} className={type}>
      Switch to {type} mode.
    </Button>
  )

  return (
    <div>
      <DefaultContainer
        mode={mode}
        notifications={notifications}
        onClick={onNotificationClick}
        className="bottom right"
        iconMap={defaultIcons}
      />
      <div>
        <div>
          <h2>Container types</h2>
          <p>Render few notifications first.</p>
          {modes.map(renderModeButton)}
        </div>
      </div>
    </div>
  )
}
