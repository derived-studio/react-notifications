import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Notification, NotificationMode, NotificationType } from './Notification'
import { createTestNotification } from './notification.mocks'

describe('Notification', () => {
  it('renders with message', () => {
    const message = 'Test notification message'
    const { getByText } = render(<Notification id={'test-id'}>{message}</Notification>)
    expect(getByText(message)).toBeInTheDocument()
  })

  it('renders with alert role', () => {
    const message = 'Test notification message'
    const { getByText, getByRole } = render(<Notification id={'test-id'}>{message}</Notification>)

    const alertBody = getByRole('alert')
    expect(alertBody).toBeInTheDocument()

    const msgBody = getByText(message)
    expect(msgBody).toBeInTheDocument()

    expect(alertBody).toEqual(msgBody)
  })

  it('calls on click handler', () => {
    const message = 'Test notification message'
    const id = 'test-id'
    const onClick = jest.fn()
    const { getByText } = render(
      <Notification id={id} onClick={onClick}>
        {message}
      </Notification>
    )
    fireEvent.click(getByText(message))
    expect(getByText(message))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(id)
  })

  it('renders notification styles', () => {
    const message = 'test notification'
    const { getByText } = render(<Notification id={'test-id'}>{message}</Notification>)
    const body = getByText(message)
    expect(body).toHaveClass('body')
    expect(body.parentElement).toHaveClass('content')
    expect(body.parentElement.parentElement).toHaveClass('notification')
  })

  it('exposes static types', () => {
    expect(Notification.types).toEqual([
      NotificationType.Default,
      NotificationType.Info,
      NotificationType.Error,
      NotificationType.Success,
      NotificationType.Warning
    ])
  })

  it.each([
    [NotificationType.Default, ''],
    [NotificationType.Info, 'info'],
    [NotificationType.Error, 'error'],
    [NotificationType.Success, 'success'],
    [NotificationType.Warning, 'warning']
  ])('renders with %s type class', (type: NotificationType, className: string): void => {
    const id = `test-${type}-id`
    const message = `Test ${type ? type : 'default'} notification`
    const { getByText } = render(
      <Notification id={id} type={type}>
        {message}
      </Notification>
    )
    expect(getByText(message).parentElement.parentElement).toHaveClass(`notification ${className}`.trimRight())
  })

  it.each([
    [NotificationType.Default, '#'],
    [NotificationType.Info, '???'],
    [NotificationType.Error, '!'],
    [NotificationType.Success, '???'],
    [NotificationType.Warning, '???']
  ])('renders with %s icon', (type: NotificationType, glyphIcon: string): void => {
    const message = `Test ${type ? type : 'default'} notification`
    const { getByText } = render(
      <Notification id={`test-${type}-id`} type={type} icon={glyphIcon}>
        {message}
      </Notification>
    )
    const glyph = getByText(glyphIcon)
    expect(glyph).toBeInTheDocument()
    expect(glyph.parentElement).toHaveClass('icon')
  })

  it.each([NotificationMode.Expandable, NotificationMode.Expanded, NotificationMode.Collapsed])(
    'renders with %behavior behavior class name',
    (behavior: NotificationMode): void => {
      const message = `Test ${behavior ? behavior : 'default'} notification`
      const { container } = render(
        <Notification id={`test-${behavior}-id`} mode={behavior} icon={'@'}>
          {message}
        </Notification>
      )
      expect(container.firstChild).toHaveClass(behavior)
    }
  )

  it('renders with icon image', () => {
    const icon = 'http://test.com/image.png'
    const { id, type, message } = createTestNotification({ icon })
    const { getByText, container } = render(
      <Notification id={id} type={type} icon={icon}>
        {message}
      </Notification>
    )

    expect(getByText(message)).toBeInTheDocument()
    expect(container.querySelector(`.notification .icon img[src="${icon}"]`)).toBeInTheDocument()
  })
})
