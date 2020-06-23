import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'
import { Wrapper } from '../components/wrapper/Wrapper'
import { P } from '../components/typography/Typography'

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
    <Wrapper pb="xxl">
      <Helmet>
        <style>{`footer {display: none; }`}</style>
      </Helmet>
      <Banner
        titleText="Subscribe"
        subtitleText="Subscribe to hear more from Pride in London"
        color={colors.bondiBlue}
      />
      <P width="95%" maxWidth="1242px" mx="auto" pt="lg">
        Want to be in the know on all things queer in the capital? Enter your
        contact details below to receive email updates from Pride in London.
      </P>
      <div ref={ref}></div>
    </Wrapper>
  )
}

export default Subscribe
