import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../../theme/theme'
import { Row, FlexColumn } from '../../../../components/grid'
import OtherArticlesHeader from '../../components/otherArticlesHeader'
import NewsCard from '../../../blog/components/newsCard'
import { Container } from './styles'

export const ArticleCard = styled(NewsCard)`
  border-radius: 4px;
`

const OtherArticles = ({ otherArticles: { edges: articles = [] } }) => (
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
            filterType={{
              hexColour: theme.colors.yellow,
              title: category[0],
            }}
            title={title}
            date={datePublished}
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
}

export default OtherArticles
