import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Notification, NotificationType } from './Notification'

describe('Notification', () => {
  it('renders with message', () => {
    const message = 'Test notification message'
    const { getByText } = render(<Notification id={'test-id'}>{message}</Notification>)
    expect(getByText(message)).toBeInTheDocument()
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

  it.each([
    [NotificationType.Default, ''],
    [NotificationType.Info, 'info'],
    [NotificationType.Error, 'error'],
    [NotificationType.Success, 'success'],
    [NotificationType.Warning, 'warning']
  ])('renders with type class', (type: NotificationType, className: string): void => {
    const id = `test-${type}-id`
    const message = `Test ${type ? type : 'default'} notification`
    const { getByText } = render(
      <Notification id={id} type={type}>
        {message}
      </Notification>
    )
    expect(getByText(message).parentElement.parentElement).toHaveClass(`notification ${className}`.trimRight())
  })
})
