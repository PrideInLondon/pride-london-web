import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import theme from '../../theme/theme'
import { media } from '../../theme/media'

const MenuLink = styled.a`
  font-family: ${theme.fonts.title};
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${theme.colors.lightGrey};
  text-decoration: none;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 20px 0;

  ${media.tablet`
  padding: 35px 25px;
  line-height: 1.8125rem;

  &:hover,
  &:focus {
    background-color: ${lighten(0.05, theme.colors.indigo)};
  }
`};
`

const NavItem = props => {
  const { children, item } = props

  return (
    <li>
      {children ? (
        children
      ) : (
        <MenuLink href={item.url}>
          <span>{item.title}</span>
        </MenuLink>
      )}
    </li>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
}

NavItem.defaultProps = {
  children: null,
  item: null,
}

export default NavItem
