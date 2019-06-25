import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const twitterShareUrl = name => {
  return `https://twitter.com/home?status=${name}`
}

const facebookShareUrl = url => {
  const encodedUrl = encodeURIComponent(url)
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
}

const linkedinShareUrl = (name, description, url) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description)
  const encodedName = encodeURIComponent(name)
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedName}&summary=${encodedDescription}&source=prideinlondon.org`
}

const EventShareSection = ({ name, description, location }) => (
  <ShareList>
    <ShareText>Share</ShareText>
    <ShareLink>
      <EmailIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink
      href={twitterShareUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink
      href={facebookShareUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink>
      <MessengerIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink
      href={linkedinShareUrl(name, description, location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
  </ShareList>
)

EventShareSection.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default EventShareSection
