import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import { H6 } from '@shared/components/Text'
import styles from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  const classNames = getClassNames(styles.Badge, className)

  return (
    <H6 className={classNames}>
      {children}
    </H6>
  )
}