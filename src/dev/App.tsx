import React from 'react'
import { Timer } from '../lib/Timer'
import { NotificationContextProvider } from '../lib/notificationContext'
import { randomizeNotifications } from './notificationFactory'
import { NotificationButtons } from './components/NotificationButtons'
import { NotificationManager } from './components/NotificationManager'
import { NotificationContainer } from './components/NotificationContainer'

import './app.scss'

export function App(): JSX.Element {
  const notifications = randomizeNotifications(20)

  return (
    <NotificationContextProvider timer={new Timer({ fps: 10 })} notifications={notifications}>
      <div className="layout">
        <h1>React notifications</h1>
        <h3>@derived/react-notifications</h3>
        <h2>Installation</h2>
        <code className="block">yarn add @derived/react-notifications</code>
        or
        <code className="block">npm i @derived/react-notifications</code>
        <NotificationContainer />
        <NotificationManager />
        <NotificationButtons />
      </div>
    </NotificationContextProvider>
  )
}
