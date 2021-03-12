import React, { FC } from 'react'

export type ButtonProps = {
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}
