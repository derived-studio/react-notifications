import React, { useEffect, useRef, useState } from 'react'
import { removeNotification, updateNotification } from '../../lib/state'
import { randomizeNotifications } from '../notificationFactory'
import { useNotifications } from '../../lib/notificationContext'

export function NotificationManager(): JSX.Element {
  const { timer, dispatch } = useNotifications()
  const duration = 10 * 1000

  const notifications = useRef(randomizeNotifications(10))
  const [, setLastUpdate] = useState(Date.now())

  useEffect(() => {
    const subscriber = (deltaTime: number) => {
      setLastUpdate(Date.now())
      const delta = deltaTime / duration

      notifications.current.forEach((notification) => {
        const progress = notification.progress - delta

        if (progress <= 0) {
          dispatch(removeNotification(notification.id))
          return
        }

        dispatch(updateNotification({ ...notification, progress }))
      })
    }

    timer.subscribe(subscriber)
    timer.start()
  }, [])

  return <></>
}
