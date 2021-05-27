// adapted from: https://usehooks.com/useEventListener/

import { useRef, useEffect } from 'react'

export const useEventListener = (eventName: string, handler: EventListener) => {
  const savedHandler = useRef<EventListener>()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Make sure window is supported (ie client-side render)
      const isSupported =
        typeof window !== 'undefined' && window.addEventListener
      if (!isSupported) return

      // Create event listener that calls handler function stored in ref
      const eventListener: EventListener = (event) =>
        savedHandler.current!(event)

      // Add event listener
      window.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(eventName, eventListener)
      }
    },
    [eventName] // Re-run if eventName or element changes
  )
}
