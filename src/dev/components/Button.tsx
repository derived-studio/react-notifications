import React, { FC } from 'react'
import './button.scss'

export type ButtonProps = {
  className?: string
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={`button ${className}`.trimRight()} onClick={onClick}>
      {children}
    </button>
  )
}
