import React, { Component } from 'react'

export type NotificationProps = {
  message: string
}

export class Notification extends Component<NotificationProps> {
  render() {
    const { message } = this.props
    return <div>{message}</div>
  }
}
