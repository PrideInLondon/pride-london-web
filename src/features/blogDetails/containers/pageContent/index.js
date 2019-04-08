import React from 'react'
import PropTypes from 'prop-types'
import BlogHeader from '../../components/blogHeader'
import BlogContent from '../../components/blogContent'
import BlogFooter from '../../components/blogFooter'

const PageContent = ({ article, title, datePublished, category, author }) => (
  <>
    <BlogHeader
      title={title}
      datePublished={datePublished}
      category={category[0]}
    />
    <BlogContent article={article} />
    <BlogFooter author={author} />
  </>
)

PageContent.propTypes = {
  article: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.object,
}

PageContent.defaultProps = {
  author: {
    imageSrc: 'imageSrc',
    display_name: {
      display_name: 'FullName',
    },
  },
}

export default PageContent
