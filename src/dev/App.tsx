import React from 'react'
import { Container } from '../lib/Container'
import { createTestNotification } from '../lib/notification.mocks'

export function App() {
  const notifications = [
    createTestNotification({ id: 'notification-one', message: 'I am second' }),
    createTestNotification({ id: 'notification-two', message: 'I am second' })
  ]

  return <Container notifications={notifications} />
}
