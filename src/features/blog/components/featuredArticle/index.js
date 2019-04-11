import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FeaturedArticleTitle } from '../../containers/newsContainer/styles'
import NewsFilter from '../newsFilter'
import theme from '../../../../theme/theme'
import NewsMetrics from '../../../../components/newsMetrics'
import { FeaturedArticleCard, CardHeader } from './styles'
import starIcon from './starIcon.svg'

const filterType = {
  title: 'Featured',
  hexColour: theme.colors.indigo,
}

export const query = graphql`
  query articleQuery {
    contentfulArticleFeatured {
      featuredArticle {
        id
        datePublished
        title
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
          contentfulArticleFeatured: { featuredArticle = {} } = {},
        } = data
        const { datePublished, title } = featuredArticle
        return (
          <FeaturedArticleCard>
            <CardHeader>
              <NewsFilter filterType={filterType} icon={starIcon} />
              <NewsMetrics datePublished={datePublished} />
            </CardHeader>
            <FeaturedArticleTitle>{title}</FeaturedArticleTitle>
          </FeaturedArticleCard>
        )
      }}
    />
  )
}

export default FeaturedArticle
