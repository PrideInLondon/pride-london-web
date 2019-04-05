import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import renderMethods from './renderMethods'

const BlogContent = ({ article }) =>
  documentToReactComponents(article.json, renderMethods)

export default BlogContent
