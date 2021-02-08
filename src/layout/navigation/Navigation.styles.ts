import styled, { css } from 'styled-components'
import { darken } from 'polished'
import Link from 'gatsby-link'
import { Row, Column } from '../../components/grid'
import { Button } from '../../components/button'
import { Logo } from '../../components/logo'
import burgerIcon from '../../components/icons/burgerIcon.svg'
import closeIcon from '../../components/icons/closeIcon.svg'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'

export const HeaderWrapper = styled.div<{ backgroundColor: string }>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    position: relative;
    z-index: 2;

    ${mediaQueries.nav} {
      background-color: ${backgroundColor};
    }
  `
)

export const Header = styled.header<{ backgroundColor: string }>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    width: 100%;
    height: 80px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    top: 0;
    left: 0;

    ${mediaQueries.nav} {
      height: 100px;
      background-color: ${backgroundColor};
    }
  `
)

export const FlexRow = styled(Row)`
  flex-basis: 100%;
`

export const FlexColumn = styled(Column)`
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
`

export const LogoWrapper = styled(Link)`
  display: block;
  border: none;
`

export const StyledLogo = styled(Logo)`
  width: 102px;
  height: 40px;
  margin: 0;

  ${mediaQueries.nav} {
    width: 164px;
    height: 64px;
  }

  ${mediaQueries.mdMax} {
    margin-left: 10px;
  }
`

export const Menu = styled.ul<{ backgroundColor: string; isOpen: boolean }>(
  ({ isOpen, backgroundColor }) => css`
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    transform: translate3D(${isOpen ? '0' : '100%'}, 0, 0);
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: ${isOpen
      ? 'transform 0.15s linear, visibility 0s 0s linear'
      : 'transform 0.15s linear, visibility 0s 0.15s linear'};
    height: calc(100% - 80px);
    z-index: 1;
    background-color: ${backgroundColor};
    ${isOpen &&
      css`
        overflow: auto;
      `}
    ${mediaQueries.nav} {
      position: static;
      display: flex;
      align-items: center;
      height: auto;
      visibility: visible;
      transform: none;
    }
  `
)

export const Burger = styled.button<{
  backgroundColor: string
  isOpen: boolean
}>(
  ({ isOpen, backgroundColor }) => css`
    cursor: pointer;
    border: none;
    color: ${colors.lightGrey};
    font-family: ${fonts.title};
    font-size: 0.875rem;
    line-height: 1.125rem;
    transition: background-color 0.15s linear;
    background-color: ${isOpen ? darken(0.05, backgroundColor) : 'transparent'};
    width: 80px;
    height: 80px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      padding-top: 20px;
      background-image: url(${isOpen ? closeIcon : burgerIcon});
      background-position: center top;
      background-repeat: no-repeat;
    }
    ${mediaQueries.nav} {
      display: none;
    }
  `
)

export const SupportButton = styled(Button)`
  ${mediaQueries.nav} {
    && {
      min-width: auto;
      margin: 0 0 0 25px;
    }
  }
  ${mediaQueries.navMax} {
    && {
      width: calc(100% - 40px);
      margin: 0 auto 20px auto;
      display: block;
    }
  }
`
