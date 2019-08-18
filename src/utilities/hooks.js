import { useState, useEffect } from 'react'

export const useMediaQuery = mediaQuery => {
  const mediaQueryList = window.matchMedia(mediaQuery)

  const [isMatch, setIsMatch] = useState(mediaQueryList.matches)

  useEffect(() => {
    const handler = () => setIsMatch(mediaQueryList.matches)
    mediaQueryList.addListener(handler)
    return () => mediaQueryList.removeListener(handler)
  }, [])

  return isMatch
}
