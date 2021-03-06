import React, { Component } from 'react'

export enum NotificationType {
  Default = '',
  Info = 'info',
  Error = 'error',
  Success = 'success',
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
  type: string
}

export class Notification extends Component<NotificationProps> {
  render() {
    const { message, type = NotificationType.Default } = this.props
    const className = `notification ${type}`.trimRight()
    return <div className={className}>{message}</div>
  }
}
