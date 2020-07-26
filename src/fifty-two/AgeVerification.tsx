import React from 'react'
import Cookies from 'js-cookie'
import { CTALink } from '../components/ctaLink'
import { Modal } from '../components/modal/Modal'
import { Wrapper } from '../components/wrapper/Wrapper'
import { H3, P } from '../components/typography'
import { Button } from '../components/button'

export const AgeVerification = () => (
  <Modal
    dismissable={false}
    open={Cookies.get('fiftyTwo') !== 'accept'}
    onClose={() => {
      Cookies.set('fiftyTwo', 'accept', { expires: 365 })
    }}
  >
    {({ setIsOpen }) => (
      <Wrapper textAlign="center" width="100%">
        <H3 color="white">Age verification</H3>
        <P color="white" variant="lg">
          The following page contains artwork depicting themes and content that
          may not be suitable for under 18s.
        </P>
        <Button mr="lg" onClick={() => setIsOpen(false)}>
          Continue to page
        </Button>
        <Button variant="outline-white" to="/">
          Redirect me
        </Button>
        <P variant="sm" color="white" mt="lg">
          See Fifty-Two's{' '}
          <CTALink to="/fifty-two/terms" color="white">
            terms and conditions
          </CTALink>
        </P>
      </Wrapper>
    )}
  </Modal>
)
