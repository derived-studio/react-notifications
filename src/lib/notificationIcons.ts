import { NotificationType } from './notification.types'

export const defaultIcons = {
  [NotificationType.Default]: '#',
  [NotificationType.Info]: 'ℹ',
  [NotificationType.Error]: '!',
  [NotificationType.Success]: '✓',
  [NotificationType.Warning]: '⚠'
}
