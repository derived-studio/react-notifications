import { INotification, NotificationType } from './Notification'

export function createTestNotification(overrides: Partial<INotification>): INotification {
  return {
    id: 'test-notification-id',
    message: 'Test notification',
    type: NotificationType.Default,
    progress: 1,
    created: Date.now(),
    ...overrides
  }
}
