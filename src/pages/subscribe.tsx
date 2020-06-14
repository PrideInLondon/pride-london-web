import React, { useEffect, useRef } from 'react'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'

// const embed = `<script
// src=""
// data-sharing="lp-embed"
// data-page-domain="email.prideinlondon.org"
// data-page-id="52OV-3PP/sign-up"
// ></script>`

const Subscribe = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    const src = '//email.prideinlondon.org/resources/sharing/embed.js'

    script.src = src
    script.setAttribute('data-sharing', 'lp-embed')
    script.setAttribute('data-page-domain', 'email.prideinlondon.org')
    script.setAttribute('data-page-id', '52OV-3PP/sign-up')
    const div = ref.current
    if (div) {
      div.appendChild(script)
    }

    return () => {
      if (div) {
        div.removeChild(script)
        div.innerHTML = ''
      }
    }
  })

  return (
    <>
      <Banner titleText="Subscribe" color={colors.bondiBlue} />
      <div ref={ref}></div>
    </>
  )
}

export default Subscribe
