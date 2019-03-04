import React from 'react'
import styled from 'styled-components'
import { darken, rgba } from 'polished'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import NewsletterForm from '../../features/events/components/newsletter'
import { Row, Column } from '../grid'
import Facebook from '../../components/icons/facebook'
import Twitter from '../../components/icons/twitter'
import Instagram from '../../components/icons/instagram'
import Youtube from '../../components/icons/youtube'
import LinkedIn from '../../components/icons/linkedin'
import Snapchat from '../../components/icons/snapchat'

const FooterWrapper = styled.div`
  background-color: ${theme.colors.indigo};
`

const StyledFooter = styled.footer`
  background-color: ${theme.colors.indigo};
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`

const Heading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 0 0 1.25rem 0;
  color: ${theme.colors.white};

  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
  `};
`

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    justify-content: left;
    height: 58px;
  `};
`

const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const SocialLink = styled.a`
  &:hover,
  &:focus {
    svg {
      path {
        transition: fill 0.15s linear;
        fill: ${darken(0.1, theme.colors.eucalyptusGreen)};
      }
    }
  }
`
const Small = styled.small`
  padding-top: 30px;
  border-top: 1px solid ${rgba(theme.colors.white, 0.3)};
  display: block;
  font-size: 0.75rem;
  color: ${theme.colors.white};

  ${media.tablet`
    margin-top: 40px;
  `};
`

export const Footer = () => (
  <FooterWrapper>
    <StyledFooter>
      <Row>
        <Column width={[1, 1, 1, 2 / 3]}>
          <NewsletterForm />
        </Column>
        <Column width={[1, 1, 1, 1 / 3]}>
          <Heading>Follow us on</Heading>
          <SocialList>
            <SocialItem>
              <SocialLink
                href="https://www.facebook.com/pg/LondonLGBTPride"
                aria-label="Link to Facebook page"
              >
                <Facebook />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://twitter.com/PrideInLondon"
                aria-label="Link to Twitter page"
              >
                <Twitter />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://instagram.com/prideinlondon"
                aria-label="Link to Instagram page"
              >
                <Instagram />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://www.youtube.com/user/LondonLGBTPride?sub_confirmation=1"
                aria-label="Link to Youtube channel"
              >
                <Youtube />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://www.linkedin.com/company/prideinlondon"
                aria-label="Link to LinkedIn page"
              >
                <LinkedIn />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://www.snapchat.com/add/LondonLGBTPride"
                aria-label="Link to Snapchat page"
              >
                <Snapchat />
              </SocialLink>
            </SocialItem>
          </SocialList>
        </Column>
        <Column width={1}>
          <Small>
            London LGBT+ Community Pride CIC, PO Box 71920, London NW2 9QN -
            Registered in England and Wales as a Community Interest Company (no.
            8321669)
          </Small>
        </Column>
      </Row>
    </StyledFooter>
  </FooterWrapper>
)

export default Footer
