import { useEffect } from 'react'

export const useCookieConsent = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.GATSBY_USERCENTRICS_ID
    ) {
      const script = document.createElement('script')

      script.src = 'https://app.usercentrics.eu/browser-ui/latest/bundle.js'
      script.defer = true
      script.id = 'usercentrics-cmp'
      script.setAttribute(
        'data-settings-id',
        process.env.GATSBY_USERCENTRICS_ID
      )
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])
}
