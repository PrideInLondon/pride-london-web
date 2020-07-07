import React from 'react'
import PropTypes from 'prop-types'
import { ShareBar } from '../../components/shareBar'
import BlogHeader from './BlogHeader'
import { BlogContent } from './blogContent'
import BlogFooter from './BlogFooter'
import { FlexDiv } from './PageContent.styles'

const PageContent = ({ article, title, datePublished, category, author }) => (
  <>
    <BlogHeader
      title={title}
      datePublished={datePublished}
      category={category}
    />
    <FlexDiv>
      <ShareBar
        variant="vertical"
        content={{
          title: 'Pride in London',
          body: 'The UK’s biggest, most diverse Pride. A home for e…',
          url: 'http://prideinlondon.org',
        }}
      />
    </FlexDiv>
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
