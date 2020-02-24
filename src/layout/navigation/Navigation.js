import React, { useState, useEffect } from 'react'
import { noScroll } from '../../utils/style-utils'
import logo from '../../theme/assets/images/logo-pride.svg'
import NavItem from './NavItem'
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
} from './Navigation.styles'

const Navigation = () => {
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
          flexWrap="nowrap"
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
                          {
                            title: "Pride's Got Talent",
                            url: '/events/prides-got-talent/',
                          },
                        ],
                      },
                      {
                        heading: 'Campaigns',
                        links: [
                          {
                            title: '#PrideJubilee',
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
                            title: '2020 Parade',
                            url: '/parade',
                          },
                          {
                            title: 'Take part in the Parade',
                            url: '/parade/take-part',
                          },
                          {
                            title: 'Parade groups',
                            url: '/parade/groups',
                          },
                          {
                            title: 'Map',
                            url: '/parade/map',
                          },
                          {
                            title: 'Accessibility',
                            url: '/parade/accessibility',
                          },
                          {
                            title: 'Residents and businesses info',
                            url: '/parade/residents-and-businesses-info',
                          },
                        ],
                      },
                      {
                        heading: 'Line up',
                        links: [
                          {
                            title: 'Cabaret Stage',
                            url: '/line-up/cabaret-stage',
                          },
                          {
                            title: 'Family Area',
                            url: '/line-up/family-area',
                          },
                          {
                            title: 'Trafalgar Square Stage',
                            url: '/line-up/trafalgar-square-stage',
                          },
                          {
                            title: "Women's Area",
                            url: '/line-up/womens-area',
                          },
                          { title: 'World Area', url: '/line-up/world-area' },
                        ],
                      },
                      {
                        heading: 'Stalls',
                        links: [
                          {
                            title: 'Last year’s stalls',
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
                    url: '/events',
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
                            url: 'https://volunteer.prideinlondon.org',
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
                    title: 'Explore London',
                    url: '/explore-london',
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
                  <DonateButton to="https://donate.prideinlondon.org/">
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

export default Navigation
