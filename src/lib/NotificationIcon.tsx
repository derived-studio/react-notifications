import React, { FC } from 'react'

export type NotificationIconProps = {
  icon?: string
}

export const NotificationIcon: FC<NotificationIconProps> = ({ icon }) => {
  if (!icon) {
    return null
  }
  return <div className="icon">{icon.length <= 2 ? <span>{icon}</span> : <img src={icon} />}</div>
}
