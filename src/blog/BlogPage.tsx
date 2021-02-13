import React from 'react'
import { Banner } from '../components/banner'
import { Gallery } from '../components/gallery'
import { BlogArticleSummaryCard } from './article/BlogArticleSummaryCard'
import { StyledGalleryContainer } from './BlogPage.styles'
import { BlogPageProps } from './BlogPage.types'

export const BlogPage: React.FC<BlogPageProps> = ({
  data: {
    content: { title, subtitle, bannerImage },
    blogArticles: { edges },
  },
}) => (
  <>
    <Banner titleText={title} subtitleText={subtitle} fixed={bannerImage} />
    <Gallery
      entries={edges}
      render={({ entries }) => (
        <StyledGalleryContainer
          variant="masonry"
          columns={{ default: 1, md: 2, lg: 3 }}
          marginY={{ default: 'xl', md: 'xxl' }}
          paddingX={{ default: 'lg', md: 'xxl' }}
          gridGap={32}
        >
          {entries.map(({ node }) => (
            <BlogArticleSummaryCard {...node} />
          ))}
        </StyledGalleryContainer>
      )}
    />
  </>
)
