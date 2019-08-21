import { useState, useEffect } from 'react'

export const useMediaQuery = (mediaQuery, ssrFallback) => {
  const mediaQueryList =
    typeof window !== `undefined` && window.matchMedia(mediaQuery)
  const matches = mediaQueryList ? mediaQueryList.matches : ssrFallback

  const [isMatch, setIsMatch] = useState(matches)

  useEffect(() => {
    const handler = () => setIsMatch(matches)
    mediaQueryList.addListener(handler)
    return () => mediaQueryList.removeListener(handler)
  }, [])

  return isMatch
}
