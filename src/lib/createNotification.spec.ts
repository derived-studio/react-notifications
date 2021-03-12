import { createNotificationFactory } from './createNotification'
import { createTestNotification } from './notification.mocks'
import { NotificationType } from './notification.types'

describe('create notification factory', () => {
  it('creates notification with default type', () => {
    const id = 'test-id'
    const message = 'Test notification'
    const createNotification = createNotificationFactory({ generate: () => id })
    expect(createNotification({ message })).toMatchObject({
      created: expect.any(Number),
      id,
      message,
      progress: undefined,
      type: NotificationType.Default
    })
  })

  it('creates notification from another generating id and creation date', () => {
    const message = 'test notification'
    const notification = createTestNotification({ message, id: 'id-one', created: Date.now() - 10000 })

    const id = 'new-test-id'
    const createNotification = createNotificationFactory({ generate: () => id })

    const newNotification = createNotification(notification)
    expect(newNotification).toMatchObject({ ...notification, id, created: expect.any(Number) })
    expect(newNotification.created).toBeGreaterThan(notification.created)

    newNotification.message = 'updated message'
    expect(notification.message).toBe(message)
  })
})
