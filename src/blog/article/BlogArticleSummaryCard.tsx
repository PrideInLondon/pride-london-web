import React from 'react'
import { CategoryCard } from '../../components/categoryCard'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { Title } from './BlogArticleSummaryCard.styles'
import { getCategoryColor, generateBlogArticleSlug } from './helpers'
import { ContentfulBlogArticleSummary } from './BlogArticlePage.types'

export const BlogArticleSummaryCard: React.FC<ContentfulBlogArticleSummary> = ({
  title,
  hero,
  category,
}) => (
  <CategoryCard
    key={title}
    to={generateBlogArticleSlug(title)}
    image={getImageForBreakpoint(hero)}
    category={{
      color: getCategoryColor(category),
      name: category,
    }}
  >
    <Title>{title}</Title>
  </CategoryCard>
)
