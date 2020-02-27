import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, FlexColumn } from '../../../../components/grid'
import OtherArticlesHeader from '../../components/otherArticlesHeader'
import { NewsCard } from '../../../../components/newsCard'
import { Container } from './styles'

export const ArticleCard = styled(NewsCard)`
  border-radius: 4px;
`

const OtherArticles = ({
  otherArticles: { edges: articles = [] },
  categories,
}) => (
  <Container>
    <Row>
      <FlexColumn width={[1, 1, 1, 1]}>
        <OtherArticlesHeader />
      </FlexColumn>
    </Row>
    <Row>
      {articles.map(
        ({ node: { id, title, category, datePublished, slug } }) => (
          <FlexColumn key={id} width={[1, 1, 1 / 2, 1 / 3]}>
            <ArticleCard
              category={categories.find(cat => cat.title == category)}
              title={title}
              datePublished={datePublished}
              slug={slug}
            />
          </FlexColumn>
        )
      )}
    </Row>
  </Container>
)

OtherArticles.propTypes = {
  otherArticles: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        articles: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string,
              title: PropTypes.string,
              category: PropTypes.arrayOf(PropTypes.string),
              datePublished: PropTypes.string,
            }),
          })
        ),
      })
    ),
  }).isRequired,
  categories: PropTypes.array.isRequired,
}

export default OtherArticles
