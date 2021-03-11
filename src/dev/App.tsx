import React, { useEffect, useRef, useState } from 'react'
import { Timer } from '../lib/Timer'
import { NotificationContainer } from '../lib/NotificationContainer'
import { INotification, NotificationType } from '../lib/Notification'
import { notificationsReducer, removeNotification, updateNotification } from '../lib/state'
import { createTestNotification } from '../lib/notification.mocks'

import './app.scss'

const duration = 4 * 1000
function randomizeNotifications(elements: number): INotification[] {
  const types = [
    NotificationType.Default,
    NotificationType.Error,
    NotificationType.Warning,
    NotificationType.Info,
    NotificationType.Success
  ]
  return [...Array(elements)].map((_, i) => {
    const id = `${i}`
    const progress = 1 - i / elements
    const type = types[Math.floor(Math.random() * types.length)]
    return createTestNotification({ id, message: `Notification no.: ${i + 1}`, progress, type })
  })
}

export function App(): JSX.Element {
  const timer = useRef(new Timer({ fps: 60 }))
  const notifications = useRef(randomizeNotifications(100))
  const [, setLastUpdate] = useState(Date.now())

  useEffect(() => {
    const subscriber = (deltaTime: number) => {
      setLastUpdate(Date.now())
      const delta = deltaTime / duration

      let newState = notificationsReducer(notifications.current)
      notifications.current.forEach((notification) => {
        const progress = notification.progress - delta

        if (progress <= 0) {
          newState = notificationsReducer(newState, removeNotification(notification.id))
          return
        }

        newState = notificationsReducer(newState, updateNotification({ ...notification, progress }))
      })
      notifications.current = newState
    }

    timer.current.subscribe(subscriber)
    timer.current.start()
  }, [])

  return <NotificationContainer notifications={notifications.current} className="top right" />
}
