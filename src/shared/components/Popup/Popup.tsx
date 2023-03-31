import { FC, ReactNode, useRef } from 'react'
import { useClickOutside } from './hooks/useClickOutside'
import { getClassNames } from '@shared/lib/getClassNames' 
import { useBodyLock } from './hooks/useBodyLock'
import styles from './Popup.module.css'

interface PopupProps {
  children: ReactNode
  isOpened: boolean
  onClose: () => void
  className?: string
}

export const Popup: FC<PopupProps> = ({ children, isOpened, onClose, className }) => {
  const popupClassNames = getClassNames(styles.Popup, isOpened && styles.PopupOpened, className)
  const backgroundClassNames = getClassNames(styles.Background, isOpened && styles.BackgroundOpened)

  const popupRef = useRef<HTMLDivElement>(null)
  
  useBodyLock(isOpened, [styles.BodyLocked])
  useClickOutside(popupRef, onClose)

  return (
    <div className={backgroundClassNames}>
      <div 
        className={popupClassNames}
        ref={popupRef}
      >
        {children}
      </div>
    </div>
  )
}