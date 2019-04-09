import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Footer from '../footer'

const query = graphql`
  query footerSponsorsQuery {
    allContentfulSponsor(
      filter: { sponsorLevel: { regex: "/Headline|Gold|Silver|Bronze/" } }
      sort: { fields: sponsorName, order: ASC }
    ) {
      edges {
        node {
          id
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

const FooterQuery = props => (
  <StaticQuery
    query={query}
    render={data => {
      return <Footer {...props} data={data} />
    }}
  />
)

export default FooterQuery
