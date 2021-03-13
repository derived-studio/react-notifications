import React, { FC } from 'react'
import { useNotifications } from '../../lib/notificationContext'
import { NotificationContainer as DefaultContainer } from '../../lib/NotificationContainer'
import { defaultIcons } from '../../lib/notificationIcons'
import { removeNotification } from '../../lib/state'
import { NotificationMode } from '../../lib/Notification'

export type NotificationContainerProps = {
  mode: NotificationMode
}
export const NotificationContainer: FC<NotificationContainerProps> = ({ mode }) => {
  const { dispatch, notifications } = useNotifications()

  const onClick = (notificationId: string) => {
    dispatch(removeNotification(notificationId))
  }

  return (
    <DefaultContainer
      mode={mode}
      notifications={notifications}
      onClick={onClick}
      className="bottom right"
      iconMap={defaultIcons}
    />
  )
}
