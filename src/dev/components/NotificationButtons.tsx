import React, { FC, ReactNode } from 'react'
import { addNotification } from '../../lib/state'
import { NotificationMode, NotificationType } from '../../lib/Notification'
import { useNotifications } from '../../lib/notificationContext'

import { Button } from './Button'
import { createNotification } from '../notificationFactory'
import { Notification } from '../../lib/Notification'

let counter = 0

export type NotificationButtonsProps = {
  mode: NotificationMode
  onModeChange: (mode: NotificationMode) => void
}

export const NotificationButtons: FC<NotificationButtonsProps> = ({ onModeChange, mode }) => {
  const { dispatch } = useNotifications()

  const createTestNotification = (type: NotificationType) => () => {
    dispatch(addNotification(createNotification({ type, message: `Notification no ${++counter}` })))
  }

  const renderNotificationButton = (type: NotificationType): ReactNode => (
    <Button key={type} onClick={createTestNotification(type)} className={type}>
      Create {type}
    </Button>
  )

  const renderModeButton = (fMode: NotificationMode): ReactNode => {
    return (
      <Button
        key={fMode}
        onClick={() => onModeChange(fMode)}
        className={`${mode} ${mode === fMode ? 'active' : 'inactive'} block`}
      >
        Use {fMode} mode.
      </Button>
    )
  }

  const { types } = Notification
  return (
    <div>
      <h2>Notification types</h2>
      <div className="row spaced">{types.map(renderNotificationButton)}</div>
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
    </div>
  )
}
