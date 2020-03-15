import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../theme/theme'
import { media } from '../theme/media'

export const FeaturedArticleCard = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  color: ${theme.colors.darkPurple};
  padding: 30px 20px;
  margin: -50px auto 0 auto;
  position: relative;

  ${media.tablet`
    max-width: 830px;
    margin-top: -100px;
    padding: 50px;
  `};
`

export const FeaturedArticleTitle = styled.h2`
  color: ${theme.colors.indigo};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.15s linear;
  display: inline;
  line-height: 1.3;

  ${FeaturedArticleCard}:hover &,
  ${FeaturedArticleCard}:focus & {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;

  ${media.tablet`
    justify-content: center;
  `};
`

export const NewsDate = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 12px;
  margin-left: 5px;
  margin-right: 4px;
  white-space: nowrap;
`
