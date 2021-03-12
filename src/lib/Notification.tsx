import React, { Component, ReactNode } from 'react'
import { NotificationProps, NotificationType } from './notification.types'

import './notification.scss'

export class Notification extends Component<NotificationProps> {
  public static types: string[] = Object.keys(NotificationType)
    .map((key) => NotificationType[key])
    .filter((k) => !(parseInt(k) >= 0))

  constructor(props: NotificationProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  private isNumber(val: unknown): val is number {
    return true
  }

  private handleClick(): void {
    if (this.props.onClick) {
      this.props.onClick(this.props.id)
    }
  }

  render(): ReactNode {
    const { progress, children, icon, type } = this.props
    return (
      <div
        className={`notification ${type}`.trimRight()}
        onClick={this.handleClick}
        // style={{ transform: 'translateY(100px)' }}
      >
        <div className="content">
          <div className="body" role="alert">
            {children}
          </div>
          {this.isNumber(progress) && (
            <div className="progress">
              <div style={{ width: `${progress * 100}%` }}></div>
            </div>
          )}
        </div>
        {icon && <div className="icon">{icon.length === 1 ? <span>{icon}</span> : <img src={icon} />}</div>}
      </div>
    )
  }
}
