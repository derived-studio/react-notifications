import React from 'react'
import { render } from '@testing-library/react'
import { Notification } from './Notification'

describe('Notification', () => {
  it('Should render with message', () => {
    const message = 'Test notification message'
    const { getByText } = render(<Notification {...{ message }} />)
    expect(getByText(message)).toBeInTheDocument()
  })
})
