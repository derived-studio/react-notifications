import React, { Component, ReactNode } from 'react'

import { Notification } from './Notification'
import { INotification, NotificationMode } from './Notification'

import './notificationContainer.scss'

export type NotificationContainerProps = {
  notifications: INotification[]
  mode?: NotificationMode
  iconMap?: Record<string, string>
  className?: string
  onClick?: (id: string) => void
  renderMessage?: (message: string) => ReactNode | string
}

export class NotificationContainer extends Component<NotificationContainerProps> {
  constructor(props: NotificationContainerProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  private handleClick(notificationId: string): void {
    const { onClick } = this.props
    onClick && onClick(notificationId)
  }

  private renderNotification({ id, message, type, progress, icon }: INotification): ReactNode {
    const { renderMessage } = this.props
    return (
      <Notification
        key={id}
        id={id}
        type={type}
        progress={progress}
        icon={icon}
        onClick={this.handleClick}
        mode={this.props.mode}
      >
        {renderMessage ? renderMessage(message) : message}
      </Notification>
    )
  }

  render(): ReactNode {
    const { iconMap, className = '' } = this.props
    const notifications = [...this.props.notifications].reverse()
    return (
      <div className={`notification-container ${className}`.trim()}>
        <div className="notifications">
          {notifications.map((notification) => {
            const { icon = iconMap ? iconMap[notification.type] : undefined } = notification
            return this.renderNotification({ ...notification, icon })
          })}
        </div>
      </div>
    )
  }
}
