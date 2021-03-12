import React from 'react'
import { Timer } from '../lib/Timer'
import { NotificationContextProvider } from '../lib/notificationContext'

import { NotificationButtons } from './components/NotificationButtons'
import { NotificationManager } from './components/NotificationManager'
import { Notifications } from './components/Notifications'

import './app.scss'

export function App(): JSX.Element {
  return (
    <NotificationContextProvider timer={new Timer({ fps: 60 })}>
      <Notifications />
      <NotificationManager />
      <NotificationButtons />
    </NotificationContextProvider>
  )
}
