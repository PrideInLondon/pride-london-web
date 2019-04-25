import React from 'react'
import PropTypes from 'prop-types'
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

const FeaturedArticle = ({ data }) => {
  const { contentfulArticleFeatured: { featuredArticle = {} } = {} } = data
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
}

FeaturedArticle.propTypes = {
  data: PropTypes.shape({}).isRequired,
}
export default FeaturedArticle
