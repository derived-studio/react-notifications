import React from 'react'
import { render } from '@testing-library/react'
import { NotificationIcon } from './NotificationIcon'

describe('Notification icon', () => {
  it('renders nothing by default', () => {
    const { container } = render(<NotificationIcon />)
    expect(container.firstChild).toBeNull()
  })

  it('renders with emoji', () => {
    const icon = '🚀'
    const { getByText } = render(<NotificationIcon icon={icon} />)
    expect(getByText(icon)).toBeInTheDocument()
  })

  it('renders with image', () => {
    const icon = 'http://test.image.com'
    const { container } = render(<NotificationIcon icon={icon} />)
    expect(container.querySelector(`img[src="${icon}"`)).toBeInTheDocument()
  })
})
