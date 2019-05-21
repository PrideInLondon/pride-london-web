import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import BannerImage from '../components/banner/bannerImage'
// import background from '../theme/assets/images/banners/parade-groups/bg@2x.jpg'
import NotFoundPage from './404'

// const mapEntries = paradeGroups => {
//   if (!paradeGroups.edges || !Array.isArray(paradeGroups.edges)) return []
//   return paradeGroups.edges.map(({ node }) => ({ ...node }))
// }

const ParadeGroups = () => (
  //  {
  //  data: {
  //    paradeGroups
  //   }
  // }) => {
  // const mappedParadeGroups = mapEntries(paradeGroups)
  // return (
  //   <Fragment>
  //     <BannerImage
  //       titleText="Parade groups"
  //       subtitleText="Lorem ipsum dolor sit amet"
  //       altText="Parade groups"
  //       imageSrc={background}
  //       imageFullWidth
  //     />
  //     <p>Blurb text</p>
  //     <ParadeGroupsContainer paradeGroups={mappedParadeGroups} />
  //   </Fragment>
  // )
  <NotFoundPage />
)

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
