import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid'
import AnnouncementListCard from './AnnouncementListCard'
import AnnouncementListHeader from './AnnouncementListHeader'
import { HighlightBannerContent } from './HighlightBanner.styles'
import { AnnouncementsContent } from './Announcements.styles'
import AnnouncementCarousel from './AnnouncementCarousel'

export const query = graphql`
  query highlightBannerQuery {
    allContentfulHighlightBanner(sort: { order: ASC, fields: order }) {
      edges {
        node {
          id
          title
          description
          callToAction
          order
          url
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

const HighlightBanner = () => (
  <StaticQuery
    query={query}
    render={({
      allContentfulHighlightBanner: { edges: highlights = [] } = {},
    }) => (
      <HighlightBannerContent>
        <BgAnnouncement>
          <Container>
            <Row>
              <Column width={1}>
                {/* <AnnouncementListHeader /> */}
                {highlights.map(
                  (
                    {
                      node: {
                        id,
                        title,
                        description,
                        callToAction,
                        url,
                        image,
                      },
                    },
                    idx
                  ) => {
                    if (idx != 0) {
                      return <></>
                    }
                    return (
                      <AnnouncementListCard
                        image={image}
                        title={description ? description : ''}
                        url={url}
                        key={id}
                        idx={idx}
                        callToActionText={callToAction}
                      />
                    )
                  }
                )}
              </Column>
            </Row>
          </Container>
        </BgAnnouncement>
      </HighlightBannerContent>
    )}
  />
)

export default HighlightBanner
