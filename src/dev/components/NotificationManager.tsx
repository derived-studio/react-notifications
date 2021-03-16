import React, { useEffect, useRef } from 'react'
import { removeNotification, updateNotification } from '../../lib/state'
import { useNotifications } from '../../lib/notificationContext'

export function NotificationManager(): JSX.Element {
  const { timer, dispatch, notifications: current } = useNotifications()
  const notifications = useRef(current)
  const maxLifeTime = 10 * 1000

  useEffect(() => {
    notifications.current = current
  }, [current])

  useEffect(() => {
    const subscriber = (deltaTime: number) => {
      const currentNotifications = notifications.current

      if (!currentNotifications || currentNotifications.length === 0) {
        return
      }

      const delta = deltaTime / maxLifeTime

      currentNotifications.forEach((notification) => {
        if (notification.progress === undefined) {
          return
        }

        const progress = notification.progress - delta
        if (progress <= 0) {
          dispatch(removeNotification(notification.id))
          return
        }

        if (notification.progress !== progress) {
          dispatch(updateNotification({ ...notification, progress }))
        }
      })
    }

    timer.subscribe(subscriber)
    timer.start()
  }, [])

  return null
}
