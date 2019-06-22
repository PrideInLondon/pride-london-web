import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../../../../components/icons/facebook'
import Twitter from '../../../../components/icons/twitter'
import Instagram from '../../../../components/icons/instagram'
import Globe from '../../../../components/icons/globe'
import MailIcon from '../../../../components/icons/mailIcon'
import theme from '../../../../theme/theme'
import { RowContainer, TitleContainer, IconContainer } from './styles'

function externalURL(url) {
  if (!url.startsWith('http')) {
    return 'https://' + url // Optimism that this website supports HTTPS
  }
  return url
}

function facebookURL(value) {
  if (value.startsWith('http://')) {
    value = value.replace('http://', 'https://')
  }
  if (
    !value.startsWith('facebook.com') &&
    !value.startsWith('www.facebook.com') &&
    !value.startsWith('https://')
  ) {
    value = 'https://facebook.com/' + value
  }
  value = externalURL(value)
  return value
}

function twitterURL(value) {
  return 'https://twitter.com/' + value
}

function instagramURL(value) {
  return 'https://instagram.com/' + value
}

function mailTo(email) {
  return 'mailto:' + email
}

const ParadeGroup = ({
  name,
  socialEmail,
  socialWebsite,
  socialTwitter,
  socialFacebook,
  socialInstagram,
}) => {
  return (
    <RowContainer>
      <TitleContainer>{name}</TitleContainer>
      <IconContainer>
        {socialEmail && (
          <a
            href={mailTo(socialEmail)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {socialWebsite && (
          <a
            href={externalURL(socialWebsite)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {socialFacebook && (
          <a
            href={facebookURL(socialFacebook)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {socialTwitter && (
          <a
            href={twitterURL(socialTwitter)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {socialInstagram && (
          <a
            href={instagramURL(socialInstagram)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
      </IconContainer>
    </RowContainer>
  )
}

ParadeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  socialEmail: PropTypes.string,
  socialWebsite: PropTypes.string,
  socialTwitter: PropTypes.string,
  socialFacebook: PropTypes.string,
  socialInstagram: PropTypes.string,
}

ParadeGroup.defaultProps = {
  socialEmail: null,
  socialWebsite: null,
  socialTwitter: null,
  socialFacebook: null,
  socialInstagram: null,
}

export default ParadeGroup
