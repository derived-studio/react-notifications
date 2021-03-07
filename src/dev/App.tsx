import React from 'react'
import { Container } from '../lib/Container'
import { createTestNotification } from '../lib/notification.mocks'

export function App(): JSX.Element {
  const elements = 20
  const notifications = [...Array(elements)].map((_, i) => {
    const id = `${i}`
    const progress = i / elements
    return createTestNotification({ id: 'notification-two', message: `msg: ${i + 1}`, progress })
  })

  return <Container notifications={notifications} />
}
