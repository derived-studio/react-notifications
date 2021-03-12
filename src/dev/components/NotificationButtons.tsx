import React, { FC } from 'react'
import { addNotification } from '../../lib/state'
import { useNotifications } from '../../lib/notificationContext'

import { Button } from './Button'
import { createNotification } from '../notificationFactory'

let counter = 0

export const NotificationButtons: FC = () => {
  const { dispatch } = useNotifications()
  const createTestNotification = () => {
    dispatch(addNotification(createNotification({ message: `Notification no ${++counter}` })))
  }

  return (
    <div>
      <Button onClick={createTestNotification}>Create notification</Button>
    </div>
  )
}
