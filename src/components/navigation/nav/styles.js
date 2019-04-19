import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import Link from 'gatsby-link'
import { Row, Column } from '../../grid'
import { media } from '../../../theme/media'
import Button from '../../button'
import burger from '../../../theme/assets/images/icon-menu.svg'
import iconClose from '../../../theme/assets/images/icon-close.svg'
import theme from '../../../theme/theme'

export const HeaderWrapper = styled.div`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  position: relative;
  z-index: 2;

  ${media.nav`
    background-color: ${theme.colors.indigo};
  `};
`

export const Header = styled.header`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  width: 100%;
  height: 80px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  top: 0;
  left: 0;

  ${media.nav`
    height: 100px;
    background-color: ${theme.colors.indigo};
  `};
`

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

export const Logo = styled.img`
  width: 102px;
  height: 40px;
  margin: 0 20px;

  ${media.nav`
    width: 164px;
    height: 64px;
    margin: 0;
  `};
`

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  transform: translate3D(${props => (props.isOpen ? '0' : '100%')}, 0, 0);
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: ${props =>
    props.isOpen
      ? 'transform 0.15s linear, visibility 0s 0s linear'
      : 'transform 0.15s linear, visibility 0s 0.15s linear'};
  height: calc(100% - 80px);
  z-index: 1;
  background-color: ${theme.colors.indigo};
  ${props =>
    props.isOpen &&
    css`
      overflow: auto;
    `}

  ${media.nav`
    position: static;
    display: flex;
    align-items: center;
    height: auto;
    visibility: visible;
    transform: none;
  `};
`

export const Burger = styled.button`
  cursor: pointer;
  border: none;
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.title};
  font-size: 0.875rem;
  line-height: 1.125rem;
  transition: background-color 0.15s linear;
  background-color: ${props =>
    props.isOpen ? theme.colors.indigo : 'transparent'};
  width: 80px;
  height: 80px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    padding-top: 20px;
    background-image: url(${props => (props.isOpen ? iconClose : burger)});
    background-position: center top;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }

  ${media.nav`
    display: none;
  `};
`

export const DonateButton = styled(Button)`
  ${media.nav`
    && {
      min-width: auto;
      width: 138px;
      margin: 0 0 0 25px;
    }
  `};

  ${media.navMax`
    && {
      width: calc(100% - 40px);
      margin: 0 auto 20px auto;
      display: block;
    }    
  `};
`
