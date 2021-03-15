import React, { useState } from 'react'
import GithubCorner from 'react-github-corner'
import { Timer } from '../lib/Timer'
import { NotificationContextProvider } from '../lib/notificationContext'
import { randomizeNotifications } from './notificationFactory'
import { NotificationButtons } from './components/NotificationButtons'
import { NotificationManager } from './components/NotificationManager'
import { NotificationContainer } from './components/NotificationContainer'

import './app.scss'
import { NotificationMode } from '../lib/Notification'

export function App(): JSX.Element {
  const notifications = randomizeNotifications(20)
  const [mode, setMode] = useState(NotificationMode.Expanded)

  return (
    <NotificationContextProvider timer={new Timer({ fps: 10 })} notifications={notifications}>
      <div className="layout">
        <h1>React notifications</h1>
        <h3>@derived/react-notifications</h3>
        <h2>Installation</h2>
        <code className="block">yarn add @derived/react-notifications</code>
        or
        <code className="block">npm i @derived/react-notifications</code>
        <NotificationManager />
        <NotificationButtons mode={mode} onModeChange={setMode} />
        <NotificationContainer mode={mode} />
        <GithubCorner href="https://github.com/derived-studio/react-notifications" />
      </div>
    </NotificationContextProvider>
  )
}
