import { INotification, NotificationType } from './notification.types'

export function createTestNotification(overrides: Partial<INotification> = {}): INotification {
  return {
    id: 'test-notification-id',
    message: 'Test notification',
    type: NotificationType.Default,
    progress: undefined,
    created: Date.now(),
    ...overrides
  }
}
