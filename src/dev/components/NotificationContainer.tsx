import React, { FC, ReactNode, useState } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer as DefaultContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'
import { NotificationMode } from '../../lib/Notification'
import { Button } from './Button'

export const NotificationContainer: FC = () => {
  const { dispatch, notifications } = useNotifications()
  const [mode, setMode] = useState(NotificationMode.Expanded)

  const onNotificationClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  const renderModeButton = (type: NotificationMode): ReactNode => (
    <Button key={type} onClick={() => setMode(type)} className={`${type} block`}>
      Use {type} mode.
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
      <>
        <h2>Container types</h2>
        <div className="row">
          <div className="col-3">
            <h3>Expanded</h3>
            <p>MEssage always visible.</p>
            {renderModeButton(NotificationMode.Expanded)}
          </div>

          <div className="col-3">
            <h3>Expandable</h3>
            <p>Message visible on hover.</p>
            {renderModeButton(NotificationMode.Expandable)}
          </div>

          <div className="col-3">
            <h3>Collapsed</h3>
            <p>Message always hidden.</p>
            {renderModeButton(NotificationMode.Collapsed)}
          </div>
        </div>
      </>
    </div>
  )
}
