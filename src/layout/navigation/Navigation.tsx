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
                          { title: 'Our impact', url: '/about-us/impact' },
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
                        heading: 'Exhibition',
                        links: [
                          {
                            title: 'Fifty-Two',
                            url: '/fifty-two',
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
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-stalls',
                    title: 'Stalls',
                    desc: 'Find out how your business or group can get a stall at Pride.',
                    url: '/parade/stalls/hire-a-stall/',
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
