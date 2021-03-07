import React from 'react'
import { Container } from '../lib/Container'
import { NotificationType } from '../lib/Notification'
import { createTestNotification } from '../lib/notification.mocks'

import './app.scss'

export function App(): JSX.Element {
  const elements = 20
  const types = [
    NotificationType.Default,
    NotificationType.Error,
    NotificationType.Warning,
    NotificationType.Info,
    NotificationType.Success
  ]
  const notifications = [...Array(elements)].map((_, i) => {
    const id = `${i}`
    const progress = i / elements
    const type = types[Math.floor(Math.random() * types.length)]
    return createTestNotification({ id, message: `msg: ${i + 1}`, progress, type })
  })

  return <Container notifications={notifications} />
}
