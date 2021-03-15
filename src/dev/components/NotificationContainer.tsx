import React, { FC } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer as DefaultContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'
import { NotificationMode } from '../../lib/Notification'

export const NotificationContainer: FC<{ mode: NotificationMode }> = ({ mode }) => {
  const { dispatch, notifications } = useNotifications()

  const onNotificationClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  return (
    <DefaultContainer
      mode={mode}
      notifications={notifications}
      onClick={onNotificationClick}
      className="bottom right"
      iconMap={defaultIcons}
    />
  )
}
