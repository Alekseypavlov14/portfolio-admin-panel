import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames' 
import styles from './H6.module.css'

interface H6Props {
  children: ReactNode
  className?: string
}

export const H6: FC<H6Props> = ({ children, className }) => {
  const classNames = getClassNames(styles.H6, className)

  return (
    <h6 className={classNames}>
      {children}
    </h6>
  )
}
