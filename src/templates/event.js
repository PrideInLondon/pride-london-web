import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import { media } from '../theme/media'
import theme from '../theme/theme'
import {
  EventTagList,
  EventSchedule,
  EventsYouMayLike,
  EventInfoCard,
  EventDirectionsSection,
} from '../features/events'
import { Container, Row, Column } from '../components/grid'

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
  ${media.desktop`
    flex-direction: column;
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

const HeroImage = styled.div`
  background-size: cover;
  background-image: url(${props => props.src});
  background-position: center;
  height: 240px;
  ${media.desktop`
    height: 480px;
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

// eslint-disable-next-line react/prefer-stateless-function
export default class Event extends Component {
  render() {
    const {
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
        },
        contentfulEvent,
        site: {
          siteMetadata: { siteUrl },
        },
      },
      location: { pathname },
      pageContext: { startTime, endTime },
      pageContext,
    } = this.props

    const metaImg = `https:${individualEventPicture.file.url}?w=1000&h=562`
    const metaUrl = siteUrl + pathname

    return (
      <PageWrapper>
        <Helmet
          title={name}
          meta={[
            {
              name: 'description',
              content: eventDescription,
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
              content: city && city,
            },
            {
              property: 'og:postal-code',
              content: postcode && postcode,
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
            src={individualEventPicture.file.url}
            role="presentation"
          />
        </HeroImageAndTitle>
        <EventInfoCardWrapper>
          <Container>
            <Row>
              <RelativeColumn width={1}>
                <EventInfoCard
                  data={contentfulEvent}
                  pageContext={pageContext}
                />
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
            </Column>
          </Row>
        </Container>
        <EventDirectionsSection data={contentfulEvent} />
        <EventsYouMayLike eventId={id} />
      </PageWrapper>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

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
    }
  }
`
