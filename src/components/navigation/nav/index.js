import React, { useState, useEffect } from 'react'
import { noScroll } from '../../../utilities'
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
            40, // Margin between 2nd breakpoint(768px) and 3rd breakpoint (1024px)
            75, // Margin 1440 onwards
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
                      'Find out more about our not-for-profit organisation, run by volunteers passionate about equality and diversity.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'Pride',
                        links: [
                          { title: 'Our story', url: '/about-us' },
                          { title: 'Our impact', url: '/about-us/impact' },
                        ],
                      },
                      {
                        heading: 'Campaigns',
                        links: [
                          {
                            title: 'Jubilee',
                            url: '/about-us/campaigns/jubilee',
                          },
                        ],
                      },
                    ],
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-parade-day',
                    title: 'Parade day',
                    desc:
                      'Plan your Parade day where charities, businesses and community groups come together to march for equality.',
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
                            url: '/parade/residents-and-businesses-info',
                          },
                        ],
                      },
                      {
                        heading: 'Lineup',
                        links: [
                          {
                            title: 'Cabaret Stage',
                            url:
                              '/events/1c96cd4e-e29c-5a8e-a530-0d7d1c9f3489/',
                          },
                          {
                            title: 'Trafalgar Square',
                            url:
                              '/events/e0bc2fe9-1563-5c2c-929b-d440d5f7cfd9/',
                          },
                          {
                            title: "Women's Area",
                            url:
                              '/events/c88f24f1-d97c-5a7a-be4f-3158740c31a8/',
                          },
                          {
                            title: 'World Area',
                            url:
                              '/events/aee4171a-97ba-5a83-8954-b264240d1cee/',
                          },
                        ],
                      },
                      {
                        heading: 'Stalls',
                        links: [
                          {
                            title: 'This year’s stalls',
                            url: '/parade/stalls',
                          },
                          {
                            title: 'Hire a stall',
                            url: '/parade/stalls/hire-a-stall',
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
                      'Discover and attend the Pride and LGBT+ events happening all across London.',
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
                            url: '/events',
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
                            title: 'Audition',
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
                      'If you’re passionate about the LGBT+ community please consider supporting Pride by donating, sponsoring or volunteering.',
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
                          {
                            title: 'Work for Pride',
                            url: '/support-us/jobs',
                          },
                        ],
                      },
                      {
                        heading: 'As a business',
                        links: [
                          {
                            title: 'Partner with us',
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
                    url: '/visitor-info',
                  }}
                />
                <NavItem
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-blog',
                    title: 'News & views',
                    url: '/news-and-views',
                  }}
                />
                <NavItem>
                  <DonateButton
                    link
                    primary
                    fullmobile
                    to="https://donate.prideinlondon.org/"
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
