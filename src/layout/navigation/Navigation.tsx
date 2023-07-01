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
                        heading: 'Pride in London',
                        links: [
                          {
                            title: 'Our story',
                            url: '/about-us',
                          },
                          {
                            title: 'Unity Fund',
                            url: '/unity-fund',
                          },
                        ],
                      },
                      {
                        heading: 'Campaign 2023',
                        links: [
                          {
                            title: 'Never March Alone',
                            url: '/campaign',
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
                          {
                            title: 'News & Views',
                            url: '/news-and-views',
                          },
                        ],
                      },
                      // {
                      //   heading: 'Past Campaigns',
                      //   links: [
                      //     // {
                      //     //   title: 'TBA (2023)',
                      //     //   url: '',
                      //     // },
                      //     {
                      //       title: 'All Our Pride (2022)',
                      //       url: '/about-us/campaigns/archive/2022',
                      //     },
                      //     {
                      //       title: 'You!Me!Us!We! (2020)',
                      //       url: '/about-us/campaigns/archive/2020',
                      //     },
                      //     {
                      //       title: 'Pride Jubilee (2019)',
                      //       url: '/about-us/campaigns/archive/2019',
                      //     },
                      //   ],
                      // },
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
                            title: 'Map',
                            url: '/parade/map',
                          },
                          // {
                          //   title: 'Groups',
                          //   url: '/parade/groups',
                          // },
                          {
                            title: 'Grandstand Tickets',
                            url: 'https://www.outsavvy.com/event/14259/pride-in-london-2023-parade-grandstand',
                          },
                          {
                            title: 'Accessibility',
                            url: '/parade/accessibility',
                          },
                          {
                            title: 'Sustainability',
                            url: '/sustainability',
                          },
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
                            url: '/event/lgbtqia-women-and-non-binary-stage-2qqkVYzLS6MebTgxWMm1t2',
                          },
                          {
                            title: 'Golden Square Stage',
                            url: '/event/golden-square-stage-4JUifwUxWnrE4kQxszjpyg',
                          },
                          {
                            title: 'Soho Square Stage',
                            url: '/event/mzz-kimberley-presents-soho-square-stage-6yHMrxVhK4u4ZLvEIvsHlK',
                          },
                          {
                            title: 'Dean St Stage',
                            url: '/event/dean-street-stage-6dAu9pWL0V6g1bSudrW0KM',
                          },
                        ],
                      },
                      {
                        heading: 'Business and Partners',
                        links: [
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
                    ],
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-events',
                    title: 'Events',
                    desc: 'Discover and attend the Pride and LGBT+ events happening all across London.',
                    url: '/',
                    submenu: [
                      {
                        heading: 'Pride Festival',
                        links: [
                          {
                            title: 'Events',
                            url: '/events',
                          },
                          {
                            title: 'About',
                            url: '/events/festival',
                          },
                        ],
                      },
                      {
                        heading: "Pride's Got Talent",
                        links: [
                          {
                            title: 'The line up',
                            url: '/pgt/',
                          },
                        ],
                      },
                      {
                        heading: 'Business and Partners',
                        links: [
                          {
                            title: 'List your events',
                            url: '/events/list-your-event',
                          },
                          {
                            title: 'Talent Audition',
                            url: '/pgt/audition',
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
                    id: 'nav-visitor',
                    title: 'Explore London',
                    url: '/explore-london/',
                  }}
                />
                <NavItem
                  backgroundColor={backgroundColor}
                  setNavOpen={setOpen}
                  item={{
                    id: 'nav-support-us',
                    title: 'Support us',
                    desc: 'If you’re passionate about the LGBT+ community please consider supporting Pride by donating, sponsoring or volunteering.',
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
              </Menu>
            </nav>
          </FlexColumn>
        </FlexRow>
      </Header>
    </HeaderWrapper>
  )
}

/*

 {
                            title: 'Buy merchandise',
                            url: '/support-us/merchandise',
                          },
                          {
                            title: 'Work for Pride',
                            url: '/support-us/jobs',
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

<NavItem backgroundColor={backgroundColor}>
                  <SupportButton
                    onClick={() => setOpen(false)}
                    to="/support-us"
                  >
                    Support Pride
                  </SupportButton>
                </NavItem>

                <NavItem backgroundColor={backgroundColor}>
                  <SupportButton onClick={() => setOpen(false)} to="/live">
                    Watch Live
                  </SupportButton>
                </NavItem>
*/

export default Navigation
