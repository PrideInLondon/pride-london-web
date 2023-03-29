import React, { useState, useEffect } from 'react'
import { noScroll } from '../../utils/style-utils'
import NavItem from './NavItem'
import {
  HeaderWrapper,
  Header,
  FlexRow,
  FlexColumn,
  LogoWrapper,
  StyledLogo,
  Menu,
  Burger,
  SupportButton,
} from './Navigation.styles'
import { NavigationProps } from './Navigation.types'

const Navigation: React.FC<NavigationProps> = ({ backgroundColor }) => {
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
            <LogoWrapper onClick={() => setOpen(false)} to="/" title="Home">
              <StyledLogo variant="white" aria-hidden="true" />
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
                    desc: 'Find out more about our not-for-profit organisation, run by volunteers passionate about equality and diversity.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'Pride',
                        links: [
                          { title: 'Our story', url: '/about-us' },
                          {
                            title: "Pride's Got Talent",
                            url: '/pgt',
                          },
                          {
                            title: 'Unity Fund',
                            url: '/unity-fund',
                          },
                        ],
                      },
                      {
                        heading: 'Business',
                        links: [
                          {
                            title: 'Pride in the City',
                            url: '/support-us/pride-in-the-city',
                          },
                        ],
                      },
                      {
                        heading: 'Comms',
                        links: [
                          {
                            title: 'Media Centre',
                            url: '/media-centre/',
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
                    title: 'Parade',
                    desc: 'Plan your Parade day where charities, businesses and community groups come together to march for equality.',
                    url: '/parade',
                    submenu: [
                      {
                        heading: 'Information',
                        links: [
                          {
                            title: 'Pride in London parade information',
                            url: '/parade',
                          },
                          {
                            title: 'Residents & Businesses Info',
                            url: '/parade/residents-and-businesses-info',
                          },
                          {
                            title: 'Hire a Stall',
                            url: '/parade/stalls/hire-a-stall/',
                          },
                        ],
                      },
                      {
                        heading: 'Map',
                        links: [
                          { title: 'London parade route', url: '/parade/map' },
                        ],
                      },
                      {
                        heading: 'Stages',
                        links: [
                          {
                            title: 'Trafalgar Square Stage',
                            url: '/event/trafalgar-square-stage-2jYwE4ea09wMCXvKc05Bxk',
                          },
                          {
                            title: 'Leicester Square Stage',
                            url: '/event/leicester-square-stage-2qqkVYzLS6MebTgxWMm1t2',
                          },
                          {
                            title: 'Soho Stage',
                            url: '/event/soho-stage-dean-street-6dAu9pWL0V6g1bSudrW0KM',
                          },
                          {
                            title: 'Golden Square Stage',
                            url: '/event/golden-square-stage-4JUifwUxWnrE4kQxszjpyg',
                          },
                        ],
                      },
                      {
                        heading: 'Grandstand',
                        links: [
                          {
                            title: 'Grandstand Tickets',
                            url: 'https://www.outsavvy.com/event/8468/pride-in-london-2022-parade-grandstand',
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
                    id: 'nav-accessibility',
                    title: 'Accessibility',
                    desc: 'Find out about accessibility at the Pride parade.',
                    url: '/parade/accessibility',
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-volunteer',
                    title: 'Volunteer',
                    url: 'https://volunteer.prideinlondon.org',
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
                  <SupportButton
                    onClick={() => setOpen(false)}
                    to="/support-us"
                  >
                    Support Pride
                  </SupportButton>
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
