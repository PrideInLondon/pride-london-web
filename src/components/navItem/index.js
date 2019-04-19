import React, { useReducer, useRef, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import Submenu from '../submenu'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { checkBreakpoint } from '../../utilities'
import ChevronDown from '../icons/chevronDown'

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
  border: none;

  ${media.nav`
    padding: 35px 25px;
    line-height: 1.8125rem;
  `};
`

const MenuLink = styled(Link)`
  ${linkStyles}

  ${media.navMax`
    padding-left: 20px;
    padding-right: 20px;
  `};
`

const SubmenuToggle = styled.a`
  ${linkStyles}
  cursor: default;

  &[aria-expanded='true'] {
    svg {
      transform: rotate(180deg);
    }
  }

  ${media.nav`
    svg {
        display: none;
    }
  `};

  ${media.navMax`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
    span {
        margin-right: 20px;
    }
  `};

  svg {
    path {
      fill: ${theme.colors.eucalyptusGreen};
    }
  }
`

const MenuItem = styled.li`
  ${media.nav`
    height: auto;
    padding: 0;
    ${SubmenuToggle} {
      background-color: ${props =>
        props.isOpen && lighten(0.05, theme.colors.indigo)};
    }

    ${MenuLink} {
      background-color: ${props =>
        props.isOpen && lighten(0.05, theme.colors.indigo)};
    }
  `};
`

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
      }
    case 'close':
      return {
        isOpen: false,
      }
    case 'toggle':
      return {
        isOpen: !state.isOpen,
      }
  }
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }
      if (
        (e.type === 'mousedown' || e.type === 'touchstart' || e.which === 13) &&
        checkBreakpoint(theme.navBreakpoint)
      ) {
        handler({ type: 'close' })
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    document.addEventListener('keydown', listener)

    // Runs when component unmounts
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('keydown', listener)
    }
  })
}

const NavItem = props => {
  const {
    children,
    setNavOpen,
    item: { submenu = false, title, url, desc, id },
  } = props

  const initialState = { isOpen: false }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isOpen } = state
  const ref = useRef()
  useOnClickOutside(ref, dispatch)

  return (
    <MenuItem
      onMouseEnter={() =>
        checkBreakpoint(theme.navBreakpoint) && dispatch({ type: 'open' })
      }
      onMouseLeave={() =>
        checkBreakpoint(theme.navBreakpoint) && dispatch({ type: 'close' })
      }
      isOpen={isOpen}
      ref={ref}
    >
      {children ? (
        children
      ) : submenu ? (
        <Fragment>
          <SubmenuToggle
            href="#"
            aria-haspopup={checkBreakpoint(theme.navBreakpoint) && 'true'}
            aria-expanded={isOpen}
            aria-controls={id}
            onClick={e => {
              e.preventDefault()
              dispatch({ type: 'toggle' })
            }}
          >
            <span>{title}</span>
            <ChevronDown />
          </SubmenuToggle>
          <Submenu
            item={{ submenu, title, url, desc, id }}
            isOpen={isOpen}
            setNavOpen={setNavOpen}
            setNavItemOpen={dispatch}
          />
        </Fragment>
      ) : (
        <MenuLink
          to={url}
          itemProp="url"
          onClick={() =>
            !checkBreakpoint(theme.navBreakpoint) && setNavOpen(false)
          }
        >
          <span itemProp="name">{title}</span>
        </MenuLink>
      )}
    </MenuItem>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  setNavOpen: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.string,
    submenu: PropTypes.array,
  }).isRequired,
}

NavItem.defaultProps = {
  children: null,
  setNavOpen: () => {},
  item: {},
}

export default NavItem
