import React from 'react'
import { Banner } from '../components/banner'
import constants from '../constants'
import theme from '../theme/theme'
import { Container, Row, Column } from '../components/grid'
import SponsorHeadline from '../components/icons/sponsorHeadline'
import SponsorStar from '../components/icons/sponsorStar'
import { PageIntro } from '../components/pageIntro'
import bannerBackground from './bannerBackground.jpg'
import SponsorsSubSection from './SponsorsSubSection'
import { renderSponsors } from './helpers'
import { groupSponsorsByLevel } from './sponsors.utils'
import {
  ListTitle,
  MainSponsorsContainer,
  SecondarySponsorsContainer,
} from './PartnersPage.styles'
import { ContentfulSponsor, SponsorLevel } from './PartnersPage.types'

const PartnersPage = ({
  data: {
    allContentfulSponsor: { edges },
  },
}: {
  data: { allContentfulSponsor: { edges: { node: ContentfulSponsor }[] } }
}) => {
  const sponsors = groupSponsorsByLevel(edges)
  return (
    <>
      <Banner
        titleText="Partner with us"
        subtitleText={[
          'Find out how your company can help us to keep Pride free for everyone',
        ]}
        color={theme.colors.yellow}
        imageSrc={bannerBackground}
        imageFullWidth
      />
      <PageIntro
        cta={{
          title: 'Find out more about becoming a Partner',
          body: "Whether you're a big brand or a small business, and interested in supporting Pride in London. We want to hear from you.",
          link: {
            to: "mailto:sponsor@prideinlondon.org?subject=I'd%20like%20to%20become%20a%20partner",
            text: 'Email us',
          },
        }}
      >
        <p>
          Without our dedicated and loyal partners, Pride in London simply would
          not exist. Since the current community group took over the running of
          Pride in 2012, the office of the Mayor of London and our headline
          partners have remained committed to keeping Pride on the road. They
          have proved to be great allies of the LGBT+ community and we are
          eternally grateful for their support. In 2018, Sadiq Khan, Mayor of
          London extended Pride in London’s contract, committing to support our
          work for a further 5 years.
        </p>
        <p>
          For many years LGBT+ people have faced hiding their true selves from
          their colleagues. Only since 2000 have people been able to openly
          serve in the military. Today, while prejudice is still rife in many
          places, many companies and organisations have embraced their LGBT+
          members of staff. Studies show, that employers who recognise and
          support diversity are on average more productive and more profitable.
        </p>
        <p>
          Over the years we have seen more and more companies openly support and
          embrace their LGBT+ colleagues, as well as provide a safe, loving and
          supportive workplace. Being part of Pride is one of the many ways we
          are seeing workplaces transform for the better. Pride in London are
          proud to be working with our partners to ensure diversity is embedded
          in the core of each company we work with.
        </p>
      </PageIntro>
      <Container>
        <Row>
          <Column>
            <ListTitle>Thank you to our 2022 partners</ListTitle>
            <p>
              A huge thank you to all of the brands that have supported us over
              the years.
            </p>
            <MainSponsorsContainer>
              {(
                [
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
                ] as {
                  level: SponsorLevel
                  title: string
                  icon?: React.ReactNode
                }[]
              ).map(
                ({ level, title, ...props }) =>
                  sponsors[level] && (
                    <SponsorsSubSection key={title} {...{ title }} {...props}>
                      {renderSponsors(sponsors[level])}
                    </SponsorsSubSection>
                  )
              )}
            </MainSponsorsContainer>
            <SecondarySponsorsContainer>
              {(
                [
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
                    title: 'Advocates',
                  },
                  {
                    level: constants.sponsorLevels.supporters,
                    title: 'Supporters',
                  },
                  {
                    level: constants.sponsorLevels.digitalPartners,
                    title: 'Digital Partners',
                  },
                ] as {
                  level: SponsorLevel
                  title: string
                  icon?: React.ReactNode
                }[]
              ).map(
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
      </Container>
    </>
  )
}

export default PartnersPage
