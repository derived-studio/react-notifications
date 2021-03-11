import React, { Component, ReactNode } from 'react'

import './container.scss'
import { Notification } from './Notification'
import { INotification } from './notification.types'

export type NotificationContainerProps = {
  notifications: INotification[]
  iconMap?: Record<string, string>
  className?: string
}

export class NotificationContainer extends Component<NotificationContainerProps> {
  constructor(props: NotificationContainerProps) {
    super(props)
  }

  renderNotification({ id, message, type, progress, icon }: INotification): ReactNode {
    return (
      <Notification key={id} id={id} type={type} progress={progress} icon={icon}>
        {message}
      </Notification>
    )
  }

  render(): ReactNode {
    const { iconMap, className = '' } = this.props

    return (
      <div className={`notification-container fixed ${className}`.trim()}>
        {this.props.notifications.map((notification) => {
          const { icon = iconMap ? iconMap[notification.type] : undefined } = notification
          return this.renderNotification({ ...notification, icon })
        })}
      </div>
    )
  }
}
