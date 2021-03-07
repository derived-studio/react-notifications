import { INotification } from './Notification'

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
export const removeNotification = createAction<string>(`${ActionPrefix}/REMOVE_NOTIFICATION`)
export const removeAllNotifications = createAction(`${ActionPrefix}/REMOVE_ALL_NOTIFICATIONS`)

export function reducer(notifications: INotification[], action: Action) {
  if (isType(action, addNotification)) {
    return [...notifications, action.payload]
  }

  if (isType(action, removeNotification)) {
    return notifications.filter(({ id }) => id !== action.payload)
  }

  if (isType(action, removeAllNotifications)) {
    return []
  }

  return notifications
}
