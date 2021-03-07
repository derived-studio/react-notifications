import React from 'react'
import { render } from '@testing-library/react'
import { Notification, NotificationType } from './Notification'
import { createTestNotification } from './notification.mocks'

describe('Notification', () => {
  it('renders with message', () => {
    const message = 'Test notification message'
    const { getByText } = render(<Notification>{message}</Notification>)
    expect(getByText(message)).toBeInTheDocument()
  })

  it('renders notification styles', () => {
    const id = 'test-id'
    const message = 'test notification'
    const { getByText } = render(<Notification>{message}</Notification>)
    const body = getByText(message)
    expect(body).toHaveClass('body')
    expect(body.parentElement).toHaveClass('content')
    expect(body.parentElement.parentElement).toHaveClass('notification')
  })

  it.each([
    [NotificationType.Default, ''],
    [NotificationType.Info, 'info'],
    [NotificationType.Error, 'error'],
    [NotificationType.Success, 'success'],
    [NotificationType.Warning, 'warning']
  ])('renders with type class', (type: NotificationType, className: string): void => {
    const id = `test-${type}-id`
    const message = `Test ${type ? type : 'default'} notification`
    const { getByText } = render(<Notification type={type}>{message}</Notification>)
    expect(getByText(message).parentElement.parentElement).toHaveClass(`notification ${className}`.trimRight())
  })
})
