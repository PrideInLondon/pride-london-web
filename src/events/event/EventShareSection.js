import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import EmailIcon from '../../components/icons/email'
import TwitterIcon from '../../components/icons/twitter'
import FacebookIcon from '../../components/icons/facebook'
import LinkedinIcon from '../../components/icons/linkedin'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { formatShortTime } from '../helpers'

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
  font-weight: 600;
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
  display: ${(props) => (props.desktopOnly ? 'none' : 'inline-block')};

  ${media.tablet`
    margin-right: 15px;
    width: 25px;
    height: 25px;
    display: ${(props) => (props.mobileOnly ? 'none' : 'inline-block')};
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

const shareText = (name, date, location) => {
  const startDay = moment(date).format('ddd D MMM')
  const startTime = formatShortTime(date)
  return `I'm heading to ${name} on ${startDay} at ${startTime}. Join me!\n\nFind out more here:\n${location}`
}

const mailShareUrl = (name, date, location) => {
  const subject = encodeURIComponent(name)
  const body = encodeURIComponent(shareText(name, date, location))
  return `mailto:?subject=${subject}&body=${body}`
}

const twitterShareUrl = (name, date, location) => {
  const body = encodeURIComponent(shareText(name, date, location))
  return `https://twitter.com/intent/tweet?text=${body}`
}

const facebookShareUrl = (location) => {
  const encodedUrl = encodeURIComponent(location)
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
}

const linkedinShareUrl = (name, date, location) => {
  const encodedUrl = encodeURIComponent(location)
  const body = encodeURIComponent(shareText(name, date, location))
  const encodedName = encodeURIComponent(name)
  return `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedName}&summary=${body}&source=prideinlondon.org`
}

const EventShareSection = ({ name, location, date }) => (
  <ShareList>
    <ShareText>Share</ShareText>
    <ShareLink
      href={mailShareUrl(name, date, location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EmailIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
    <ShareLink
      href={twitterShareUrl(name, date, location)}
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
    <ShareLink
      href={linkedinShareUrl(name, date, location)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinIcon width={25} height={25} fill={theme.colors.indigo} />
    </ShareLink>
  </ShareList>
)

EventShareSection.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default EventShareSection
