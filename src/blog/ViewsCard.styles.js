import styled from 'styled-components'
import Link from 'gatsby-link'
import { GatsbyImage } from "gatsby-plugin-image"
import { media } from '../theme/media'
import theme from '../theme/theme'

export const ViewsSlide = styled(Link)`
  display: block;
  padding: 0 10px;
  color: ${theme.colors.indigo};
  text-decoration: none;

  ${media.tablet`
    padding: 0 15px;
  `};
`

export const ArticleTitle = styled.h3`
  margin: 0 0 0.5em 0;
  display: inline;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.15s ease-out;
  line-height: 1.5;

  ${ViewsSlide}:hover &,
  ${ViewsSlide}:focus & {
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

export const ViewsThumbnail = styled(GatsbyImage)`
  border-radius: 4px;
  max-width: 100%;
  padding-top: 100%;
  width: 100% !important;
  height: auto !important;

  img {
    width: 100% !important;
    height: auto !important;
  }
`
