import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../../../theme/theme'
import NewsMetrics from '../../../../components/newsMetrics'
import NewsCategory from '../../../../components/newsCategory'
import { handleSlug } from '../../../../utilities'
import { FeaturedArticleCard, CardHeader, FeaturedArticleTitle } from './styles'

const category = {
  title: 'Featured',
  hexColour: theme.colors.indigo,
}

const FeaturedArticle = ({ data }) => {
  const { contentfulArticleFeatured: { featuredArticle = {} } = {} } = data
  const { datePublished, title, slug } = featuredArticle
  return (
    <FeaturedArticleCard to={handleSlug(slug)}>
      <CardHeader>
        <NewsCategory category={category} />
        <NewsMetrics datePublished={datePublished} />
      </CardHeader>
      <FeaturedArticleTitle>{title}</FeaturedArticleTitle>
    </FeaturedArticleCard>
  )
}

FeaturedArticle.propTypes = {
  data: PropTypes.shape({}).isRequired,
}
export default FeaturedArticle
