import React from 'react'
import PropTypes from 'prop-types'
import { ShareBar } from '../../components/shareBar'
import { NewsCardHeader } from '../../components/newsCardHeader'
import {
  Title,
  SubHeader,
  FlexDiv,
  BlogHeaderContainer,
} from './BlogHeader.styles'

const BlogHeader = ({ title, datePublished, category, readTime }) => (
  <BlogHeaderContainer>
    <Title>{title}</Title>
    <SubHeader>
      <NewsCardHeader
        category={category}
        datePublished={datePublished}
        readTime={readTime}
      />
    </SubHeader>
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
  </BlogHeaderContainer>
)

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  category: PropTypes.shape({
    title: PropTypes.string,
    hexColour: PropTypes.string,
  }).isRequired,
  readTime: PropTypes.number,
}
BlogHeader.defaultProps = {
  readTime: null,
}

export default BlogHeader
