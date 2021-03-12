import React, { FC } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'

export const Notifications: FC = () => {
  const { dispatch, notifications } = useNotifications()

  const onClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  return (
    <NotificationContainer
      notifications={notifications}
      onClick={onClick}
      className="bottom right"
      iconMap={defaultIcons}
    />
  )
}
