import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BadgesContainer, TitleWrapper, Title } from './styles'

const SponsorsSubsection = ({ title, icon, children }) => (
  <Fragment>
    <TitleWrapper>
      {icon}
      <Title>{title}</Title>
    </TitleWrapper>
    <BadgesContainer>{children}</BadgesContainer>
  </Fragment>
)

SponsorsSubsection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

SponsorsSubsection.defaultProps = {
  icon: null,
}

export default SponsorsSubsection
