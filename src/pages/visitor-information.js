import React from 'react'
// import { graphql } from 'gatsby'
import BannerImage from '../components/banner/bannerImage'
import theme from '../theme/theme'
import PageIntro from '../components/pageIntro'

const VisitorInformationPage = () => {
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
    </div>
  )
}

export default VisitorInformationPage

// const CommunityPartnersQuery = graphql`
//   query CommunityPartnersQuery {
//     allContentfulCommunityPartner(sort: { fields: venueName, order: ASC }) {
//       edges {
//         node {
//           id
//           venueName
//           location {
//             lon
//             lat
//           }
//           category
//           accessibilityDetails
//           featuredImage {
//             id
//           }
//           websiteUrl
//           twitterUrl
//           facebookUrl
//         }
//       }
//     }
//   }
// `
