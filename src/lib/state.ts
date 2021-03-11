import { INotification } from './notification.types'

export type Action<TPayload = unknown> = { type: string; payload: TPayload }
export interface ActionCreator<TPayload> {
  type: string
  (payload: TPayload): Action<TPayload>
}

function createAction<TPayload = void>(type: string): ActionCreator<TPayload> {
  return Object.assign((payload: TPayload) => ({ type, payload }), { type })
}

function isType<TPayload>(action: Action, actionCreator: ActionCreator<TPayload>): action is Action<TPayload> {
  return action.type === actionCreator.type
}

export const ActionPrefix = 'NOTIFICATIONS'

export const addNotification = createAction<INotification>(`${ActionPrefix}/ADD_NOTIFICATION`)
export const updateNotification = createAction<INotification>(`${ActionPrefix}/UPDATE_NOTIFICATION`)
export const removeNotification = createAction<string>(`${ActionPrefix}/REMOVE_NOTIFICATION`)
export const removeAllNotifications = createAction(`${ActionPrefix}/REMOVE_ALL_NOTIFICATIONS`)

export function notificationsReducer(notifications: INotification[], action?: Action): INotification[] {
  if (!action) {
    return [...notifications]
  }

  if (isType(action, addNotification)) {
    return [...notifications, action.payload]
  }

  if (isType(action, removeNotification)) {
    return notifications.filter(({ id }) => id !== action.payload)
  }

  if (isType(action, updateNotification)) {
    const { payload } = action
    return notifications.map((notification) => {
      return notification.id === payload.id ? payload : notification
    })
  }

  if (isType(action, removeAllNotifications)) {
    return []
  }

  return notifications
}
