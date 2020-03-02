import React, { useReducer, useRef, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/theme'
import { checkBreakpoint } from '../../utils/style-utils'
import ChevronDownIcon from '../../components/icons/chevronDownIcon'
import SubMenu from './SubMenu'
import { MenuLink, SubMenuToggle, MenuItem } from './NavItem.styles'

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
    default:
      return
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
          <SubMenuToggle
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
            <ChevronDownIcon />
          </SubMenuToggle>
          <SubMenu
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
