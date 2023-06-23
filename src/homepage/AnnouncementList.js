import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid'
import AnnouncementListCard from './AnnouncementListCard'
import AnnouncementListHeader from './AnnouncementListHeader'
import { AnnouncementsContent } from './Announcements.styles'

export const query = graphql`
  query announcementsQuery {
    allContentfulAnnouncement(sort: {order: ASC, fields: order}) {
      edges {
        node {
          id
          title
          url
          callToActionText
          order
          image {
            title
            fixed(
              width: 1260
              height: 450
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

const AnnouncementsListContainer = () => (
  <StaticQuery
    query={query}
    render={({
      allContentfulAnnouncement: { edges: announcements = [] } = {},
    }) => (
      <AnnouncementsContent>
        <BgAnnouncement>
          <Container>
            <Row>
              <Column width={1}>
                <AnnouncementListHeader />
                {announcements.map(
                  (
                    { node: { id, title, url, callToActionText, image } },
                    idx
                  ) => (
                    <AnnouncementListCard
                      image={image}
                      title={title}
                      url={url}
                      // desc={desc ? desc.desc : ''}
                      key={id}
                      idx={idx}
                      callToActionText={
                        callToActionText ? callToActionText : 'Find out more!'
                      }
                    />
                  )
                )}
              </Column>
            </Row>
          </Container>
        </BgAnnouncement>
      </AnnouncementsContent>
    )}
  />
)

export default AnnouncementsListContainer
