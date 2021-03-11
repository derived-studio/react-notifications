import React, { useEffect, useRef, useState } from 'react'
import { NotificationContainer } from '../lib/NotificationContainer'
import { notificationsReducer, removeNotification, updateNotification } from '../lib/state'
import { INotification, NotificationType } from '../lib/notification.types'
import { createTestNotification } from '../lib/notification.mocks'
import defaultIcons from '../lib/notificationIcons'
import { Timer } from '../lib/Timer'

import './app.scss'

function randomizeNotifications(elements: number): INotification[] {
  const types = [
    NotificationType.Default,
    NotificationType.Error,
    NotificationType.Warning,
    NotificationType.Info,
    NotificationType.Success
  ]
  return [...Array(elements)]
    .map((_, i) => {
      const id = `${i}`
      const progress = i / elements
      const type = types[Math.floor(Math.random() * types.length)]
      return createTestNotification({ id, message: `Notification no.: ${i + 1}`, progress, type })
    })
    .reverse()
}

export function App(): JSX.Element {
  const duration = 10 * 1000
  const notificationCount = 10

  const timer = useRef(new Timer({ fps: 60 }))
  const notifications = useRef(randomizeNotifications(notificationCount))
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

  const onClick = (notificationId: string) => {
    notifications.current = notificationsReducer(notifications.current, removeNotification(notificationId))
  }

  return (
    <NotificationContainer
      className="bottom right"
      notifications={notifications.current}
      iconMap={defaultIcons}
      onClick={onClick}
    />
  )
}
