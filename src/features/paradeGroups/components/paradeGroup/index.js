import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../../../../components/icons/facebook'
import Twitter from '../../../../components/icons/twitter'
import Instagram from '../../../../components/icons/instagram'
import Globe from '../../../../components/icons/globe'
import theme from '../../../../theme/theme'
import { RowContainer, TitleContainer, IconContainer } from './styles'

const ParadeGroup = ({
  facebookUrl,
  twitterUrl,
  websiteUrl,
  instagramUrl,
  name,
}) => {
  return (
    <RowContainer>
      <TitleContainer>{name}</TitleContainer>
      <IconContainer>
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Globe width={24} height={24} fill={theme.colors.indigo} />
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
      </IconContainer>
    </RowContainer>
  )
}

ParadeGroup.propTypes = {
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string,
  websiteUrl: PropTypes.string,
}

ParadeGroup.defaultProps = {
  facebookUrl: null,
  instagramUrl: null,
  twitterUrl: null,
  websiteUrl: null,
}

export default ParadeGroup
