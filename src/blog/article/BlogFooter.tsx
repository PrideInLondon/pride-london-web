import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { Input } from '../../components/input'
import Author from './Author'
import { Summary, BlogFooterContainer } from './BlogFooter.styles'
import { PageContentProps } from './PageContent'

export const StyledInput = styled(Input)`
  label {
    color: ${theme.colors.darkGrey};
  }
  input {
    color: ${theme.colors.darkGrey};
  }
`

export const BlogFooter: React.FC<Pick<PageContentProps, 'author'>> = ({
  author,
}) => (
  <BlogFooterContainer>
    <hr />
    <Summary>{author && <Author author={author} />}</Summary>
  </BlogFooterContainer>
)
