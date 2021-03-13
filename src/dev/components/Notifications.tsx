import React, { FC } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer as DefaultContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'
import { NotificationBehavior } from '../../lib/Notification'

export type NotificationContainerProps = {
  behavior: NotificationBehavior
}
export const NotificationContainer: FC<NotificationContainerProps> = ({ behavior }) => {
  const { dispatch, notifications } = useNotifications()

  const onClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  return (
    <DefaultContainer
      behavior={behavior}
      notifications={notifications}
      onClick={onClick}
      className="bottom right"
      iconMap={defaultIcons}
    />
  )
}
