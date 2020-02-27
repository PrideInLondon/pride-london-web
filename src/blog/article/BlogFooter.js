import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { Input } from '../../components/input'
import Author from './Author'
import SocialList from './SocialList'
import { FlexDiv, ShareText } from './BlogHeader.styles'
import { Summary, BlogFooterContainer } from './BlogFooter.styles'

export const StyledInput = styled(Input)`
  label {
    color: ${theme.colors.darkGrey};
  }
  input {
    color: ${theme.colors.darkGrey};
  }
`

const BlogFooter = ({ author }) => (
  <BlogFooterContainer>
    <hr />
    <Summary>
      {author && <Author author={author} />}
      <FlexDiv>
        <ShareText>Share this post</ShareText>
        <SocialList />
      </FlexDiv>
    </Summary>
  </BlogFooterContainer>
)

BlogFooter.propTypes = {
  author: PropTypes.object,
}
BlogFooter.defaultProps = {
  author: null,
}

export default BlogFooter
