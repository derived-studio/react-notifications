import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { NotificationContainer } from './NotificationContainer'
import { createTestNotification } from './notification.mocks'
import { NotificationType } from './Notification'

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

    const { getByText } = render(<NotificationContainer {...{ notifications }} />)

    Object.values(notifications).forEach(({ message }) => {
      const notification = getByText(message)
      expect(notification).toBeInTheDocument()
    })
  })

  it("container doesn't trigger pointer events", () => {
    const onClick = jest.fn()
    const { container } = render(<NotificationContainer {...{ onClick, notifications: [] }} />)
    const element = container.firstChild

    fireEvent.click(element)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('forwards onclick handler to rendered notification', () => {
    const id = 'test-notification-id'
    const message = 'test notification'
    const onClick = jest.fn()
    const notification = createTestNotification({ id, message })
    const { getByText } = render(<NotificationContainer {...{ onClick, notifications: [notification] }} />)
    fireEvent.click(getByText(message))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(id)
  })

  it('renders notifications in reverse order', () => {
    const notifications = [
      createTestNotification({
        id: 'notification-one',
        message: 'First notification'
      }),
      createTestNotification({
        id: 'notification-two',
        message: 'Second notification',
        type: NotificationType.Warning
      })
    ]

    const { getAllByRole } = render(<NotificationContainer {...{ notifications }} />)
    const elements = getAllByRole('alert')
    expect(elements).toHaveLength(2)
    expect(elements[0].textContent).toBe(notifications[1].message)
    expect(elements[1].textContent).toBe(notifications[0].message)
  })
})
