import React, {
  useReducer,
  useRef,
  useEffect,
  Fragment,
  Dispatch,
  RefObject,
} from 'react'
import theme from '../../theme/theme'
import { checkBreakpoint } from '../../utils/style-utils'
import ChevronDownIcon from '../../components/icons/chevronDownIcon'
import { handleUrl } from '../../utils/location-utils'
import SubMenu from './SubMenu'
import { MenuLink, SubMenuToggle, MenuItem } from './NavItem.styles'
import { NavItemProps } from './NavItem.types'

function reducer(state: boolean, action: { type: string }) {
  switch (action.type) {
    case 'open':
      return true
    case 'close':
      return false
    case 'toggle':
      return !state
    default:
      return state
  }
}

function useOnClickOutside(
  ref: RefObject<HTMLLIElement>,
  handler: Dispatch<{ type: string }>
) {
  useEffect(() => {
    const listener = (e: any) => {
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

const NavItem: React.FC<NavItemProps> = ({
  children,
  setNavOpen,
  item,
  backgroundColor,
}) => {
  const [isOpen, dispatch] = useReducer(reducer, false)
  const ref = useRef(null)
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
      backgroundColor={backgroundColor}
    >
      {children ? (
        children
      ) : item?.submenu ? (
        <Fragment>
          <SubMenuToggle
            href="#"
            aria-haspopup={checkBreakpoint(theme.navBreakpoint)}
            aria-expanded={isOpen}
            aria-controls={item.id}
            onClick={(e) => {
              e.preventDefault()
              dispatch({ type: 'toggle' })
            }}
          >
            <span>{item.title}</span>
            <ChevronDownIcon />
          </SubMenuToggle>
          {item.submenu && (
            <SubMenu
              item={item}
              isOpen={isOpen}
              setNavOpen={setNavOpen}
              setNavItemOpen={dispatch}
              backgroundColor={backgroundColor}
            />
          )}
        </Fragment>
      ) : item?.url ? (
        <MenuLink<any>
          {...handleUrl(item.url)}
          itemProp="url"
          onClick={() =>
            !checkBreakpoint(theme.navBreakpoint) &&
            setNavOpen &&
            setNavOpen(false)
          }
        >
          <span itemProp="name">{item.title}</span>
        </MenuLink>
      ) : null}
    </MenuItem>
  )
}

export default NavItem
