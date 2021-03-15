import React, { FC, ReactNode } from 'react'
import { addNotification } from '../../lib/state'
import { NotificationType } from '../../lib/Notification'
import { useNotifications } from '../../lib/notificationContext'

import { Button } from './Button'
import { createNotification } from '../notificationFactory'
import { Notification } from '../../lib/Notification'

let counter = 0

export const NotificationButtons: FC = () => {
  const { dispatch } = useNotifications()
  const createTestNotification = (type: NotificationType) => () => {
    dispatch(addNotification(createNotification({ type, message: `Notification no ${++counter}` })))
  }

  const renderNotificationButton = (type: NotificationType): ReactNode => (
    <Button key={type} onClick={createTestNotification(type)} className={type}>
      Create {type}
    </Button>
  )

  const { types } = Notification
  return (
    <div>
      <h2>Notification types</h2>
      <div className="row spaced">{types.map(renderNotificationButton)}</div>
    </div>
  )
}
