import styled from 'styled-components'
import Link from 'gatsby-link'
import { NewsCard as NewsCardHomepage } from '../../../homepage/containers/latestNewsContainer/styles'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import { CardTitle } from '../../../blog/components/newsCard/styles'

export const Background = styled(Link)`
  display: flex;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 250px;
  position: relative;
  border-radius: 4px;
  &:hover {
    ${CardTitle} {
      border-bottom-color: ${theme.colors.eucalyptusGreen};
    }
  }
`
export const LatestNewsCardContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -98px;
  max-width: 616px;

  ${media.tablet`  
    left: 30px;
    right: 30px;
    bottom: 0;
  `};
`

export const NewsCard = styled(NewsCardHomepage)`
  min-height: unset;
  & > div:nth-child(1) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    & > div:nth-child(1) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`
