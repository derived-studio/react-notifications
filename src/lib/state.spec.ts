import { createTestNotification } from './notification.mocks'
import { addNotification, notificationsReducer, removeAllNotifications, removeNotification } from './state'

describe('Notification reducer', () => {
  it('adds notification', () => {
    const oldNotification = createTestNotification({ id: 'old-notification-id' })
    const newNotification = createTestNotification({ id: 'new-notification-id' })
    expect(notificationsReducer([oldNotification], addNotification(newNotification))).toEqual([
      oldNotification,
      newNotification
    ])
  })

  it('removes notification', () => {
    const expiredNotification = createTestNotification({ id: 'expired-notification-id' })
    const currentNotification = createTestNotification({ id: 'current-notification-id' })
    const state = notificationsReducer(
      [expiredNotification, currentNotification],
      removeNotification(expiredNotification.id)
    )
    expect(state).toEqual([currentNotification])
  })

  it('removes all notifications', () => {
    expect(
      notificationsReducer(
        [
          createTestNotification({ id: 'first-notification' }),
          createTestNotification({ id: 'second-notification' }),
          createTestNotification({ id: 'third-notification' })
        ],
        removeAllNotifications()
      )
    ).toEqual([])
  })
})
