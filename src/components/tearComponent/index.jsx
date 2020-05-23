import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveImg,
  Background,
  StyledExternalWrapper,
  StyledInternalWrapper,
} from './index.styles'

import { Tear } from './tears'

const TornBackground = ({
  backgroundImage,
  topTear,
  bottomTear,
  children,
  minHeight,
}) => {
  return (
    <StyledExternalWrapper>
      {topTear && (
        <Tear
          variant="top"
          ripType={topTear.ripType}
          color={topTear.color}
          height={topTear.height}
          marginTop={-topTear.height}
          aria-hidden="true"
        />
      )}
      <StyledInternalWrapper> {children}</StyledInternalWrapper>
      <Background height={minHeight}>
        <ResponsiveImg
          aria-hidden="true"
          objectFit="cover"
          objectPosition="50% 50%"
          fixed={backgroundImage}
        />
      </Background>
      {bottomTear && (
        <Tear
          variant="bottom"
          ripType={bottomTear.ripType}
          color={bottomTear.color}
          height={bottomTear.height}
          aria-hidden="true"
        />
      )}
    </StyledExternalWrapper>
  )
}

TornBackground.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  topTear: PropTypes.object || PropTypes.boolean,
  bottomTear: PropTypes.object || PropTypes.boolean,
  minHeight: PropTypes.string.isRequired,
}

TornBackground.defaultProps = {
  topTear: false,
  bottomTear: false,
}

export default TornBackground
