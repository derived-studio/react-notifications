import React, { Component, ReactNode } from 'react'
import { INotification } from './Notification'

export type ContainerProps = {
  notifications: INotification[]
}

export class Container extends Component<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props)
  }

  renderNotification({ id, message }: INotification): ReactNode {
    return (
      <div key={id} className="notification">
        {message}
      </div>
    )
  }

  render(): ReactNode {
    return <div className="notification-container">{this.props.notifications.map(this.renderNotification)}</div>
  }
}
