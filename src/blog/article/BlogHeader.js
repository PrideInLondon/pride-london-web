import React from 'react'
import PropTypes from 'prop-types'
import { NewsCardHeader } from '../../components/newsCardHeader'
import SocialList from './SocialList'
import {
  Title,
  SubHeader,
  FlexDiv,
  ShareText,
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
      <FlexDiv>
        <ShareText>Share this post</ShareText>
        <SocialList />
      </FlexDiv>
    </SubHeader>
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
