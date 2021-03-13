import React from 'react'
import { Timer } from '../lib/Timer'
import { NotificationBehavior } from '../lib/Notification'
import { NotificationContextProvider } from '../lib/notificationContext'
import { randomizeNotifications } from './notificationFactory'
import { NotificationButtons } from './components/NotificationButtons'
import { NotificationManager } from './components/NotificationManager'
import { NotificationContainer } from './components/Notifications'

import './app.scss'

export function App(): JSX.Element {
  const notifications = randomizeNotifications(20)
  return (
    <NotificationContextProvider timer={new Timer({ fps: 10 })} notifications={notifications}>
      <NotificationContainer behavior={NotificationBehavior.Default} />
      <NotificationManager />
      <NotificationButtons />
    </NotificationContextProvider>
  )
}
