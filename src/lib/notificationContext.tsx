import React, { ComponentType, createContext, ReactElement, ReactNode, useContext, useReducer } from 'react'
import { INotification } from './Notification'
import { Action, notificationsReducer } from './state'
import type { Timer } from './Timer'

export type NotificationContextProps = {
  dispatch: (action: Action) => void
  notifications: INotification[]
  timer?: Timer
}

export type DictionaryProviderParams = {
  notifications?: INotification[]
  timer?: Timer
  children: ReactNode
}

export const NotificationContext = createContext<NotificationContextProps | null>(null)

export function NotificationContextProvider(props: DictionaryProviderParams): ReactElement {
  const { children, timer, notifications: initialState = [] as INotification[] } = props
  const [notifications, dispatch] = useReducer(notificationsReducer, initialState)

  const context: NotificationContextProps = {
    dispatch,
    notifications,
    timer
  }

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>
}

export function useNotifications(): NotificationContextProps {
  const context = useContext(NotificationContext)
  if (!context) {
    throw Error('Missing context. Component with notification context is not wrapped in NotificationProvider.')
  }
  return context
}

export function withNotifications<P>(
  WrappedComponent: ComponentType<P>
): React.FC<Omit<P, keyof NotificationContextProps>> {
  return function withNotificationsHOC({ ...props }) {
    const { dispatch, notifications } = useNotifications()
    const wrappedProps = { ...props, dispatch, notifications }
    return <WrappedComponent {...((wrappedProps as unknown) as P)} />
  }
}
