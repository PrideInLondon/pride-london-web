import React from 'react'
import PropTypes from 'prop-types'
import NewsDate from '../../../../features/blog/components/newsDate'
import SocialList from '../socialList'
import {
  Title,
  SubHeader,
  FlexDiv,
  ShareText,
  NewsCategory,
  BlogHeaderContainer,
} from './styles'

const CenterDot = () => <span>·</span>

const BlogHeader = ({ title, datePublished, category, readLength }) => (
  <BlogHeaderContainer>
    <Title>{title}</Title>
    <SubHeader>
      <FlexDiv>
        <NewsCategory backgroundColor={'orange'}>{category}</NewsCategory>
        <span>
          <NewsDate date={datePublished} />
          {readLength && (
            <>
              <CenterDot />
              <ReadLength>{readLength}</ReadLength>
            </>
          )}
        </span>
      </FlexDiv>
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
  category: PropTypes.string.isRequired,
  readLength: PropTypes.string,
}
BlogHeader.defaultProps = {
  readLength: null,
}

export default BlogHeader
