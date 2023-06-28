import React from 'react'
import PropTypes from 'prop-types'
import Linkedin from '../components/icons/linkedin'
import Facebook from '../components/icons/facebook'
import Twitter from '../components/icons/twitter'
import Instagram from '../components/icons/instagram'
import Globe from '../components/icons/globe'
import MailIcon from '../components/icons/mailIcon'
import Snapchat from '../components/icons/snapchat'
import Tiktok from '../components/icons/tiktok'
import theme from '../theme/theme'
import {
  RowContainer,
  CompanyContainer,
  CompanyInfoContainer,
  TitleContainer,
  IconContainer,
  CompanyDescription,
} from './ParadeGroup.styles'

const ParadeGroup = ({
  name,
  description,
  websiteUrl,
  linkedinUrl,
  twitterUrl,
  facebookUrl,
  tikTokUrl,
  instagramUrl,
  snapChatHandle,
  emailUrl,
}) => {
  return (
    <RowContainer>
      <CompanyContainer>
        <CompanyInfoContainer>
          <TitleContainer>{name}</TitleContainer>
          <CompanyDescription>
            {description ? description.description : 'No company description'}
          </CompanyDescription>
        </CompanyInfoContainer>
      </CompanyContainer>

      <IconContainer>
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Globe width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {emailUrl && (
          <a href={emailUrl} target="_blank" rel="noopener noreferrer">
            <MailIcon width={30} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {facebookUrl && (
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <Facebook width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <Twitter width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {tikTokUrl && (
          <a href={tikTokUrl} target="_blank" rel="noopener noreferrer">
            <Tiktok width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
        {snapChatHandle && (
          <a href={snapChatHandle} target="_blank" rel="noopener noreferrer">
            <Snapchat width={24} height={24} fill={theme.colors.indigo} />
          </a>
        )}
      </IconContainer>
    </RowContainer>
  )
}

ParadeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.shape({
    description: PropTypes.string
  }),
  websiteUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  emailUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  snapChatHandle: PropTypes.string,
  tikTokUrl: PropTypes.string,
}

ParadeGroup.defaultProps = {
  name: '',
  websiteUrl: null,
  twitterUrl: null,
  facebookUrl: null,
  instagramUrl: null,
  emailUrl: null,
  linkedinUrl: null,
  snapChatHandle: null,
  tikTokUrl: null,
}

export default ParadeGroup
