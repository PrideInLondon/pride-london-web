import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import starIcon from './starIcon.svg'
import { FeaturedArticleCard, CardHeader } from './styles'
import { FeaturedArticleTitle } from '../../containers/newsContainer/styles'
import NewsFilter from '../newsFilter'
import theme from '../../../../theme/theme'
import NewsDate from '../newsDate'

const filterType = {
  title: 'Featured',
  hexColour: theme.colors.indigo,
}

export const query = graphql`
  query articleQuery {
    allContentfulNews(filter: { isFeatured: { eq: true } }) {
      edges {
        node {
          id
          date
          title
        }
      }
    }
  }
`

const FeaturedArticle = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const {
          allContentfulNews: { edges: [{ node = {} } = {}] = [] } = {},
        } = data
        const { date, title } = node
        return (
          <FeaturedArticleCard>
            <CardHeader>
              <NewsFilter filterType={filterType} icon={starIcon} />
              <NewsDate date={date} />
            </CardHeader>
            <FeaturedArticleTitle>{title}</FeaturedArticleTitle>
          </FeaturedArticleCard>
        )
      }}
    />
  )
}

export default FeaturedArticle
