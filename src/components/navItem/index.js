import React, { useReducer, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import Submenu from '../submenu'
import theme from '../../theme/theme'
import { media } from '../../theme/media'

const MenuItem = styled.li`
  transition: height 0.15s linear;
  padding: 0 20px;

  ${media.tablet`
    height: auto;
    padding: 0;
  `};
`

const linkStyles = css`
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

const MenuLink = styled(Link)`
  ${linkStyles}
`

const SubmenuToggle = styled.a`
  ${linkStyles}
`

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      console.log('OPEN')
      return {
        isOpen: true,
      }
    case 'close':
      console.log('CLOSE')
      return {
        isOpen: false,
      }
    case 'toggle':
      console.log('TOGGLE')
      return {
        isOpen: !state.isOpen,
      }
  }
}

function checkIfDesktop() {
  return window.matchMedia(`(min-width: ${theme.breakpoints[1]})`).matches
}

const initialState = { isOpen: false }

const NavItem = props => {
  const {
    children,
    item: { submenu = false, title, url, desc },
  } = props
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isOpen } = state

  return (
    <MenuItem
      onMouseEnter={() =>
        submenu && checkIfDesktop() && dispatch({ type: 'open' })
      }
      onMouseLeave={() =>
        submenu && checkIfDesktop() && dispatch({ type: 'close' })
      }
    >
      {children ? (
        children
      ) : submenu ? (
        <Fragment>
          <SubmenuToggle
            href="#"
            aria-haspopup="true"
            aria-expanded={`${isOpen}`}
            onClick={e => {
              e.preventDefault()
              dispatch({ type: 'toggle' })
            }}
          >
            <span>{title}</span>
          </SubmenuToggle>
          <Submenu item={{ submenu, title, url, desc }} />
        </Fragment>
      ) : (
        <MenuLink to={url}>
          <span>{title}</span>
        </MenuLink>
      )}
    </MenuItem>
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
  item: {},
}

export default NavItem
