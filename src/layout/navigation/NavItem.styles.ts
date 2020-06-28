import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { Link } from 'gatsby'
import { mediaQueries } from '../../theme/mediaQueries'
import theme from '../../theme/theme'

export const linkStyles = css`
  font-family: ${theme.fonts.title};
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${theme.colors.white};
  text-decoration: none;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border: none;

  ${mediaQueries.nav} {
    padding: 35px 20px;
    line-height: 1.8125rem;
  }
`

export const MenuLink = styled(Link)`
  ${linkStyles}

  ${mediaQueries.navMax} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const SubMenuToggle = styled.a`
  ${linkStyles}
  cursor: default;

  &[aria-expanded='true'] {
    svg {
      transform: rotate(180deg);
    }
  }

  ${mediaQueries.nav} {
    svg {
      display: none;
    }
  }

  ${mediaQueries.navMax} {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    span {
      margin-right: 20px;
    }
  }

  svg {
    path {
      fill: ${theme.colors.eucalyptusGreen};
    }
  }
`

export const MenuItem = styled.li<{ isOpen: boolean; backgroundColor: string }>(
  ({ isOpen, backgroundColor }) => css`
    ${mediaQueries.nav} {
      height: auto;
      padding: 0;
      ${SubMenuToggle} {
        background-color: ${isOpen && darken(0.05, backgroundColor)};
      }

      ${MenuLink} {
        background-color: ${isOpen && darken(0.05, backgroundColor)};
      }
    }

    ${mediaQueries.navMax} {
      ${SubMenuToggle} {
        background-color: ${darken(0.05, backgroundColor)};
      }

      ${MenuLink} {
        background-color: ${darken(0.05, backgroundColor)};
      }
    }
  `
)
