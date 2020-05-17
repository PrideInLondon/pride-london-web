import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveImg, Background } from './index.styles'

import { Tear } from './tears'

const TornBackground = ({
  backgroundImage,
  topTear,
  bottomTear,
  children,
  minHeight,
}) => {
  return (
    <div style={{ position: 'relative', height: '100%', outline: '150px' }}>
      {topTear && (
        <Tear
          variant="top"
          ripType={topTear.ripType}
          color={topTear.color}
          aria-hidden="true"
        />
      )}
      <div style={{ position: 'absolute', zIndex: 12 }}> {children}</div>
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
          aria-hidden="true"
        />
      )}
    </div>
  )
}

TornBackground.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  topTear: PropTypes.object,
  bottomTear: PropTypes.object,
  minHeight: PropTypes.string.isRequired,
}

TornBackground.defaultProps = {
  topTear: false,
  bottomTear: false,
}

export default TornBackground
