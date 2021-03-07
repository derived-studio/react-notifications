import React, { Component, ReactNode } from 'react'
import { INotification, Notification } from './Notification'

export type ContainerProps = {
  notifications: INotification[]
  className?: string
}

export class Container extends Component<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props)
  }

  renderNotification({ id, message, type, progress }: INotification): ReactNode {
    return (
      <Notification key={id} type={type} progress={progress} icon={'src'}>
        {message}
      </Notification>
    )
  }

  render(): ReactNode {
    const { className } = this.props

    return (
      <div className={`notification-container ${className}`.trim()}>
        {this.props.notifications.map(this.renderNotification)}
      </div>
    )
  }
}
