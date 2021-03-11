import { ReactNode } from 'react'

export enum NotificationType {
  Default = 'default',
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning'
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
  type?: string
  progress?: number
  icon?: string
  children: ReactNode
  onClick?: (id: string) => void
}
