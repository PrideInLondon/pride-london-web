import React, { useState, useEffect } from 'react'
import { noScroll } from '../../utils/style-utils'

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

import { NavigationProps } from './Navigation.types'

const Navigation: React.FC<NavigationProps> = ({
  backgroundColor,
  logoUrl,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  useEffect(() => {
    if (isOpen) {
      noScroll.on()
    } else {
      noScroll.off()
    }
  })
  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <Header backgroundColor={backgroundColor}>
        <FlexRow
          flexWrap="nowrap"
          mx={{ default: '0', sm: '0', md: '40px', lg: '75px' }}
        >
          <FlexColumn width={1}>
            <LogoWrapper to="/">
              <Logo src={logoUrl} alt="Pride in London Logo" />
            </LogoWrapper>
            <nav
              role="navigation"
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
            >
              <Burger
                onClick={() => setOpen(!isOpen)}
                isOpen={isOpen}
                aria-controls="menu"
                aria-expanded={isOpen}
                type="button"
                backgroundColor={backgroundColor}
              >
                <span>Menu</span>
              </Burger>
              <Menu id="menu" isOpen={isOpen} backgroundColor={backgroundColor}>
                <NavItem
                  backgroundColor={backgroundColor}
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
                    ],
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
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
                            title: '2021 Parade',
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
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-events',
                    title: 'Events',
                    url: '/events',
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
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
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-visitor-info',
                    title: 'Explore London',
                    url: '/explore-london',
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-blog',
                    title: 'News & views',
                    url: '/news-and-views',
                  }}
                />
                <NavItem backgroundColor={backgroundColor}>
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
