import React, { Component } from 'react'
import { INotification } from './Notification'

export type ContainerProps = {
  notifications: INotification[]
}

export class Container extends Component<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props)
  }

  renderNotification({ id, message }: INotification) {
    return (
      <div key={id} className="notification">
        {message}
      </div>
    )
  }

  render() {
    return <div className="notification-container">{this.props.notifications.map(this.renderNotification)}</div>
  }
}
