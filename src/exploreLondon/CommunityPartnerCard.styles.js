import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import Image from 'gatsby-image/withIEPolyfill'
import theme from '../theme/theme'
import { media } from '../theme/media'
import { colors } from '../theme/colors'
import { NewsCategory } from '../components/newsCategory'
import { Card } from '../components/card'

export const StyledImage = styled(Image)`
  transition: transform 0.15s ease-out;
  width: 100% !important;
`

export const StyledCard = styled(Card)`
  background-color: ${theme.colors.white};
  border: solid 1px ${colors.mediumGrey};

  ${compose(layout, space)}
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
