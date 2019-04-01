import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import Link from 'gatsby-link'
import { noScroll } from '../../utilities/'
import { Row, Column } from '../grid'
import { media } from '../../theme/media'
import logo from '../../theme/assets/images/logo-pride.svg'
import Button from '../button'
import NavItem from '../navItem'
import burger from '../../theme/assets/images/icon-menu.svg'
import iconClose from '../../theme/assets/images/icon-close.svg'
import theme from '../../theme/theme'

const HeaderWrapper = styled.div`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  position: relative;
  z-index: 2;

  ${media.nav`
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
  top: 0;
  left: 0;

  ${media.nav`
    height: 100px;
    background-color: ${theme.colors.indigo};
  `};
`

const FlexRow = styled(Row)`
  flex-basis: 100%;
`

const FlexColumn = styled(Column)`
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

  ${media.nav`
    width: 164px;
    height: 64px;
    margin: 0;
  `};
`

const Menu = styled.ul`
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

const Burger = styled.button`
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

const DonateButton = styled(Button)`
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

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      noScroll.on()
    } else {
      noScroll.off()
    }
  })
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
            <LogoWrapper to="/">
              <Logo src={logo} alt="Pride in London Logo" />
            </LogoWrapper>
            <nav
              role="navigation"
              itemScope="itemscope"
              itemType="http://www.schema.org/SiteNavigationElement"
            >
              <Burger
                onClick={() => setOpen(!isOpen)}
                isOpen={isOpen}
                aria-controls="menu"
                aria-expanded={isOpen}
                type="button"
              >
                <span>Menu</span>
              </Burger>
              <Menu id="menu" isOpen={isOpen}>
                <NavItem
                  item={{
                    id: 'nav-about',
                    title: 'About',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        links: [
                          { title: 'Our mission', url: '/' },
                          { title: 'A history of Pride', url: '/' },
                          { title: 'Campaign', url: '/' },
                          { title: 'Our impact', url: '/' },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  item={{
                    id: 'nav-parade-day',
                    title: 'Parade Day',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'Parade',
                        links: [
                          { title: 'Watch the parade', url: '/' },
                          { title: 'Parade groups', url: '/' },
                        ],
                      },
                      {
                        heading: 'Stages',
                        links: [
                          { title: 'Cabaret stage', url: '/' },
                          { title: 'Trafalgar Square', url: '/' },
                          { title: "Women's stage", url: '/' },
                          { title: 'World stage', url: '/' },
                        ],
                      },
                      {
                        heading: 'Community Village',
                        links: [{ title: 'Stalls', url: '/' }],
                      },
                    ],
                  }}
                />
                <NavItem
                  item={{
                    id: 'nav-events',
                    title: 'Events',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        heading: "What's on",
                        links: [
                          { title: 'Upcoming events', url: '/' },
                          { title: 'Host an event', url: '/' },
                        ],
                      },
                      {
                        heading: "Pride's Got Talent",
                        links: [
                          { title: "This year's competition", url: '/' },
                          { title: 'How to take part', url: '/' },
                          { title: 'Hall of fame', url: '/' },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  item={{
                    id: 'nav-support-us',
                    title: 'Support us',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'As an individual',
                        links: [
                          { title: 'Volunteer', url: '/' },
                          { title: 'Make a donation', url: '/' },
                          { title: 'Buy merchandise', url: '/' },
                        ],
                      },
                      {
                        heading: 'As a business',
                        links: [{ title: 'Partner with us', url: '/' }],
                      },
                      {
                        heading: 'As an MP',
                        links: [
                          { title: 'Sign the poilitical pledge', url: '/' },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem>
                  <DonateButton
                    link
                    primary
                    fullmobile
                    to="https://prideinlondon.org/donate/"
                  >
                    Donate
                  </DonateButton>
                </NavItem>
              </Menu>
            </nav>
          </FlexColumn>
        </FlexRow>
      </Header>
    </HeaderWrapper>
  )
}

export default Nav
