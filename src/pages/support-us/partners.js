import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BannerImage from '../../components/banner/bannerImage'
import SponsorsSubsection from '../../features/sponsors/components/sponsorSubsection/index'
import constants from '../../constants'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../../components/grid'
import Button from '../../components/button'
import SponsorHeadline from '../../components/icons/sponsorHeadline'
import SponsorStar from '../../components/icons/sponsorStar'
import renderSponsors from '../../features/sponsors/helpers'
import BannerImg from '../../theme/assets/images/banners/sponsors/bg@2x.jpg'

const ListTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  ${media.tablet`
    margin-bottom: 15px;
  `};
`

const MainContainer = styled(Container)`
  margin-top: 30px;
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

const IntroContainer = styled(Column)`
  margin-bottom: 30px;
  padding-bottom: 20px;
`

const RelativeColumn = styled(Column)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`

const CTAWrapper = styled.div`
  ${media.desktopMax`
    background-color: ${theme.colors.indigo}; 
  `};
`

const CTABox = styled.div`
  background-color: ${theme.colors.indigo};
  padding: 30px 0;
  color: white;
  ${media.desktop`
    position: absolute;
    width: 33.3333%;
    right: 0;
    top: -100px;
    padding: 40px;
 `};
`

const SponsorButton = styled(Button)`
  && {
    width: 100%;
    min-width: 0;
  }
`

const CTATitle = styled.h3`
  margin: 0 0 0.5em 0;
  color: ${theme.colors.white};
`

const CTABody = styled.p`
  margin: 0 0 1.875rem;
  font-size: 0.875rem;
  line-height: 1.2857;
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
        titleText="Sponsor us"
        subtitleText="Help us to keep Pride free for everyone by becoming one of our sponsors"
        color={theme.colors.yellow}
        imageSrc={BannerImg}
      />
      <CTAWrapper>
        <Container>
          <Row>
            <RelativeColumn width={1}>
              <CTABox>
                <CTATitle>Sponsor us!</CTATitle>
                <CTABody>
                  Whether you're a big brand or a small business, and interested
                  in supporting Pride in London. We want to hear from you.
                </CTABody>
                <SponsorButton
                  to="mailto:sponsor@prideinlondon.org?subject=I'd%20like%20to%20become%20a%20partner"
                  primary
                >
                  Email us
                </SponsorButton>
              </CTABox>
            </RelativeColumn>
          </Row>
        </Container>
      </CTAWrapper>
      <MainContainer>
        <Row>
          <IntroContainer
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
              7 / 12, // 7/12 between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
          >
            <p>
              Without our dedicated and loyal partners, Pride in London simply
              would not exist. Since the current community group took over the
              running of Pride in 2012, the office of the Mayor of London and
              Barclays have remained committed to keeping Pride on the road.
              They have proved to be great allies of the LGBTQ+ community and we
              are eternally grateful for their support. In 2018, Sadiq Khan,
              Mayor of London extended Pride in London’s contract, committing to
              support our work for a further 5 years.
            </p>
            <p>
              For many years LGBTQ+ people have faced hiding their true selves
              from their colleagues. Only since 2000 have people been able to
              openly serve in the military. Today, while prejudice is still rife
              in many places, many companies and organisations have embraced
              their LGBTQ+ members of staff. Studies show, that employers who
              recognise and support diversity are on average more productive and
              more profitable.
            </p>
            <p>
              Over the years we have seen more and more companies openly support
              and embrace their LGBTQ+ colleagues, as well as provide a safe,
              loving and supportive workplace. Being part of Pride is one of the
              many ways we are seeing workplaces transform for the better. Pride
              in London are proud to be working with our partners to ensure
              diversity is embedded in the core of each company we work with.
            </p>
          </IntroContainer>
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

              {sponsors[constants.sponsorLevels.digitalPartners] && (
                <SponsorsSubsection title="Digital Partners">
                  {renderSponsors(
                    sponsors[constants.sponsorLevels.digitalPartners]
                  )}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.mediaPartners] && (
                <SponsorsSubsection title="Media Partners">
                  {renderSponsors(
                    sponsors[constants.sponsorLevels.mediaPartners]
                  )}
                </SponsorsSubsection>
              )}

              {sponsors[constants.sponsorLevels.partners] && (
                <SponsorsSubsection title="Partners">
                  {renderSponsors(sponsors[constants.sponsorLevels.partners])}
                </SponsorsSubsection>
              )}
            </SecondarySponsorsContainer>
          </Column>
        </Row>
      </MainContainer>
    </Fragment>
  )
}

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(filter: {}) {
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
