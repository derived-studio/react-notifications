import { INotification, NotificationType } from './Notification'

export function createTestNotification(overrides: Partial<INotification>): INotification {
  return {
    id: 'test-notification-id',
    message: 'Test notification',
    type: NotificationType.Info,
    created: Date.now()
  }
}
