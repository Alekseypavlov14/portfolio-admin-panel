import { FC } from 'react'
import styles from './CloseButton.module.css'

interface CloseButtonProps {
  onClick: () => void
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={styles.CloseButton}
      onClick={onClick}
    >
      X
    </button>
  )
}