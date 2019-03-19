import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Container } from '../components/grid/'
import ImageBanner from '../components/imageBanner'
import SponsorBadge from '../features/sponsors/components/sponsorBadge'
import SponsorsSubsection from '../features/sponsors/components/sponsorSubsection/index'
import constants from '../constants'
import theme from '../theme/theme'
import { media } from '../theme/media'

const SponsorsContainer = styled(Container)`
  background-color: ${theme.colors.white};
  padding: 0 20px;
  ${media.tablet`
    padding: 0 90px;
  `};
`

const Body = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid rgba(203, 203, 203, 0.5);
  ${media.tablet`
    padding: 60px 0;
  `};
`

const ListTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  ${media.tablet`
    margin-bottom: 30px;
  `};
`

const SponsorsList = styled.div`
  padding: 30px 0;
  ${media.tablet`
    padding: 60px 0;
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

const renderSponsors = sponsors =>
  sponsors.map(sponsor => <SponsorBadge key={sponsor.name} {...sponsor} />)

// const selectBodyContent = data => data.contentfulGenericCopy.content.content

const Sponsors = ({ data }) => {
  const sponsors = selectSponsors(data)
  return (
    <Fragment>
      <ImageBanner
        titleText="Sponsor us"
        subtitleText="Help us to keep Pride free for everyone by becoming one of our sponsors"
        color={theme.colors.yellow}
      />
      <SponsorsContainer>
        <Body>
          <ReactMarkdown />
        </Body>
        <SponsorsList>
          <ListTitle>Our main 2018 partners</ListTitle>
          <p>
            A huge thank you to our main partners for their continued support.
          </p>
          <div>
            <SponsorsSubsection title="Headline sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.headline])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Gold sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.gold])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Silver sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.silver])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Bronze sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.bronze])}
            </SponsorsSubsection>
          </div>
        </SponsorsList>
      </SponsorsContainer>
    </Fragment>
  )
}

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(filter: {}) {
      distinct
      edges {
        node {
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 84) {
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
