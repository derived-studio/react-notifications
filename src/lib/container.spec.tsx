import React from 'react'
import { render } from '@testing-library/react'
import { Container } from './Container'
import { NotificationType } from './Notification'
import { createTestNotification } from './notification.mocks'

describe('Notification container', () => {
  it('renders empty by default', () => {
    const notifications = [
      createTestNotification({
        id: 'notification-one',
        message: 'First notification'
      }),
      createTestNotification({
        id: 'notification-two',
        message: 'Second notification',
        type: NotificationType.Warning
      }),
      createTestNotification({
        id: 'notification-three',
        message: 'Third notification',
        type: NotificationType.Warning
      })
    ]

    const { getByText } = render(<Container {...{ notifications }} />)

    Object.values(notifications).forEach(({ message }) => {
      const notification = getByText(message)
      expect(notification).toBeInTheDocument()
      expect(notification).toHaveClass('notification')
    })
  })
})
