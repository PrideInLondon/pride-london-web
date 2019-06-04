import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container, Row, Column, GreyWrapper } from '../components/grid'
import BannerImage from '../components/banner/bannerImage'
import theme from '../theme/theme'
import PageIntro from '../components/pageIntro'
import CommunityPartnerCard from '../features/visitorInformation/components/communityPartnerCard'

const SectionTitle = styled.h2`
  text-align: center;
`

const VisitorInformationPage = ({
  data: {
    allContentfulCommunityPartner: { edges: partners },
  },
}) => {
  return (
    <div>
      <BannerImage
        titleText="Visitor Information"
        subtitleText="Find out about this year’s Pride Partners"
        color={theme.colors.yellow}
      />
      <PageIntro
        cta={{
          title: 'Become a partner',
          body:
            'Interested in supporting Pride in London and having your business featured here?',
          link: { to: 'mailto:info@prideinlondon.org', text: 'Get in touch' },
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
      </PageIntro>
      <GreyWrapper as="section">
        <Container>
          <Row>
            <Column width={1}>
              <SectionTitle>2019 Partners</SectionTitle>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row pb={[30, 30, 60]}>
            {partners.length &&
              partners.map(({ node: partner }) => {
                return (
                  <Column width={[1, 1, 0.3333]} key={partner.id}>
                    <CommunityPartnerCard partner={partner} />
                  </Column>
                )
              })}
          </Row>
        </Container>
      </GreyWrapper>
    </div>
  )
}

VisitorInformationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VisitorInformationPage

export const CommunityPartnersQuery = graphql`
  query CommunityPartnersQuery {
    allContentfulCommunityPartner(sort: { fields: venueName, order: ASC }) {
      edges {
        node {
          id
          venueName
          location {
            lon
            lat
          }
          description {
            description
          }
          category
          accessibilityDetails
          featuredImage {
            id
            fixed(
              width: 400
              height: 235
              resizingBehavior: FILL
              quality: 90
              cropFocus: FACE
            ) {
              ...GatsbyContentfulFixed
            }
          }
          websiteUrl
          twitterUrl
          facebookUrl
        }
      }
    }
  }
`
