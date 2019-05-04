import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
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

  ${media.tabletMax`
    span {
        display: none;
    }
  `};
`

export const ViewsThumbnail = styled(Img)`
  border-radius: 4px;
  max-width: 100%;
  padding-top: 100%;
  height: auto !important;

  img {
    width: 100% !important;
    height: auto !important;
  }
`
