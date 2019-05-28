import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BannerImage from '../components/banner/bannerImage'
import background from '../theme/assets/images/banners/parade-groups/bg@2x.jpg'
// import NotFoundPage from './404'
import ParadeGroupsContainer from '../features/paradeGroups/containers/paradeGroupsContainer'
import { media } from '../theme/media'

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
        subtitleText="Lorem ipsum dolor sit amet"
        altText="Parade groups"
        imageSrc={background}
        imageFullWidth
      />
      <Container>
        <TextContainer>Blurb text</TextContainer>
        <ParadeGroupsContainer paradeGroups={mappedParadeGroups} />
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
    paradeGroups: allContentfulParadeGroup(
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          id
          name
          twitterUrl
          websiteUrl
          facebookUrl
        }
      }
    }
  }
`
