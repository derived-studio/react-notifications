import React from 'react'
import { render } from '@testing-library/react'
import { Container } from './Container'
import { NotificationType } from './Notification'
import { createTestNotification } from './notification.mocks'

describe('Notification container', () => {
  it('renders empty by default', () => {
    const notificationOne = createTestNotification({
      id: 'notification-one',
      message: 'First notification'
    })

    const notificationTwo = createTestNotification({
      id: 'notification-two',
      message: 'Second notification',
      type: NotificationType.Warning
    })

    const notificationThree = createTestNotification({
      id: 'notification-three',
      message: 'Third notification',
      type: NotificationType.Warning
    })

    const notifications = {
      [notificationOne.id]: notificationOne,
      [notificationTwo.id]: notificationTwo,
      [notificationThree.id]: notificationThree
    }

    const { getByText } = render(<Container {...{ notifications }} />)

    Object.values(notifications).forEach(({ message }) => {
      const notification = getByText(message)
      expect(notification).toBeInTheDocument()
      expect(notification).toHaveClass('notification')
    })
  })
})
