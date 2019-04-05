import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const BlogContent = ({ article }) => {
  return documentToReactComponents(article.json)
}

export default BlogContent
