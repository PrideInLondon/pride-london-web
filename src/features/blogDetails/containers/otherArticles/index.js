import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { Row, FlexColumn } from '../../../../components/grid'
import OtherArticlesHeader from '../../components/otherArticlesHeader'
import NewsCard from '../../../blog/components/newsCard'
import { Container } from './styles'

export const query = graphql`
  query otherArticlesQuery {
    allContentfulArticle(
      sort: { fields: [datePublished], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          datePublished
          category
        }
      }
    }
  }
`

export const ArticleCard = styled(NewsCard)`
  border-radius: 4px;
`

const OtherArticles = () => (
  <Container>
    <Row>
      <FlexColumn width={[1, 1, 1, 1]}>
        <OtherArticlesHeader />
      </FlexColumn>
    </Row>
    <Row>
      <StaticQuery
        query={query}
        render={({ allContentfulArticle: { edges: articles = [] } = {} }) =>
          articles.map(({ node: { id, title, category, datePublished } }) => (
            <FlexColumn key={id} width={[1, 1, 1 / 2, 1 / 3]}>
              <ArticleCard
                filterType={{
                  hexColour: theme.colors.yellow,
                  title: category[0],
                }}
                title={title}
                date={datePublished}
              />
            </FlexColumn>
          ))
        }
      />
    </Row>
  </Container>
)

export default OtherArticles
