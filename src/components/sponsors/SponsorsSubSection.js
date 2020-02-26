import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  BadgesContainer,
  TitleWrapper,
  Title,
} from './SponsorsSubSection.styles'

const SponsorsSubSection = ({ title, icon, children }) => (
  <Fragment>
    <TitleWrapper>
      {icon}
      {title && <Title>{title}</Title>}
    </TitleWrapper>
    <BadgesContainer>{children}</BadgesContainer>
  </Fragment>
)

SponsorsSubSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

SponsorsSubSection.defaultProps = {
  title: null,
  icon: null,
}

export default SponsorsSubSection
