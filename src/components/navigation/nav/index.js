import React, { useState, useEffect } from 'react'
import { noScroll } from '../../../utilities/'
import logo from '../../../theme/assets/images/logo-pride.svg'
import NavItem from '../navItem'
import {
  HeaderWrapper,
  Header,
  FlexRow,
  FlexColumn,
  LogoWrapper,
  Logo,
  Menu,
  Burger,
  DonateButton,
} from './styles'

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
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-about',
                    title: 'About',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'About us',
                        links: [
                          { title: 'Our Story', url: '/about-us' },
                          { title: 'Our impact', url: '/about-us/impact' },
                          { title: 'Campaigns', url: '/about-us/campaigns' },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
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
                          {
                            title: "This year's parade",
                            url: '/parade',
                          },
                          {
                            title: 'Accessibility',
                            url: '/parade/accessibility',
                          },
                          {
                            title: 'Take part',
                            url: '/parade/take-part',
                          },
                          {
                            title: 'Residents and businesses info',
                            url: '/parade/residents-and-businesses',
                          },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-events',
                    title: 'Events',
                    desc:
                      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'Pride Festival',
                        links: [
                          {
                            title: "This year's festival",
                            url: '/events/festival',
                          },
                          {
                            title: "What's on",
                            url: '/events/whats-on',
                          },
                          {
                            title: 'Host an event',
                            url: '/events/host-an-event',
                          },
                          {
                            title: 'Download our app',
                            url: '/app',
                          },
                        ],
                      },
                      {
                        heading: "Pride's Got Talent",
                        links: [
                          {
                            title: "About Pride's Got Talent",
                            url: '/events/prides-got-talent',
                          },
                          {
                            title: "Audition for Pride's Got Talent",
                            url: '/events/prides-got-talent/audition',
                          },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
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
                          {
                            title: 'Volunteer',
                            url: '/support-us/volunteer',
                          },
                          {
                            title: 'Make a donation',
                            url: '/support-us/donate',
                          },
                          {
                            title: 'Buy merchandise',
                            url: '/support-us/merchandise',
                          },
                        ],
                      },
                      {
                        heading: 'As a business',
                        links: [
                          {
                            title: 'Become a partner',
                            url: '/support-us/partners',
                          },
                          {
                            title: 'Pride in the City',
                            url: '/support-us/pride-in-the-city',
                          },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-visitor-info',
                    title: 'Visitor info',
                    url: '/visitor-information',
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-blog',
                    title: 'Blog',
                    url: '/blog',
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
