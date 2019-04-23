import React from 'react'
import PropTypes from 'prop-types'
import { Row } from '../grid'
import Facebook from '../../components/icons/facebook'
import Twitter from '../../components/icons/twitter'
import Instagram from '../../components/icons/instagram'
import Youtube from '../../components/icons/youtube'
import Linkedin from '../../components/icons/linkedin'
import Snapchat from '../../components/icons/snapchat'
import CTALink from '../ctaLink'
import {
  FooterWrapper,
  StyledFooter,
  SocialList,
  SocialItem,
  SocialLink,
  SocialSection,
  HashTags,
  HashTag,
  SponsorsHeading,
  SponsorsSection,
  SponsorsCTAWrapper,
  SponsorsContainer,
  SponsorImgWrapper,
  SubscribeWrapper,
  SubscribeLink,
  LegalSection,
  LegalStrapline,
  LegalList,
  LegalListItem,
  LegalLink,
} from './styles'

export const Footer = ({ data }) => {
  const { edges } = data.allContentfulSponsor
  const iconSize = 20
  const sponsorOrder = ['Headline', 'Gold', 'Silver', 'Bronze']
  return (
    <FooterWrapper>
      <StyledFooter>
        <Row>
          <SocialSection width={1}>
            <div>
              <SocialList>
                <SocialItem>
                  <SocialLink
                    href="https://www.facebook.com/pg/LondonLGBTPride"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on"
                  >
                    <Facebook width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="https://twitter.com/PrideInLondon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="http://instagram.com/prideinlondon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="https://www.youtube.com/user/LondonLGBTPride?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Youtube"
                  >
                    <Youtube width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="https://www.linkedin.com/company/prideinlondon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Linkedin"
                  >
                    <Linkedin width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    href="http://www.snapchat.com/add/LondonLGBTPride"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Snapchat"
                  >
                    <Snapchat width={iconSize} height={iconSize} />
                  </SocialLink>
                </SocialItem>
              </SocialList>
            </div>
            <HashTags width={[1, 1, 0.4]}>
              <HashTag
                href="https://twitter.com/intent/tweet?button_hashtag=pride"
                target="_blank"
                rel="noopener noreferrer"
              >
                #pride
              </HashTag>
              <HashTag
                href="https://twitter.com/intent/tweet?button_hashtag=prideinlondon"
                target="_blank"
                rel="noopener noreferrer"
              >
                #prideinlondon
              </HashTag>
              <HashTag
                href="https://twitter.com/intent/tweet?button_hashtag=pridejubilee"
                target="_blank"
                rel="noopener noreferrer"
              >
                #pridejubilee
              </HashTag>
            </HashTags>
            <SubscribeWrapper width={[1, 1, 0.3]}>
              <SubscribeLink
                href="https://prideinlondon.us6.list-manage.com/subscribe?u=8289d9ca2253b74574f849c73&id=a2423c3382"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe for Pride updates
              </SubscribeLink>
            </SubscribeWrapper>
          </SocialSection>
          <SponsorsSection width={1}>
            <SponsorsHeading>Our amazing partners</SponsorsHeading>
            <SponsorsContainer>
              {sponsorOrder.map(order =>
                edges.map(
                  ({ node: { sponsorLogo, sponsorLevel, sponsorName, id } }) =>
                    order === sponsorLevel && (
                      <SponsorImgWrapper key={id}>
                        <img src={sponsorLogo.sizes.src} alt={sponsorName} />
                      </SponsorImgWrapper>
                    )
                )
              )}
            </SponsorsContainer>
            <SponsorsCTAWrapper>
              <CTALink to="/support-us/partners">View all</CTALink>
              <CTALink to="mailto:sponsor@prideinlondon.org" contact>
                Become a partner
              </CTALink>
            </SponsorsCTAWrapper>
          </SponsorsSection>
          <LegalSection width={1}>
            <LegalList>
              <LegalListItem>
                <LegalLink to="/privacy-and-cookies">
                  Privacy &amp; cookies
                </LegalLink>
              </LegalListItem>
              <LegalListItem>
                <LegalLink to="/media-centre">Media centre</LegalLink>
              </LegalListItem>
            </LegalList>
            <LegalStrapline>
              London LGBT+ Community Pride CIC, PO Box 71920, London NW2 9QN -
              Registered in England and Wales as a Community Interest Company (
              <a
                href="https://beta.companieshouse.gov.uk/company/08321669"
                target="_blank"
                rel="noopener noreferrer"
              >
                no. 8321669
              </a>
              )
            </LegalStrapline>
          </LegalSection>
        </Row>
      </StyledFooter>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    allContentfulSponsor: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

Footer.defaultProps = {
  data: {},
}

export default Footer
