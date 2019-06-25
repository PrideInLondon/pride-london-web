import React from 'react'
import styled from 'styled-components'
import EmailIcon from '../../../components/icons/email'
import TwitterIcon from '../../../components/icons/twitter'
import FacebookIcon from '../../../components/icons/facebook'
import MessengerIcon from '../../../components/icons/messenger'
import LinkedinIcon from '../../../components/icons/linkedin'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

const ShareList = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
  ${media.desktop`
    margin-bottom: 60px;
  `};
`

const ShareText = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-size: 600;
  line-height: 1.29;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 0;
  ${media.tablet`
    margin-right: 15px;
    font-size: 16px;
    line-height: 1.25;
  `}
`

const ShareLink = styled.a`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: none;

  ${media.tablet`
    margin-right: 15px;
    width: 25px;
    height: 25px;
  `}

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`

const EventShareSection = () => (
  <ShareList>
    <ShareText>Share</ShareText>
    <ShareLink>
      <EmailIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink>
      <TwitterIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink>
      <FacebookIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink>
      <MessengerIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink>
      <LinkedinIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
  </ShareList>
)

export default EventShareSection
