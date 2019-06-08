import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Cookies from 'js-cookie'
import Helmet from 'react-helmet'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../grid'
import CloseIcon from '../icons/closeIcon'

const CookieWrapper = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  transform: ${({ hide }) => (hide ? 'translateY(100%)' : 'translateY(0)')};
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  transition: transform 0.3s ease, opacity 0.3s ease;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`
const CookieText = styled.p`
  font-size: 0.875rem;
  margin: 0;
`

const CookieLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: underline;
  font-weight: bold;
`

const CookieActions = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet`
    justify-content: flex-end;
  `}
`

const CookieAgree = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  transition: color 0.15s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }
`

const CookieDismiss = styled.a`
  display: block;
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;
  svg {
    g {
      transition: stroke 0.15s linear;
      stroke: ${theme.colors.white};
    }
  }

  &:hover,
  &:focus {
    svg {
      g {
        stroke: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`

const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${process.env.GATSBY_GTM_ID}');`

function loadGTM() {
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.GATSBY_GTM_ID &&
    typeof window !== 'undefined'
  ) {
    return <Helmet script={[{ type: 'text/javascript', innerHTML: gtm }]} />
  }
}

const CookieNotice = () => {
  // Set as rejected so that when gatsby builds for production the server side rendering will generate the html for the cookie notice as closed.
  const [cookie, setCookie] = useState('rejected')

  useEffect(() => {
    setCookie(Cookies.get('accept') || 'unspecified')
  }, [])

  useEffect(() => {
    Cookies.set('accept', cookie)
  }, [cookie])

  const handleAgree = e => {
    e.preventDefault()
    setCookie('accepted')
  }

  const handleDismiss = e => {
    e.preventDefault()
    setCookie('rejected')
  }

  return (
    <>
      {cookie === 'accepted' && loadGTM()}
      {
        <CookieWrapper hide={cookie !== 'unspecified'}>
          <Container>
            <Row>
              <Column width={[1, 1, 0.6]}>
                <CookieText>
                  We process information about your visit using cookies for
                  performance and usage analysis, and to allow bespoke marketing
                  to your individual interests. For further information see our{' '}
                  <CookieLink to="/privacy">Privacy & Cookie Policy</CookieLink>
                  .
                </CookieText>
              </Column>
              <CookieActions width={[1, 1, 0.4]}>
                <CookieAgree role="button" onClick={handleAgree}>
                  I agree to cookies
                </CookieAgree>
                <CookieDismiss
                  aria-label="I do not agree and close"
                  onClick={handleDismiss}
                >
                  <CloseIcon />
                </CookieDismiss>
              </CookieActions>
            </Row>
          </Container>
        </CookieWrapper>
      }
    </>
  )
}

export default CookieNotice
