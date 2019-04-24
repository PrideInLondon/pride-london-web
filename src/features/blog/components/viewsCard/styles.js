import styled from 'styled-components'
import Link from 'gatsby-link'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'

export const ViewsSlide = styled.div`
  padding: 0 10px;

  ${media.tablet`
    padding: 0 15px;
  `};
`

export const ArticleTitle = styled.h3`
  margin: 0 0 0.5em 0;
  display: inline;
`

export const ArticleLink = styled(Link)`
  color: ${theme.colors.indigo};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.15s ease-out;
  text-decoration: none;
  line-height: 1.5;

  &:hover,
  &:focus {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`

export const ArticleAuthor = styled.p`
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.title};
  margin: 0.25rem 0;
  font-size: 14px;
`

export const ViewsThumbnail = styled.img`
  display: block;
  border-radius: 4px;
  width: 100%;
`
