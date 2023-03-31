import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames' 
import styles from './Anchor.module.css'

interface AnchorProps {
  href: string
  children?: ReactNode
  className?: string
}

export const Anchor: FC<AnchorProps> = ({ href, children, className }) => {
  const classNames = getClassNames(styles.Anchor, className)
  const content = children || href

  return (
    <a 
      className={classNames}
      target='_blank'
      href={href} 
    >
      {content}
    </a>
  )
}