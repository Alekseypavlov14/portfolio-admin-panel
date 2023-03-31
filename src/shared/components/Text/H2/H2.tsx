import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames' 
import styles from './H2.module.css'

interface H2Props {
  children: ReactNode
  className?: string
}

export const H2: FC<H2Props> = ({ children, className }) => {
  const classNames = getClassNames(styles.H2, className)

  return (
    <h2 className={classNames}>
      {children}
    </h2>
  )
}