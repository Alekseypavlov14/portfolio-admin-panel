import { FC, InputHTMLAttributes } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  const classNames = getClassNames(styles.Input, className)

  return (
    <input 
      className={classNames}
      {...props}
    />
  )
}