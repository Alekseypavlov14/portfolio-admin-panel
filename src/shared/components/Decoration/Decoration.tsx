import { FC } from 'react'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './Decoration.module.css'

interface DecorationProps {
  className: string
}

export const Decoration: FC<DecorationProps> = ({ className }) => {
  const classNames = getClassNames(styles.Decoration, className)

  return (
    <div className={classNames}>
      <div className={styles.Container} />
    </div>
  )
}