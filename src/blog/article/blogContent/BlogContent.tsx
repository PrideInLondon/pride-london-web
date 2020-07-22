import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PageContentProps } from '../PageContent.types'
import renderMethods from './renderMethods'

export const BlogContent: React.FC<Pick<PageContentProps, 'article'>> = ({
  article,
}) => <>{documentToReactComponents(article.json, renderMethods)}</>
