import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { graphql } from 'gatsby'
// import BannerImage from '../components/banner/bannerImage'
// import background from '../theme/assets/images/banners/parade-groups/bg@2x.jpg'
import NotFoundPage from './404'
// import ParadeGroupsContainer from '../features/paradeGroups/containers/paradeGroupsContainer'
// import { media } from '../theme/media'

const ParadeGroups = () => <NotFoundPage />

// const Container = styled.div`
//   max-width: 70%;
//   padding: 20px;

//   ${media.tablet`
//     padding: 80px;
//   `}
// `

// const mapEntries = paradeGroups => {
//   if (!paradeGroups.edges || !Array.isArray(paradeGroups.edges)) return []
//   return paradeGroups.edges.map(({ node }) => ({ ...node }))
// }

// const ParadeGroups = ({ data: { paradeGroups } }) => {
//   const mappedParadeGroups = mapEntries(paradeGroups)
//   return (
//     <>
//       <BannerImage
//         titleText="Parade groups"
//         subtitleText="Lorem ipsum dolor sit amet"
//         altText="Parade groups"
//         imageSrc={background}
//         imageFullWidth
//       />
//       <Container>
//         <p>Blurb text</p>
//         <ParadeGroupsContainer paradeGroups={mappedParadeGroups} />
//       </Container>
//     </>
//   )
// }
// <NotFoundPage />

// ParadeGroups.propTypes = {
//   data: PropTypes.shape({}).isRequired,
// }

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
