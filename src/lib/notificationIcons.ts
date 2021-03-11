import { NotificationType } from './notification.types'

export default {
  [NotificationType.Default]: '#',
  [NotificationType.Info]: 'ℹ',
  [NotificationType.Error]: '!',
  [NotificationType.Success]: '✓',
  [NotificationType.Warning]: '⚠'
}
