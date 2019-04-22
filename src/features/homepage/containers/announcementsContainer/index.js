import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import { FlexColumn, Container, Row, Column } from '../../../../components/grid'
import { settings } from '../../../../theme/settingSlickSlider'
import AnnouncementCard from '../../components/announcementCard'
import { FeaturedEventContent } from '../../../homepage/components/featuredEvents/styles'
import AnnouncementHeader from '../../../homepage/components/announcementHeader'

export const query = graphql`
  query announcementsQuery {
    allContentfulAnnouncements(limit: 6) {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
          article {
            id
            title
          }
        }
      }
    }
  }
`

const AnnouncementsContainer = () => (
  <Fragment>
    <StaticQuery
      query={query}
      render={({
        allContentfulAnnouncements: { edges: announcements = [] } = {},
      }) => (
        <>
          <FeaturedEventContent>
            <Container>
              <Row>
                <Column>
                  <AnnouncementHeader />
                </Column>
              </Row>
            </Container>
            <Slider {...settings}>
              {announcements.map(announcement => (
                <FlexColumn
                  width={[
                    1, // 100% between 0px screen width and first breakpoint (375px)
                    1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                    1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
                    1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                  ]}
                  key={announcement.node.id}
                >
                  <AnnouncementCard
                    image={announcement.node.image.file.url}
                    title={announcement.node.title}
                  />
                </FlexColumn>
              ))}
            </Slider>
          </FeaturedEventContent>
        </>
      )}
    />
  </Fragment>
)

export default AnnouncementsContainer
