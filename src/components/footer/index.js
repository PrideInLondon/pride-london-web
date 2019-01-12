import React from 'react'
import styled from 'styled-components'
import { darken, rgba } from 'polished'
import { media } from '../../theme/media'
import NewsletterForm from '../../Features/Events/Components/newsletter'
import { Row, Column } from '../grid'
import Facebook from '!svg-react-loader?name=Facebook!../../theme/assets/images/icon-facebook.svg'  // eslint-disable-line
import Twitter from '!svg-react-loader?name=Twitter!../../theme/assets/images/icon-twitter.svg'  // eslint-disable-line
import Instagram from '!svg-react-loader?name=Instagram!../../theme/assets/images/icon-instagram.svg'  // eslint-disable-line
import Youtube from '!svg-react-loader?name=Youtube!../../theme/assets/images/icon-youtube.svg'  // eslint-disable-line
import LinkedIn from '!svg-react-loader?name=LinkedIn!../../theme/assets/images/icon-linkedin.svg'  // eslint-disable-line
import Snapchat from '!svg-react-loader?name=Snapchat!../../theme/assets/images/icon-snapchat.svg'  // eslint-disable-line

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.indigo};
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
  color: ${props => props.theme.colors.white};

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
        fill: ${props => darken(0.1, props.theme.colors.eucalyptusGreen)};
      }
    }
  }
`
const Small = styled.small`
  padding-top: 30px;
  border-top: 1px solid ${props => rgba(props.theme.colors.white, 0.3)};
  display: block;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.white};

  ${media.tablet`
    margin-top: 40px;
  `};
`

export const Footer = () => (
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
              href="http://instagram.com/prideinlondon"
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
              href="http://www.snapchat.com/add/LondonLGBTPride"
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
)

export default Footer
