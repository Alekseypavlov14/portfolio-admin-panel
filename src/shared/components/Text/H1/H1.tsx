import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './H1.module.css'

interface H1Props {
  children: ReactNode
  className?: string
}

export const H1: FC<H1Props> = ({ children, className }) => {
  const classNames = getClassNames(styles.H1, className)

  return (
    <h1 className={classNames}>
      {children}
    </h1>
  )
}