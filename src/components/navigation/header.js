import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../grid'
import NavItems from './navItems'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  height: 100px;
`

NavItems.displayName = 'TestNav'

const Header = props => (
  <StyledContainer>
    <Row alignItems="center" justifyContent="center">
      <NavItems items={props.items}>{props.children}</NavItems>
    </Row>
  </StyledContainer>
)

Header.propTypes = {
  items: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Header.defaultProps = {
  children: null,
  items: {},
}

export default Header
