import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, FlexColumn } from '../../../../components/grid'
import OtherArticlesHeader from '../../components/otherArticlesHeader'
import NewsCard from '../../../blog/components/newsCard'
import { Container } from './styles'

export const ArticleCard = styled(NewsCard)`
  border-radius: 4px;
`

const OtherArticles = ({
  otherArticles: { edges: articles = [] },
  categories: { edges: categories },
}) => (
  <Container>
    <Row>
      <FlexColumn width={[1, 1, 1, 1]}>
        <OtherArticlesHeader />
      </FlexColumn>
    </Row>
    <Row>
      {articles.map(({ node: { id, title, category, datePublished } }) => (
        <FlexColumn key={id} width={[1, 1, 1 / 2, 1 / 3]}>
          <ArticleCard
            category={categories.find(cat => cat.node.title == category).node}
            title={title}
            datePublished={datePublished}
          />
        </FlexColumn>
      ))}
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
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        hexColour: PropTypes.string,
      })
    ),
  }).isRequired,
}

export default OtherArticles
