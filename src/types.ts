export enum NotificationType { 
    Success = 'success',
    Danger = 'danger',
    Info = 'info',
    Default = 'default',
    Warning = 'warning'    
}

export interface INotification {
    readonly id: string
    readonly message: string
    readonly created: string 
    readonly type: string
}


export interface INotificationStore {
    createNotification: (notification: Partial<INotification>) => INotification
    removeNotification: (id: string) => void
    removeAllNotifications: () => void    
}

