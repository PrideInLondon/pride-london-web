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

type EventShareSection = {
  name: string
  location: string
  date: string
}

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

const ShareLink = styled.a<{ desktopOnly?: boolean; mobileOnly?: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: none;
  display: ${props => (props.desktopOnly ? 'none' : 'inline-block')};

  ${media.tablet`
    margin-right: 15px;
    width: 25px;
    height: 25px;
    display: ${(props: { mobileOnly: boolean }) =>
      props.mobileOnly ? 'none' : 'inline-block'};
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

const shareText = (
  name: EventShareSection['name'],
  date: EventShareSection['date'],
  location: EventShareSection['location']
) => {
  const startDay = moment(date).format('ddd D MMM')
  const startTime = formatShortTime(date)
  return `I'm heading to ${name} on ${startDay} at ${startTime}. Join me!\n\nFind out more here:\n${location}`
}

export const mailShareUrl = (
  name: EventShareSection['name'],
  date: EventShareSection['date'],
  location: EventShareSection['location']
) => {
  const subject = encodeURIComponent(name)
  const body = encodeURIComponent(shareText(name, date, location))
  return `mailto:?subject=${subject}&body=${body}`
}

export const twitterShareUrl = (
  name: EventShareSection['name'],
  date: EventShareSection['date'],
  location: EventShareSection['location']
) => {
  const body = encodeURIComponent(shareText(name, date, location))
  return `https://twitter.com/intent/tweet?text=${body}`
}

export const facebookShareUrl = (location: EventShareSection['location']) => {
  const encodedUrl = encodeURIComponent(location)
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
}

export const linkedinShareUrl = (
  name: EventShareSection['name'],
  date: EventShareSection['date'],
  location: EventShareSection['location']
) => {
  const encodedUrl = encodeURIComponent(location)
  const body = encodeURIComponent(shareText(name, date, location))
  const encodedName = encodeURIComponent(name)
  return `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedName}&summary=${body}&source=prideinlondon.org`
}

export const getEventShareLinks = ({
  name,
  location,
  date,
}: EventShareSection) => [
  {
    title: 'mail link',
    icon: <EmailIcon width={25} height={25} fill={theme.colors.indigo} />,
    href: mailShareUrl(name, date, location),
  },
  {
    title: 'twitter link',
    icon: <TwitterIcon width={25} height={25} fill={theme.colors.indigo} />,
    href: twitterShareUrl(name, date, location),
  },
  {
    title: 'facebook link',
    icon: <FacebookIcon width={25} height={25} fill={theme.colors.indigo} />,
    href: facebookShareUrl(location),
  },
  {
    title: 'linkedin link',
    icon: <LinkedinIcon width={25} height={25} fill={theme.colors.indigo} />,
    href: linkedinShareUrl(name, date, location),
  },
]

const EventShareSection = ({ name, location, date }: EventShareSection) => {
  const eventShareLinks = getEventShareLinks({ name, location, date }).map(
    ({ title, icon, href }) => {
      return (
        <ShareLink
          key={href}
          title={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </ShareLink>
      )
    }
  )

  return (
    <ShareList>
      <ShareText>Share</ShareText>
      {eventShareLinks}
    </ShareList>
  )
}

EventShareSection.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default EventShareSection
