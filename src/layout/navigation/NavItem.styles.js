import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

export const linkStyles = css`
  font-family: ${theme.fonts.title};
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${theme.colors.lightGrey};
  text-decoration: none;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border: none;

  ${media.nav`
    padding: 35px 20px;
    line-height: 1.8125rem;
  `};
`

export const MenuLink = styled(Link)`
  ${linkStyles}

  ${media.navMax`
    padding-left: 20px;
    padding-right: 20px;
  `};
`

export const SubMenuToggle = styled.a`
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

export const MenuItem = styled.li`
  ${media.nav`
    height: auto;
    padding: 0;
    ${SubMenuToggle} {
      background-color: ${props =>
        props.isOpen && lighten(0.05, theme.colors.indigo)};
    }

    ${MenuLink} {
      background-color: ${props =>
        props.isOpen && lighten(0.05, theme.colors.indigo)};
    }
  `};
`
