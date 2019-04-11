import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, FlexColumn } from '../../../../components/grid'
import LatestNewsHeader from '../../components/latestNews/latestNewsHeader'
import LatestNews from '../../components/latestNews'
import { Container, SecondaryNews, NewsCard } from './styles'

export const query = graphql`
  query latestNewsQuery {
    articles: allContentfulArticle(
      filter: { category: { ne: "Views" } }
      sort: { fields: [datePublished], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          datePublished
          title
          category
          headerImage {
            file {
              url
            }
          }
        }
      }
    }
    categories: allContentfulNewsCategory {
      edges {
        node {
          title
          hexColour
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
        render={({
          articles: { edges: newsArr = [] } = {},
          categories: { edges: categories = [] },
        }) => (
          <>
            <FlexColumn
              width={[
                1, // 100% between 0px screen width and first breakpoint (375px)
                1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
                2 / 3, // 66% between third breakpoint(1280px) and fourth breakpoint (1440px)
              ]}
            >
              <LatestNews
                {...{
                  ...newsArr[0].node,
                  category: categories.find(
                    cat => cat.node.title == newsArr[0].node.category
                  ).node,
                }}
              />
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
                  <NewsCard
                    key={singleNews.id}
                    {...{
                      ...singleNews,
                      category: categories.find(
                        cat => cat.node.title == singleNews.category
                      ).node,
                    }}
                  />
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
