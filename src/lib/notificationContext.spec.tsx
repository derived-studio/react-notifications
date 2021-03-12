import React, { FC } from 'react'
import { fireEvent, render } from '@testing-library/react'
import {
  NotificationContextProps,
  NotificationContextProvider,
  useNotifications,
  withNotifications
} from './notificationContext'

import { createTestNotification } from './notification.mocks'
import { addNotification } from './state'
import * as state from './state'

describe('Notification context and hooks', () => {
  afterEach(jest.restoreAllMocks)

  describe('notification context', () => {
    it('renders wrapped children', () => {
      const content = 'content wrapped by provider'
      const { getByText } = render(
        <NotificationContextProvider>
          <div>{content}</div>
        </NotificationContextProvider>
      )
      expect(getByText(content)).toBeInTheDocument()
    })
  })

  describe('useNotifications hook', () => {
    const TestComponent: FC = () => {
      const { notifications } = useNotifications()
      return (
        <div>
          {notifications.map(({ id, message }) => (
            <div key={id}>{message}</div>
          ))}
        </div>
      )
    }

    it('throws an error for missing provider', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {
        /* purposely left empty */
      })

      expect(() => render(<TestComponent />)).toThrow(
        'Missing context. Component with notification context is not wrapped in NotificationProvider.'
      )
    })

    it('throws an error for missing provider', () => {
      const notificationOne = createTestNotification({ id: 'n-1', message: 'first message' })
      const notificationTwo = createTestNotification({ id: 'n-2', message: 'second message' })

      const { getByText } = render(
        <NotificationContextProvider notifications={[notificationOne, notificationTwo]}>
          <TestComponent />
        </NotificationContextProvider>
      )

      expect(getByText(notificationOne.message)).toBeInTheDocument()
      expect(getByText(notificationTwo.message)).toBeInTheDocument()
    })
  })

  describe('withNotification HOC', () => {
    it('provides notifications via context props when wrapped', () => {
      const TestComponent: FC = withNotifications((props: NotificationContextProps) => {
        const { notifications } = props
        return (
          <div>
            {notifications.map(({ id, message }) => (
              <div key={id}>{message}</div>
            ))}
          </div>
        )
      })

      const notificationOne = createTestNotification({ id: 'n-1', message: 'first message' })
      const notificationTwo = createTestNotification({ id: 'n-2', message: 'second message' })

      const { getByText } = render(
        <NotificationContextProvider notifications={[notificationOne, notificationTwo]}>
          <TestComponent />
        </NotificationContextProvider>
      )

      expect(getByText(notificationOne.message)).toBeInTheDocument()
      expect(getByText(notificationTwo.message)).toBeInTheDocument()
    })

    it('provides dispatch (redux-like) method via context', () => {
      const testNotification = createTestNotification()
      const addBtnLabel = 'add test notification'
      const TestComponent: FC = withNotifications((props: NotificationContextProps) => {
        const { dispatch } = props
        const onClick = () => dispatch(addNotification(testNotification))
        return <button onClick={onClick}>{addBtnLabel}</button>
      })

      const notificationsReducer = jest.spyOn(state, 'notificationsReducer')

      const { getByText } = render(
        <NotificationContextProvider>
          <TestComponent />
        </NotificationContextProvider>
      )

      fireEvent.click(getByText(addBtnLabel))
      expect(notificationsReducer).toHaveBeenCalledTimes(1)
      expect(notificationsReducer).toHaveBeenCalledWith([], addNotification(testNotification))
    })
  })
})
