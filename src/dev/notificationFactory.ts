import { createNotificationFactory, NotificationOverrides } from '../lib/createNotification'
import { INotification, Notification, NotificationType } from '../lib/Notification'

export const createNotification = createNotificationFactory({
  generate: () => `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
  defaultType: NotificationType.Default
})

export function randomizeNotification(overrides: NotificationOverrides): INotification {
  const { types } = Notification
  const type = types[Math.floor(Math.random() * types.length)] as NotificationType
  const progress = Math.round(Math.random() * 1e6) / 1e6
  return createNotification({ progress, type, ...overrides })
}

export function randomizeNotifications(qty: number): INotification[] {
  return [...Array(qty)].map((_, i) => randomizeNotification({ message: `Notification no.: ${i + 1}` }))
}
