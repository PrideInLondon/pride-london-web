import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Banner } from '../components/banner'
import constants from '../constants'
import theme from '../theme/theme'
import { media } from '../theme/media'
import { Container, Row, Column } from '../components/grid'
import Intercom from '../components/intercom'
import SponsorHeadline from '../components/icons/sponsorHeadline'
import SponsorStar from '../components/icons/sponsorStar'
import { PageIntro } from '../components/pageIntro'
import bannerBackground from './bannerBackground.jpg'
import SponsorsSubSection from './SponsorsSubSection'
import { renderSponsors } from './helpers'
import { AllContentfulSponsor } from './PartnersPage.types'

const ppLink =
  'https://assets.ctfassets.net/0ho16wyr4i9n/2qiM6XcxpwmT2YY9g2hka/361aba69bffe4592f898f15faf61beff/Pride_in_London_2020_Partnerships.pdf'

const ListTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  ${media.tablet`
    margin-bottom: 15px;
  `};
`

const MainSponsorsContainer = styled.div`
  margin-top: 30px;

  ${media.tablet`
    margin-top: 40px;
    max-width: 646px;
  `};
`
const SecondarySponsorsContainer = styled.div`
  ${media.tablet`
    max-width: 860px;
  `};
`

interface Sponsor {
  name: string
  url: string
  logo: string
  level: string
}

const groupSponsorsByLevel = (
  allContentfulSponsor: AllContentfulSponsor
): { [key: string]: Sponsor[] } =>
  allContentfulSponsor.edges
    .map(({ node }) => ({
      name: node.sponsorName,
      url: node.sponsorUrl,
      logo: node.sponsorLogo && node.sponsorLogo.sizes.src,
      level: node.sponsorLevel,
    }))
    .reduce(
      (
        sponsors: { [key: string]: Sponsor[] },
        sponsor: Sponsor
      ): { [key: string]: Sponsor[] } => ({
        ...sponsors,
        [sponsor.level]: [sponsor, ...(sponsors[sponsor.level] || [])],
      }),
      {}
    )

const PartnersPage = ({
  data: { allContentfulSponsor },
}: {
  data: { allContentfulSponsor: AllContentfulSponsor }
}) => {
  const sponsors = groupSponsorsByLevel(allContentfulSponsor)
  return (
    <Fragment>
      <Banner
        titleText="Partner with us"
        subtitleText="Find out how your company can help us to keep Pride free for everyone"
        color={theme.colors.yellow}
        imageSrc={bannerBackground}
        imageFullWidth
      />
      <PageIntro
        cta={{
          title: 'Find out more about becoming a Partner',
          body:
            "Whether you're a big brand or a small business, and interested in supporting Pride in London. We want to hear from you.",
          link: {
            to:
              "mailto:sponsor@prideinlondon.org?subject=I'd%20like%20to%20become%20a%20partner",
            text: 'Email us',
          },
        }}
      >
        <p>
          Without our dedicated and loyal partners, Pride in London simply would
          not exist. Since the current community group took over the running of
          Pride in 2012, the office of the Mayor of London and our headline
          partners have remained committed to keeping Pride on the road. They
          have proved to be great allies of the LGBTQ+ community and we are
          eternally grateful for their support. In 2018, Sadiq Khan, Mayor of
          London extended Pride in London’s contract, committing to support our
          work for a further 5 years.
        </p>
        <p>
          For many years LGBTQ+ people have faced hiding their true selves from
          their colleagues. Only since 2000 have people been able to openly
          serve in the military. Today, while prejudice is still rife in many
          places, many companies and organisations have embraced their LGBTQ+
          members of staff. Studies show, that employers who recognise and
          support diversity are on average more productive and more profitable.
        </p>
        <p>
          Over the years we have seen more and more companies openly support and
          embrace their LGBTQ+ colleagues, as well as provide a safe, loving and
          supportive workplace. Being part of Pride is one of the many ways we
          are seeing workplaces transform for the better. Pride in London are
          proud to be working with our partners to ensure diversity is embedded
          in the core of each company we work with.
        </p>
        <p>
          For more information download information on the{' '}
          <a href={ppLink}>2020 Partnership Packages.</a>
        </p>
      </PageIntro>
      <Container>
        <Row>
          <Column>
            <ListTitle>Thank you to our 2020 partners</ListTitle>
            <p>
              A huge thank you to our main partners for their continued support.
            </p>
            <MainSponsorsContainer>
              {[
                {
                  level: constants.sponsorLevels.headline,
                  title: 'Headline sponsors',
                  icon: <SponsorHeadline />,
                },
                {
                  level: constants.sponsorLevels.gold,
                  title: 'Gold sponsors',
                  icon: <SponsorStar color={theme.colors.gold} />,
                },
              ].map(
                ({ level, title, ...props }) =>
                  sponsors[level] && (
                    <SponsorsSubSection key={title} {...{ title }} {...props}>
                      {renderSponsors(sponsors[level])}
                    </SponsorsSubSection>
                  )
              )}
            </MainSponsorsContainer>
            <SecondarySponsorsContainer>
              {[
                {
                  level: constants.sponsorLevels.silver,
                  title: 'Silver sponsors',
                  icon: <SponsorStar color={theme.colors.silver} />,
                },
                {
                  level: constants.sponsorLevels.bronze,
                  title: 'Bronze sponsors',
                  icon: <SponsorStar color={theme.colors.bronze} />,
                },
                {
                  level: constants.sponsorLevels.partners,
                  title: 'Partners',
                },
                {
                  level: constants.sponsorLevels.supporters,
                  title: 'Supporters',
                },
                {
                  level: constants.sponsorLevels.digitalPartners,
                  title: 'Digital Partners',
                },
              ].map(
                ({ level, title, ...props }) =>
                  sponsors[level] && (
                    <SponsorsSubSection key={title} {...{ title }} {...props}>
                      {renderSponsors(sponsors[level])}
                    </SponsorsSubSection>
                  )
              )}
            </SecondarySponsorsContainer>
          </Column>
        </Row>
        <Intercom />
      </Container>
    </Fragment>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PartnersPage
