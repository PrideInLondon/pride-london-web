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

  const generateTitle = prefix => `${prefix} | Pride in London`
  const generateMetaDescription = prefix => {
    return `${prefix}. In June and July 2020, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances`
  }

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
                          {
                            title: generateTitle('Our story'),
                            url: '/about-us',
                            description: generateMetaDescription('Our story'),
                          },
                          {
                            title: generateTitle('Our impact'),
                            url: '/about-us/impact',
                            description: generateMetaDescription('Our impact'),
                          },
                        ],
                      },
                      {
                        heading: 'Campaigns',
                        links: [
                          {
                            title: generateTitle('#PrideJubilee'),
                            url: '/about-us/campaigns/jubilee',
                            description: generateMetaDescription(
                              '#PrideJubilee'
                            ),
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
                    title: generateTitle('Explore London'),
                    url: '/explore-london',
                    description: generateMetaDescription('Explore London'),
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
