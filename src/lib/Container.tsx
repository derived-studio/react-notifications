import React, { Component } from 'react'
import { INotification } from './Notification'

export type ContainerProps = {
  notifications: {
    [id: string]: INotification
  }
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
    const { notifications } = this.props
    return <div className="notification-container">{Object.values(notifications).map(this.renderNotification)}</div>
  }
}
