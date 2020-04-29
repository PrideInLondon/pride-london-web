import { useState, useEffect } from 'react'

export const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query)
      setMatches(media.matches)

      const listener = () => setMatches(media.matches)
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}
