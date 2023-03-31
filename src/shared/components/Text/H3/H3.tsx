import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './H3.module.css'

interface H3Props {
  children: ReactNode
  className?: string
}

export const H3: FC<H3Props> = ({ children, className }) => {
  const classNames = getClassNames(styles.H3, className)

  return (
    <h3 className={classNames}>
      {children}
    </h3>
  )
}
