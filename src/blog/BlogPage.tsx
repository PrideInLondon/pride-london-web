import React from 'react'
import { Banner } from '../components/banner'
import { BlogPageProps } from './BlogPage.types'

export const BlogPage: React.FC<BlogPageProps> = ({
  data: {
    contentfulCustomPageContent: { title, subtitle, bannerImage },
  },
}) => <Banner titleText={title} subtitleText={subtitle} fixed={bannerImage} />
