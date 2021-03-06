export interface INotificationState {
  readonly created: number
  readonly removed: number
  readonly active: number
  readonly activeIds: string[]
  readonly paused: boolean
}

export interface INotification {
  readonly id: string
  readonly message: string
  readonly created: string
  readonly type: string
}
