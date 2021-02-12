import React from 'react'
import { H1 } from '../components/typography'
import { BlogPageProps } from './BlogPage.types'

export const BlogPage: React.FC<BlogPageProps> = ({
  data: {
    contentfulCustomPageContent: { title },
  },
}) => <H1>{title}</H1>
