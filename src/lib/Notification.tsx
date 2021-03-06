import React, { Component } from 'react'

export interface INotification {
  readonly id: string
  readonly message: string
  readonly created: string
  readonly type: string
}

export type NotificationProps = {
  message: string
}

export class Notification extends Component<NotificationProps> {
  render() {
    const { message } = this.props
    return <div>{message}</div>
  }
}
