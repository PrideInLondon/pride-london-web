import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { lighten } from 'polished'
import Link from 'gatsby-link'
import noScroll from 'no-scroll'
import { media } from '../../theme/media'
import logo from '../../theme/assets/images/logo-pride.svg'
import Button from '../button'
import burger from '../../theme/assets/images/icon-menu.svg'
import iconClose from '../../theme/assets/images/icon-close.svg'
import theme from '../../theme/theme'

const HeaderWrapper = styled.div`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  ${media.tablet`
    background-color: ${theme.colors.indigo};
  `};
`

const Header = styled.header`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  width: 100%;
  height: 80px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  z-index: 1;
  top: 0;
  left: 0;
  position: relative;

  ${media.tablet`
    height: 100px;
    background-color: ${theme.colors.indigo};
  `};
`

const FlexRow = styled(Flex)`
  flex-basis: 100%;
`

const FlexColumn = styled(Box)`
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
`

const LogoWrapper = styled(Link)`
  display: block;
`

const Logo = styled.img`
  width: 102px;
  height: 40px;
  margin: 0 20px;

  ${media.tablet`
    width: 164px;
    height: 64px;
    margin: 0;
  `};
`

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 80px;
  left: ${props => (props.menuOpen ? '0' : '100%')};
  visibility: hidden;
  transition: left 0.15s linear, visibility 0s 0.15s linear;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  z-index: 1;
  background-color: ${theme.colors.indigo};

  &.open {
    transition: left 0.15s linear, visibility 0s 0s linear;
    left: 0;
    visibility: visible;
  }

  ${media.tablet`
    position: static;
    display: flex;
    align-items: center;
    height: auto;
    visibility: visible;
  `};
`

const MenuItem = styled.li`
  transition: height 0.15s linear;
  padding: 0 20px;

  ${media.tablet`
    height: auto;
    padding: 0;
  `};
`

const MenuLink = styled.a`
  font-family: ${props => props.theme.fonts.title};
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.lightGrey};
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
      background-color: ${props => lighten(0.05, props.theme.colors.indigo)};
    }
  `};
`
const Burger = styled.button`
  cursor: pointer;
  border: none;
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.title};
  font-size: 0.875rem;
  line-height: 1.125rem;
  transition: background-color 0.15s linear;
  background-color: ${props =>
    props.menuOpen ? props.theme.colors.indigo : 'transparent'};
  width: 80px;
  height: 80px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    padding-top: 20px;
    background-image: url(${props => (props.menuOpen ? iconClose : burger)});
    background-position: center top;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
    display: none;
  `};
`

const DonateButton = styled(Button)`
  ${media.tablet`
    && {
      min-width: auto;
      width: 138px;
      margin: 0 0 0 25px;
    }
  `};
`

class SimpleNav extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen }, () => noScroll.toggle())
  }

  render() {
    return (
      <HeaderWrapper>
        <Header>
          <FlexRow
            mx={[
              0, // Margin between 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
              0, // Margin between 1st breakpoint(375px) and 2nd breakpoint (768px)
              50, // Margin between 2nd breakpoint(768px) and 3rd breakpoint (1024px)
              50, // Margin between 2nd breakpoint(1024px) and 3rd breakpoint (1440px)
              90, // Margin 1440 onwards
            ]}
          >
            <FlexColumn width={1}>
              <LogoWrapper to="/events">
                <Logo src={logo} alt="Pride in London Logo" />
              </LogoWrapper>
              <nav role="navigation">
                <Burger
                  onClick={this.toggleMenu}
                  menuOpen={this.state.menuOpen}
                  aria-controls="menu"
                  aria-expanded={this.state.menuOpen}
                >
                  <span>Menu</span>
                </Burger>
                <Menu
                  id="menu"
                  menuOpen={this.state.menuOpen}
                  className={this.state.menuOpen && 'open'}
                >
                  <MenuItem>
                    <MenuLink href="https://prideinlondon.org/">
                      <span>Return to main site</span>
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <DonateButton
                      link
                      primary
                      fullmobile
                      to="https://prideinlondon.org/donate/"
                    >
                      Donate
                    </DonateButton>
                  </MenuItem>
                </Menu>
              </nav>
            </FlexColumn>
          </FlexRow>
        </Header>
      </HeaderWrapper>
    )
  }
}

export default SimpleNav
