import React, { Component, ReactNode } from 'react'
import { isNumber } from './guards'

import './notification.scss'
import { NotificationIcon } from './NotificationIcon'

export enum NotificationType {
  Default = 'default',
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning'
}

export enum NotificationMode {
  Collapsed = 'collapsed',
  Expandable = 'expandable',
  Expanded = 'expanded'
}
export interface INotification {
  readonly id: string
  readonly created: number
  type: NotificationType
  message: string
  progress?: number
  icon?: string
}

export type NotificationProps = {
  id: string
  mode?: NotificationMode
  type?: string
  progress?: number
  icon?: string
  children: ReactNode
  onClick?: (id: string) => void
}

export class Notification extends Component<NotificationProps> {
  public static types: string[] = Object.keys(NotificationType)
    .map((key) => NotificationType[key])
    .filter((k) => !(parseInt(k) >= 0))

  constructor(props: NotificationProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  private handleClick(): void {
    if (this.props.onClick) {
      this.props.onClick(this.props.id)
    }
  }

  render(): ReactNode {
    const { progress, children, icon, type } = this.props
    const { mode: behavior = NotificationMode.Expanded } = this.props
    return (
      <div className={`notification ${type} ${behavior}`.trimRight()} onClick={this.handleClick}>
        {behavior !== NotificationMode.Collapsed && (
          <div className="content">
            <div className="body" role="alert">
              {children}
            </div>
            {isNumber(progress) && (
              <div className="progress">
                <div style={{ width: `${progress * 100}%` }}></div>
              </div>
            )}
          </div>
        )}
        <NotificationIcon icon={icon} />
      </div>
    )
  }
}
