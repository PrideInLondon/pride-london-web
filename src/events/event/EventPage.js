import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import { Container, Row, Column } from '../../components/grid'
import { checkBreakpoint } from '../../utils/style-utils'
import { SponsorsSubSection, renderSponsors } from '../../sponsors'
import { isVirtualEvent, filterPastEvents } from '../helpers'
import EventTagList from './EventTagList'
import EventSchedule from './EventSchedule'
import EventsYouMayLike from './EventsYouMayLike'
import EventInfoCard from './EventInfoCard'
import EventDirectionsSection from './EventDirectionsSection'
import EventShareSection from './EventShareSection'
import { EventUpcomingDates } from './EventUpcomingDates'
import {
  AccessibilityHeading,
  EventInfoCardWrapper,
  HeroImage,
  HeroImageAndTitle,
  PageWrapper,
  RelativeColumn,
  Section,
  SectionTitle,
  Title,
  TitleWrapper,
} from './EventPage.styles'

const EventPage = ({
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
      cta,
      accessibilityDetails,
      location2,
      location,
      locationName,
      addressLine1,
      addressLine2,
      city,
      postcode,
      eventSponsorSection,
      date,
    },
    contentfulEvent,
    site: {
      siteMetadata: { siteUrl },
    },
  },
  location: { pathname },
  pageContext: { startDate, endDate },
  pageContext,
}) => {
  const metaImg = `https:${individualEventPicture.file.url}?w=1000&h=562`
  const metaUrl = siteUrl + pathname
  const sponsorSection = eventSponsorSection
    ? {
        ...eventSponsorSection,
        sponsors: eventSponsorSection.sponsors.map((sponsor) => ({
          name: sponsor.sponsorName,
          url: sponsor.sponsorUrl,
          logo: sponsor.sponsorLogo && sponsor.sponsorLogo.sizes.src,
          level: sponsor.sponsorLevel,
        })),
      }
    : null
  const filteredDates = date.dates.filter((event) =>
    filterPastEvents(event.endDate)
  )
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
          ...(isVirtualEvent(location2)
            ? []
            : [
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
                  content: `${locationName}, ${addressLine1}${
                    addressLine2 ? `, ${addressLine2}` : ''
                  }`,
                },
                {
                  property: 'og:locality',
                  content: city,
                },
                {
                  property: 'og:postal-code',
                  content: postcode,
                },
              ]),
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
              startDate,
              endDate,
              image: metaImg,
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: isVirtualEvent(location2)
                ? 'https://schema.org/OnlineEventAttendanceMode'
                : 'https://schema.org/OfflineEventAttendanceMode',
              location: isVirtualEvent(location2)
                ? {
                    '@type': 'VirtualLocation',
                    url: ticketingUrl,
                  }
                : {
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
            {filteredDates.length > 1 && (
              <Section>
                <SectionTitle>Upcoming Dates</SectionTitle>
                <EventUpcomingDates dates={filteredDates} />
              </Section>
            )}
            <Section>
              <ReactMarkdown>{eventDescription}</ReactMarkdown>
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
              date={startDate}
            />
          </Column>
        </Row>
      </Container>
      {/* {!isVirtualEvent(location2) && (
        <EventDirectionsSection data={contentfulEvent} />
      )} */}
      <EventsYouMayLike eventId={id} />
    </PageWrapper>
  )
}

EventPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default EventPage

export const query = graphql`
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
