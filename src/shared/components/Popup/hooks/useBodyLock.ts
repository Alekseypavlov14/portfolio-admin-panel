import { useEffect } from 'react'

export function useBodyLock(isOpened: boolean, styles: string[]) {
  useEffect(() => {
    if (isOpened) document.body.classList.add(...styles)
    else document.body.classList.remove(...styles)
  }, [isOpened])
}