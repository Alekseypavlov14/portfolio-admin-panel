import { RefObject, useEffect } from "react"

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  element: RefObject<T>, 
  handler: (e: MouseEvent) => void
) {
  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      if (!element.current || element.current.contains(e.target as Node)) return
      handler(e)
    }

    document.addEventListener('mousedown', clickHandler)
    return () => document.removeEventListener('mousedown', clickHandler)
  })
}