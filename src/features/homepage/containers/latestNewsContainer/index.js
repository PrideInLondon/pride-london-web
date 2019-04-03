import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, FlexColumn } from '../../../../components/grid'
import LatestNewsCard from '../../components/latestNews/latestNewsCard'
import LatestNewsHeader from '../../components/latestNews/latestNewsHeader'
import LatestNews from '../../components/latestNews'
import { Container, SecondaryNews } from './styles'

export const query = graphql`
  query latestNewsQuery {
    allContentfulNews(
      filter: { isFeatured: { eq: true } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          date
          title
          newsCategory {
            title
            hexColour
          }
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const LatestNewsContainer = () => (
  <Container>
    <Row>
      <FlexColumn width={[1, 1, 1, 1]}>
        <LatestNewsHeader />
      </FlexColumn>
    </Row>
    <Row>
      <StaticQuery
        query={query}
        render={({ allContentfulNews: { edges: newsArr = [] } = {} }) => (
          <>
            <FlexColumn
              width={[
                1, // 100% between 0px screen width and first breakpoint (375px)
                1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
                2 / 3, // 66% between third breakpoint(1280px) and fourth breakpoint (1440px)
              ]}
            >
              <LatestNews {...newsArr[0].node} />
            </FlexColumn>
            <FlexColumn
              width={[
                1, // 100% between 0px screen width and first breakpoint (375px)
                1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
                1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
              ]}
            >
              <SecondaryNews>
                {newsArr.slice(1).map(({ node: singleNews }) => (
                  <LatestNewsCard key={singleNews.id} {...singleNews} />
                ))}
              </SecondaryNews>
            </FlexColumn>
          </>
        )}
      />
    </Row>
  </Container>
)

export default LatestNewsContainer
