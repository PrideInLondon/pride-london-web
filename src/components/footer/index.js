import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
// import theme from '../../theme/theme'
// import { media } from '../../theme/media'

import { Row } from '../grid'
import Facebook from '../../components/icons/facebook'
import Twitter from '../../components/icons/twitter'
import Instagram from '../../components/icons/instagram'
import Youtube from '../../components/icons/youtube'
import Linkedin from '../../components/icons/linkedin'
import Snapchat from '../../components/icons/snapchat'
import {
  FooterWrapper,
  StyledFooter,
  SponsorsHeading,
  SocialList,
  SocialItem,
  SocialLink,
  HashTags,
  HashTag,
  SponsorsSection,
  EventsCTAWrapper,
  EventsCTALink,
} from './styles'

export const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query footerSponsorsQuery {
          allContentfulSponsor(
            filter: { sponsorLevel: { regex: "/Headline|Gold/" } }
          ) {
            edges {
              node {
                sponsorName
                sponsorUrl
                sponsorLogo {
                  sizes(maxHeight: 168, quality: 90) {
                    src
                  }
                }
                sponsorLevel
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allContentfulSponsor
        const iconSize = 20
        console.log(edges)
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
                      href="https://twitter.com/intent/tweet?button_hashtag=diversityFTW"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      #diversityFTW
                    </HashTag>
                  </HashTags>
                  <EventsCTAWrapper width={[1, 1, 0.3]}>
                    <EventsCTALink to="/events">
                      Never miss an event
                    </EventsCTALink>
                  </EventsCTAWrapper>
                </SocialSection>
                <SponsorsSection width={1}>
                  <SponsorsHeading>Our amazing partners</SponsorsHeading>
                  {/* {edges.map(sponsor => sponsor)} */}
                </SponsorsSection>
              </Row>
            </StyledFooter>
          </FooterWrapper>
        )
      }}
    />
  )
}

export default Footer
