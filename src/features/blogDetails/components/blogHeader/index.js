import React from 'react'
import PropTypes from 'prop-types'
import SocialList from '../socialList'
import NewsCardHeader from '../../../../components/newsCardHeader'
import {
  Title,
  SubHeader,
  FlexDiv,
  ShareText,
  BlogHeaderContainer,
} from './styles'

const BlogHeader = ({ title, datePublished, category, readLength }) => (
  <BlogHeaderContainer>
    <Title>{title}</Title>
    <SubHeader>
      <NewsCardHeader
        category={category}
        datePublished={datePublished}
        readLength={readLength}
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
  readLength: PropTypes.string,
}
BlogHeader.defaultProps = {
  readLength: null,
}

export default BlogHeader
