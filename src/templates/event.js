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
    padding: 30px 50px;
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

// eslint-disable-next-line react/prefer-stateless-function
export default class Event extends Component {
  render() {
    const {
      id,
      individualEventPicture,
      eventDescription,
      name,
      performances,
      eventCategories,
    } = this.props.data.contentfulEvent

    return (
      <PageWrapper>
        <Helmet title={name} />
        <HeroImageAndTitle>
          <HeroImage
            src={individualEventPicture.file.url}
            role="presentation"
          />
        </HeroImageAndTitle>
        <EventInfoCard data={this.props.data.contentfulEvent} />
        <Container>
          <Row>
            <Column width={1}>
              <TitleWrapper>
                <Title>{name}</Title>
                <EventTagList values={eventCategories} />
              </TitleWrapper>
              <Section>
                <ReactMarkdown source={eventDescription.eventDescription} />
              </Section>
              {performances && (
                <Section>
                  <EventSchedule schedule={performances} />
                </Section>
              )}
            </Column>
          </Row>
        </Container>
        <EventDirectionsSection data={this.props.data.contentfulEvent} />
        <EventsYouMayLike eventId={id} />
      </PageWrapper>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
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
      ...eventDirectionsFragment
      ...eventInfoCardQuery
    }
  }
`
