import React, { Component, ReactNode } from 'react'
import { INotification, Notification } from './Notification'

import './container.scss'

export type NotificationContainerProps = {
  notifications: INotification[]
  className?: string
}

export class NotificationContainer extends Component<NotificationContainerProps> {
  constructor(props: NotificationContainerProps) {
    super(props)
  }

  renderNotification({ id, message, type, progress }: INotification): ReactNode {
    return (
      <Notification key={id} id={id} type={type} progress={progress}>
        {message}
      </Notification>
    )
  }

  render(): ReactNode {
    const { className = '' } = this.props

    return (
      <div className={`notification-container fixed ${className}`.trim()}>
        {this.props.notifications.map(this.renderNotification)}
      </div>
    )
  }
}
