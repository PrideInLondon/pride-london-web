import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../../../theme/media'

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  ${media.tablet`
    margin-top: 20px
  `};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  svg {
    margin-right: 10px;
  }
`

const Title = styled.h3`
  margin: 0;
`

const SponsorsSubsection = ({ title, icon, children }) => (
  <Fragment>
    <TitleWrapper>
      {icon && icon}
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
