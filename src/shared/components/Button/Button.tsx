import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames' 
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
  big?: boolean
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  onClick, 
  big, 
  outlined, 
  className, 
  ...props 
}) => {
  const classNames = getClassNames(
    styles.Button,
    big && styles.Big,
    outlined && styles.Outlined,
    className
  )

  return (
    <button 
      className={classNames}
      onClick={onClick}
      {...props} 
    >
      {children}
    </button>
  )
}