import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
  page?: boolean
}

export const Container: FC<ContainerProps> = ({ children, className, page }) => {
  const classNames = getClassNames(
    styles.Container,
    page && styles.PageContainer,
    className
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}