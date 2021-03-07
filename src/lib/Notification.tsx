import React, { Component, ReactNode } from 'react'
import './notification.scss'

export enum NotificationType {
  Default = 'default',
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
  readonly progress: number
}

export type NotificationProps = {
  type?: string
  progress?: number
  icon?: string
  children: ReactNode
}

export class Notification extends Component<NotificationProps> {
  private isNumber(val: unknown): val is number {
    return true
  }

  render(): ReactNode {
    const { progress, children, icon, type } = this.props
    return (
      <div className={`notification ${type}`.trimRight()}>
        <div className="content">
          <div className="body">{children}</div>
          {this.isNumber(progress) && (
            <div className="progress">
              <div style={{ width: `${progress * 100}%` }}></div>
            </div>
          )}
        </div>
        {icon && (
          <div className="icon">
            <img className="glyph" src="" />
          </div>
        )}
      </div>
    )
  }
}
