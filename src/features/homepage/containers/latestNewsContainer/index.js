import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, FlexColumn } from '../../../../components/grid'
import LatestNewsHeader from '../../components/latestNews/latestNewsHeader'
import LatestNews from '../../components/latestNews'
import constants from '../../../../constants'
import CTALink from '../../../../components/ctaLink'
import { Wrapper, SecondaryNews, NewsCard, CTALinkOnlyMobile } from './styles'

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
          slug
          datePublished
          title
          category
          headerImage {
            title
            fixed(
              width: 830
              height: 500
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

const LatestNewsContainer = () => (
  <Wrapper>
    <Row>
      <FlexColumn width={1}>
        <LatestNewsHeader />
      </FlexColumn>
    </Row>

    <Row mx={[0, 0, 0, 75]}>
      <StaticQuery
        query={query}
        render={({ articles: { edges: newsArr = [] } = {} }) => (
          <>
            <FlexColumn
              width={[
                1, // 100% between 0px screen width and first breakpoint (375px)
                1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
                2 / 3, // 66% between third breakpoint(1280px) and fourth breakpoint (1440px)
              ]}
              px={[0, 0, 0, 3]}
            >
              <LatestNews
                {...{
                  ...newsArr[0].node,
                  category: constants.articleCategories.find(
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
                      category: constants.articleCategories.find(
                        cat => cat.title == singleNews.category
                      ),
                    }}
                  />
                ))}
              </SecondaryNews>
            </FlexColumn>
          </>
        )}
      />
    </Row>
    <Row>
      <FlexColumn
        width={[
          1, // 100% between 0px screen width and first breakpoint (375px)
          1, // 100% between first breakpoint(375px) and second breakpoint (768px)
          1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
          1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
        ]}
        py={[1, 2, 0]}
      >
        <CTALinkOnlyMobile>
          <CTALink to="/news-and-views">View all news</CTALink>
        </CTALinkOnlyMobile>
      </FlexColumn>
    </Row>
  </Wrapper>
)

export default LatestNewsContainer
