import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import renderMethods from './renderMethods'

export const BlogContent = ({ article }) =>
  documentToReactComponents(article.json, renderMethods)
