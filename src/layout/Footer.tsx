import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Footer } from '../components/footer'

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

interface FooterContainerProps {
  facebook: string
  twitter: string
  instagram: string
  youtube: string
  linkedin: string
  snapchat: string
}

const FooterContainer = ({
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  snapchat,
}: FooterContainerProps) => (
  <StaticQuery
    query={query}
    render={data => (
      <Footer
        socials={{
          facebook,
          twitter,
          instagram,
          'you-tube': youtube,
          'linked-in': linkedin,
          snapchat,
        }}
        data={data}
      />
    )}
  />
)

export default FooterContainer
