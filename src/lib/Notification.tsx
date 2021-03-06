import React, { Component } from 'react'

export enum NotificationType {
  Success = 'success',
  Danger = 'danger',
  Info = 'info',
  Default = 'default',
  Warning = 'warning'
}

export interface INotification {
  readonly id: string
  readonly message: string
  readonly created: number
  readonly type: NotificationType
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
