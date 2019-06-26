import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BannerImage from '../../components/banner/bannerImage'
import background from '../../theme/assets/images/banners/parade-groups/bg@2x.jpg'
import ParadeGroupsContainer from '../../features/paradeGroups/containers/paradeGroupsContainer'
import { media } from '../../theme/media'
import { paradeGroupCategories } from '../../constants'
// import NotFoundPage from './404'

// const ParadeGroups = () => <NotFoundPage />

const Container = styled.div`
  position: relative;
  min-height: 500px;

  ${media.tablet`
    max-width: 70%;
    padding: 80px;
  `}
`

const TextContainer = styled.div`
  padding: 20px;
`

const mapEntries = paradeGroups => {
  if (!paradeGroups.edges || !Array.isArray(paradeGroups.edges)) return []
  return paradeGroups.edges.map(({ node }) => ({ ...node }))
}

const ParadeGroups = ({ data: { paradeGroups } }) => {
  const mappedParadeGroups = mapEntries(paradeGroups)
  return (
    <>
      <BannerImage
        titleText="Parade groups"
        subtitleText="Find out more about each group marching in this year’s parade below!"
        altText="Parade groups"
        imageSrc={background}
        imageFullWidth
      />
      <Container>
        <TextContainer>
          Pride in London are proud to welcome more than 30,000 people to the
          streets of London for this year’s parade. With more than twice the
          number of people who took part in 2015, it’s set to be our most
          diverse parade yet with more groups representing trans*, BAME and
          bisexual communities than last year. We’re also excited to welcome so
          many different kinds of organisations from so many industries. More
          than half of parade-goers will represent charities or not-for-profit
          organisations.
        </TextContainer>
        <ParadeGroupsContainer
          paradeGroups={mappedParadeGroups}
          categories={paradeGroupCategories}
        />
      </Container>
    </>
  )
}

ParadeGroups.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default ParadeGroups

export const paradeGroupsQuery = graphql`
  query paradeGroups {
    paradeGroups: allContentfulParadeGroup2019(
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          name
          category
          websiteUrl
          twitterUrl
          facebookUrl
          instagramUrl
          emailUrl
        }
      }
    }
  }
`
