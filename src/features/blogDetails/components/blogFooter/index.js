import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import Author from '../author'
import SocialList from '../socialList'
import { FlexDiv, ShareText } from '../blogHeader/styles'
import { Input } from '../../../../components/input'
import { Summary, BlogFooterContainer } from './styles'

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
