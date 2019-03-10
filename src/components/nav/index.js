import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import Link from 'gatsby-link'
import noScroll from 'no-scroll'
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
    position: static;
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
  left: ${props => (props.isOpen ? '0' : '100%')};
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

const Burger = styled.button`
  cursor: pointer;
  border: none;
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.title};
  font-size: 0.875rem;
  line-height: 1.125rem;
  transition: background-color 0.15s linear;
  background-color: ${props =>
    props.isOpen ? props.theme.colors.indigo : 'transparent'};
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
            <LogoWrapper to="/events">
              <Logo src={logo} alt="Pride in London Logo" />
            </LogoWrapper>
            <nav role="navigation">
              <Burger
                onClick={() => setOpen(!isOpen)}
                isOpen={isOpen}
                aria-controls="menu"
                aria-expanded={isOpen}
              >
                <span>Menu</span>
              </Burger>
              <Menu id="menu" isOpen={isOpen} className={isOpen && 'open'}>
                <NavItem
                  item={{
                    title: 'Learn',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      { title: 'About us', url: '/' },
                      { title: 'About us', url: '/' },
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
