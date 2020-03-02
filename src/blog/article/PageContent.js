import React from 'react'
import PropTypes from 'prop-types'
import BlogHeader from './BlogHeader'
import { BlogContent } from './blogContent'
import BlogFooter from './BlogFooter'

const PageContent = ({ article, title, datePublished, category, author }) => (
  <>
    <BlogHeader
      title={title}
      datePublished={datePublished}
      category={category}
    />
    <BlogContent article={article} />
    <BlogFooter author={author} />
  </>
)

PageContent.propTypes = {
  article: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  author: PropTypes.object,
}
PageContent.defaultProps = {
  author: null,
}

export default PageContent
