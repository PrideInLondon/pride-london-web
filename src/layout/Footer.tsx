import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Footer as FooterBase } from '../components/footer'

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

interface FooterProps {
  facebook: string
  twitter: string
  instagram: string
  youtube: string
  linkedin: string
  snapchat: string
}

export const Footer = ({
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  snapchat,
}: FooterProps) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <FooterBase
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
