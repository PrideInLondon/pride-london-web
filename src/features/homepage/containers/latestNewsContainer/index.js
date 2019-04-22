import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, FlexColumn } from '../../../../components/grid'
import LatestNewsHeader from '../../components/latestNews/latestNewsHeader'
import LatestNews from '../../components/latestNews'
import { articleCategories } from '../../../../constants'
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
        render={({ articles: { edges: newsArr = [] } = {} }) =>
          console.log(newsArr) || (
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
                    category: articleCategories.find(
                      cat => cat.title == newsArr[0].node.category
                    ),
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
                        category: articleCategories.find(
                          cat => cat.title == singleNews.category
                        ),
                      }}
                    />
                  ))}
                </SecondaryNews>
              </FlexColumn>
            </>
          )
        }
      />
    </Row>
  </Container>
)

export default LatestNewsContainer
