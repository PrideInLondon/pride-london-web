import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import theme from '../theme/theme'
import { media } from '../theme/media'
import { NewsCategory } from '../components/newsCategory'

export const Card = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${theme.colors.white};
`

export const CardImg = styled(GatsbyImage)`
  padding-top: 58.75%;
  width: 100% !important;
  height: auto !important;
`

export const CardTitle = styled.h3`
  margin: 0 0 0.5em 0;
`

export const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  p,
  ul,
  ol,
  strong {
    font-size: 0.875rem;
    color: ${theme.colors.darkGrey};
    line-height: 1.3;
  }

  ${media.mobile`
    min-height: unset;
  `};

  ${media.tablet`
    padding: 30px;
    min-height: 480px;
  `};
`
export const CardCategory = styled(NewsCategory)`
  margin-bottom: 10px;
  margin-right: 5px;
`

export const CardItem = styled.div`
  display: flex;
`
export const IconWrapper = styled.div`
  margin-right: 15px;
`

export const CardItemTitle = styled.h4`
  display: inline;
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.44;
  color: ${theme.colors.indigo};

  &[href] {
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.eucalyptusGreen};
    transition: color 0.15s linear;

    &:hover,
    &:focus {
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  &:after {
    content: '';
    display: block;
    margin-bottom: 0.3em;
  }
`

export const Social = styled.div`
  display: flex;

  ${media.mobile`
    margin-top: 20px;
  `};

  ${media.tablet`
    margin-top: auto;
  `};
`

export const SocialLink = styled.a`
  margin-right: 15px;

  svg {
    path {
      transition: fill 0.15s linear;
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`
