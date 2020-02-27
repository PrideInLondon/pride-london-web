import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import styled from 'styled-components'
import { FlexColumn, Container, Row, Column } from '../components/grid'
import AnnouncementCard from './AnnouncementCard'
import { FeaturedEventContent } from './FeaturedEvents.styles'
import AnnouncementHeader from './AnnouncementHeader'
import { settings } from './announcementsSlickSettings'
import { AnnouncementsSliderWrapper } from './Announcements.styles'

export const query = graphql`
  query announcementsQuery {
    allContentfulAnnouncement(limit: 6) {
      edges {
        node {
          id
          title
          url
          image {
            title
            fixed(
              width: 600
              height: 600
              resizingBehavior: FILL
              quality: 90
            ) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const BgAnnouncement = styled.div`
  position: relative;
  margin-top: 30px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 43%;
    z-index: -10;
    background-color: #efefef;
  }
`

const AnnouncementsContainer = () => (
  <StaticQuery
    query={query}
    render={({
      allContentfulAnnouncement: { edges: announcements = [] } = {},
    }) => (
      <FeaturedEventContent>
        <BgAnnouncement>
          <Container>
            <Row>
              <Column width={1}>
                <AnnouncementHeader />
                <AnnouncementsSliderWrapper>
                  <Slider {...settings}>
                    {announcements.map(
                      ({ node: { id, title, url, image } }) => (
                        <FlexColumn
                          width={[
                            1, // 100% between 0px screen width and first breakpoint (375px)
                            1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                            1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
                            1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                          ]}
                          key={id}
                        >
                          <AnnouncementCard
                            image={image}
                            title={title}
                            url={url}
                          />
                        </FlexColumn>
                      )
                    )}
                  </Slider>
                </AnnouncementsSliderWrapper>
              </Column>
            </Row>
          </Container>
        </BgAnnouncement>
      </FeaturedEventContent>
    )}
  />
)

export default AnnouncementsContainer
