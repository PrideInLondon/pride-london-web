import React from 'react'
import { Banner } from '../components/banner'
import { Gallery } from '../components/gallery'
import { RippedSection } from '../components/rippedSection'
import { P } from '../components/typography'
import { Button } from '../components/button'
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
      pageSize={9}
      render={({ entries: pagedEntries, showNextPage }) => (
        <>
          <StyledGalleryContainer
            variant="masonry"
            columns={{ default: 1, md: 2, lg: 3 }}
            marginY={{ default: 'xl', lg: 'xxl' }}
            paddingX={{ default: 'lg', lg: 'xxl' }}
            gridGap={32}
          >
            {pagedEntries.map(({ node }) => (
              <BlogArticleSummaryCard {...node} />
            ))}
          </StyledGalleryContainer>
          <RippedSection
            rips={{ top: { color: 'white' } }}
            backgroundColor="indigo"
            flexDirection="column"
            paddingY={{ default: 'xl', md: 'xxl' }}
          >
            <P
              variant="sm"
              color="white"
              mt={{ default: 'xl', md: 'xxl' }}
              mb="0"
            >
              You're viewing {pagedEntries.length} of {edges.length} articles
            </P>
            {pagedEntries.length < edges.length && (
              <Button
                variant="outline-white"
                marginTop="md"
                onClick={showNextPage}
              >
                Show more articles
              </Button>
            )}
          </RippedSection>
        </>
      )}
    />
  </>
)
