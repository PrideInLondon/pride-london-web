import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'
import { Wrapper } from '../components/wrapper/Wrapper'

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
      <Helmet>
        <style>{`footer {display: none; }`}</style>
      </Helmet>
      <Banner
        titleText="Subscribe"
        subtitleText="Subscribe to hear more from Pride in London"
        color={colors.bondiBlue}
      />
      <Wrapper pb="xxl" pt="lg">
        <div ref={ref}></div>
      </Wrapper>
    </>
  )
}

export default Subscribe
