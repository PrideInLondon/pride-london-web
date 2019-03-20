import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const ArticleTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  margin: 0.5rem 0;
`

export const ArticleAuthor = styled.p`
  color: ${props => props.theme.colors.darkGrey};
  margin: 0.25rem 0;
  font-size: 0.825rem;
`

export const Container = styled.div`
  min-width: 162px;
  padding: 5px;

  ${media.tablet`
    min-width: 400px;
  `};
`
