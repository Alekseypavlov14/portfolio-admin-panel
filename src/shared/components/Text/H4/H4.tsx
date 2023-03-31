import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './H4.module.css'

interface H4Props {
  children: ReactNode
  className?: string
}

export const H4: FC<H4Props> = ({ children, className }) => {
  const classNames = getClassNames(styles.H4, className)

  return (
    <h4 className={classNames}>
      {children}
    </h4>
  )
}
