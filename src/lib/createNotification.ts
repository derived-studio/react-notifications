import { INotification, NotificationType } from './notification.types'

export type NotificationOverrides = Partial<INotification> & Pick<INotification, 'message'>
export type CreateNotification = (overrides: NotificationOverrides) => INotification
export type CreateNotificationFactory = (opts: {
  generate: () => string
  defaultType?: NotificationType
}) => CreateNotification

export const createNotificationFactory: CreateNotificationFactory = function (opts) {
  const { generate, defaultType = NotificationType.Default } = opts

  return function createNotification(overrides): INotification {
    return {
      type: defaultType,
      progress: undefined,
      ...overrides,
      created: Date.now(),
      id: generate()
    }
  }
}
