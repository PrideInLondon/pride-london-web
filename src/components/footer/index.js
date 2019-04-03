import React from 'react'
import NewsletterForm from '../../features/events/components/newsletter'
import { Row, Column } from '../grid'
import Facebook from '../../components/icons/facebook'
import Twitter from '../../components/icons/twitter'
import Instagram from '../../components/icons/instagram'
import Youtube from '../../components/icons/youtube'
import LinkedIn from '../../components/icons/linkedin'
import Snapchat from '../../components/icons/snapchat'
import {
  FooterWrapper,
  StyledFooter,
  Heading,
  SocialList,
  SocialItem,
  SocialLink,
  Small,
} from './styles'

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
