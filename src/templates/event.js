import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image/withIEPolyfill'
import { media } from '../theme/media'
import theme from '../theme/theme'
import {
  EventTagList,
  EventSchedule,
  EventsYouMayLike,
  EventInfoCard,
  EventDirectionsSection,
  EventShareSection,
} from '../events'
import { Container, Row, Column } from '../components/grid'
import { checkBreakpoint } from '../utils/style-utils'
import { SponsorsSubSection, renderSponsors } from '../components/sponsors'

const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.breakpoints[3]};
  background-color: white;
`

const Title = styled.h1`
  color: ${theme.colors.indigo};
  font-size: 1.75em;
  line-height: 1.4;
  margin-bottom: 20px;
  font-weight: 700;
`

const HeroImageAndTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 240px;
  overflow: hidden;

  ${media.desktop`
    flex-direction: column;
    height: 480px;
  `};
`

const TitleWrapper = styled.div`
  padding: 30px 0px;
  ${media.tablet`
    padding: 30px 0;
  `};
  ${media.desktop`
    padding: 60px 0px 50px;
  `};
  ${media.desktopHD`
    max-width: 830px;
  `};
`

const Section = styled.div`
  margin-bottom: 20px;
  ${media.desktop`
    margin-bottom: 60px;
  `};
`

const RelativeColumn = styled(Column)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`
const EventInfoCardWrapper = styled.div`
  ${media.desktopMax`
    background-color: ${theme.colors.indigo}; 
  `};
`

const AccessibilityHeading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 1.875rem 0 0.9375rem 0;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin: 1.875rem 0;
  `};
`

const HeroImage = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100% !important;
  width: 100% !important;
`

const Event = ({
  data: {
    contentfulEvent: {
      id,
      individualEventPicture,
      eventDescription: { eventDescription },
      name,
      performances,
      eventPriceLow,
      eventCategories,
      ticketingUrl,
      accessibilityDetails,
      location,
      locationName,
      addressLine1,
      addressLine2,
      city,
      postcode,
      eventSponsorSection,
    },
    contentfulEvent,
    site: {
      siteMetadata: { siteUrl },
    },
  },
  location: { pathname },
  pageContext: { startTime, endTime },
  pageContext,
}) => {
  const metaImg = `https:${individualEventPicture.file.url}?w=1000&h=562`
  const metaUrl = siteUrl + pathname

  const sponsorSection = eventSponsorSection
    ? {
        ...eventSponsorSection,
        sponsors: eventSponsorSection.sponsors.map(sponsor => ({
          name: sponsor.sponsorName,
          url: sponsor.sponsorUrl,
          logo: sponsor.sponsorLogo && sponsor.sponsorLogo.sizes.src,
          level: sponsor.sponsorLevel,
        })),
      }
    : null

  return (
    <PageWrapper>
      <Helmet
        title={name}
        meta={[
          {
            name: 'description',
            content: eventDescription,
          },

          // Schema meta tags http://schema.org/WebPage
          {
            itemprop: 'name',
            content: name,
          },
          {
            itemprop: 'description',
            content: eventDescription,
          },
          {
            itemprop: 'url',
            content: metaUrl,
          },
          {
            itemprop: 'thumbnailUrl',
            content: metaImg,
          },
          {
            itemprop: 'image',
            content: metaImg,
          },

          // OpenGraph Meta Tags
          {
            property: 'og:title',
            content: name,
          },
          {
            property: 'og:description',
            content: eventDescription,
          },
          {
            property: 'og:latitude',
            content: location.lat,
          },
          {
            property: 'og:longitude',
            content: location.lon,
          },
          {
            property: 'og:street-address',
            content: !addressLine1
              ? ''
              : addressLine2
              ? `${locationName}, ${addressLine1}, ${addressLine2}`
              : `${locationName}, ${addressLine1}`,
          },
          {
            property: 'og:locality',
            content: city,
          },
          {
            property: 'og:postal-code',
            content: postcode,
          },
          {
            property: 'og:url',
            content: metaUrl,
          },
          {
            property: 'og:image',
            content: metaImg,
          },
          {
            property: 'og:image:secure_url',
            content: metaImg,
          },

          // Twitter Meta Tags
          {
            name: 'twitter:title',
            content: name,
          },
          {
            name: 'twitter:description',
            content: eventDescription,
          },
          {
            name: 'twitter:image',
            content: metaImg,
          },
          {
            name: 'twitter:url',
            content: metaUrl,
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ]}
        link={[
          {
            rel: 'image_src',
            content: metaImg,
          },
        ]}
        script={[
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://www.schema.org',
              '@type': 'Event',
              name,
              url: metaUrl,
              description: eventDescription,
              startDate: startTime,
              endDate: endTime,
              image: metaImg,
              location: {
                '@type': 'Place',
                name: "Joe's Party Palace",
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: addressLine1,
                  ...(addressLine2 && { addressLocality: addressLine2 }),
                  addressRegion: city,
                  postalCode: postcode,
                  addressCountry: 'UK',
                },
              },
              offers: {
                '@type': 'Offer',
                price: eventPriceLow,
                priceCurrency: 'GBP',
                ...(ticketingUrl && { url: ticketingUrl }),
              },
            }),
          },
        ]}
      />
      <HeroImageAndTitle>
        <HeroImage
          aria-hidden="true"
          objectFit="cover"
          objectPosition="50% 50%"
          fixed={
            !checkBreakpoint(400)
              ? individualEventPicture.mobile
              : !checkBreakpoint(800)
              ? individualEventPicture.tablet
              : individualEventPicture.desktop
          }
          role="presentation"
        />
      </HeroImageAndTitle>
      <EventInfoCardWrapper>
        <Container>
          <Row>
            <RelativeColumn width={1}>
              <EventInfoCard data={contentfulEvent} pageContext={pageContext} />
            </RelativeColumn>
          </Row>
        </Container>
      </EventInfoCardWrapper>
      <Container>
        <Row>
          <Column width={[1, 1, 0.6]}>
            <TitleWrapper>
              <Title>{name}</Title>
              <EventTagList values={eventCategories} />
            </TitleWrapper>
            <Section>
              <ReactMarkdown source={eventDescription} />
            </Section>
            {sponsorSection && (
              <SponsorsSubSection title={sponsorSection.displayName}>
                {renderSponsors(sponsorSection.sponsors, true)}
              </SponsorsSubSection>
            )}
            {accessibilityDetails && (
              <>
                <AccessibilityHeading>Accessibility</AccessibilityHeading>
                <Section>
                  <ReactMarkdown
                    source={accessibilityDetails.accessibilityDetails}
                  />
                </Section>
              </>
            )}
            {performances && (
              <Section>
                <EventSchedule schedule={performances} />
              </Section>
            )}
            <EventShareSection
              name={name}
              location={metaUrl}
              date={startTime}
            />
          </Column>
        </Row>
      </Container>
      <EventDirectionsSection data={contentfulEvent} />
      <EventsYouMayLike eventId={id} />
    </PageWrapper>
  )
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Event

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }

    contentfulEvent(id: { eq: $id }) {
      id
      name
      individualEventPicture {
        file {
          url
        }
        title
        description
        desktop: fixed(
          width: 1600
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        tablet: fixed(
          width: 800
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        mobile: fixed(
          width: 400
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      eventCategories
      performances {
        ...eventScheduleFragment
      }
      eventDescription {
        eventDescription
      }
      accessibilityDetails {
        accessibilityDetails
      }
      ...eventDirectionsFragment
      ...eventInfoCardQuery
      eventSponsorSection: sponsorSection {
        displayName
        sponsors {
          sponsorLevel
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 168, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
