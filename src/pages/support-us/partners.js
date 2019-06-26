import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BannerImage from '../../components/banner/bannerImage'
import SponsorsSubsection from '../../components/sponsors/components/sponsorSubsection/index'
import constants from '../../constants'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../../components/grid'
import Intercom from '../../components/intercom'
import SponsorHeadline from '../../components/icons/sponsorHeadline'
import SponsorStar from '../../components/icons/sponsorStar'
import renderSponsors from '../../components/sponsors/helpers'
import BannerImg from '../../theme/assets/images/banners/sponsors/bg@2x.jpg'
import PageIntro from '../../components/pageIntro'

const ppLink =
  'https://assets.ctfassets.net/0ho16wyr4i9n/37Lg8PnUVi1t08XEjPUyuz/7d445d8622f55a85fe394ab861b51407/Partnership_Packages_2019.pptx'

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

const selectSponsors = data =>
  data.allContentfulSponsor.edges
    .map(({ node }) => ({
      name: node.sponsorName,
      url: node.sponsorUrl,
      logo: node.sponsorLogo && node.sponsorLogo.sizes.src,
      level: node.sponsorLevel,
    }))
    .reduce(
      (sponsors, sponsor) => ({
        ...sponsors,
        [sponsor.level]: [sponsor, ...(sponsors[sponsor.level] || [])],
      }),
      {}
    )

const Sponsors = ({ data }) => {
  const sponsors = selectSponsors(data)
  return (
    <Fragment>
      <BannerImage
        titleText="Partner with us"
        subtitleText="Find out how your company can help us to keep Pride free for everyone"
        color={theme.colors.yellow}
        imageSrc={BannerImg}
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
          For more information download information on the
          <a href={ppLink}>2019 Partnership Packages.</a>
        </p>
      </PageIntro>
      <Container>
        <Row>
          <Column>
            <ListTitle>Our main 2019 partners</ListTitle>
            <p>
              A huge thank you to our main partners for their continued support.
            </p>
            <MainSponsorsContainer>
              {sponsors[constants.sponsorLevels.headline] && (
                <SponsorsSubsection
                  title="Headline sponsors"
                  icon={<SponsorHeadline />}
                >
                  {renderSponsors(sponsors[constants.sponsorLevels.headline])}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.silver] && (
                <SponsorsSubsection
                  title="Gold sponsors"
                  icon={<SponsorStar color={theme.colors.gold} />}
                >
                  {renderSponsors(sponsors[constants.sponsorLevels.gold])}
                </SponsorsSubsection>
              )}
            </MainSponsorsContainer>

            <SecondarySponsorsContainer>
              {sponsors[constants.sponsorLevels.silver] && (
                <SponsorsSubsection
                  title="Silver sponsors"
                  icon={<SponsorStar color={theme.colors.silver} />}
                >
                  {renderSponsors(sponsors[constants.sponsorLevels.silver])}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.bronze] && (
                <SponsorsSubsection
                  title="Bronze sponsors"
                  icon={<SponsorStar color={theme.colors.bronze} />}
                >
                  {renderSponsors(sponsors[constants.sponsorLevels.bronze])}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.partners] && (
                <SponsorsSubsection title="Partners">
                  {renderSponsors(sponsors[constants.sponsorLevels.partners])}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.supporters] && (
                <SponsorsSubsection title="Supporters">
                  {renderSponsors(sponsors[constants.sponsorLevels.supporters])}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.mediaPartners] && (
                <SponsorsSubsection title="Media Partners">
                  {renderSponsors(
                    sponsors[constants.sponsorLevels.mediaPartners]
                  )}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.digitalPartners] && (
                <SponsorsSubsection title="Digital Partners">
                  {renderSponsors(
                    sponsors[constants.sponsorLevels.digitalPartners]
                  )}
                </SponsorsSubsection>
              )}
            </SecondarySponsorsContainer>
          </Column>
        </Row>
        <Intercom />
      </Container>
    </Fragment>
  )
}

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(
      filter: {}
      sort: { fields: [sponsorName], order: DESC }
    ) {
      edges {
        node {
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 168, quality: 90) {
              src
            }
          }
          sponsorLevel
        }
      }
    }
  }
`

export default Sponsors
