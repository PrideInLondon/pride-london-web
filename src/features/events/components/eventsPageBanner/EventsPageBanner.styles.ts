import styled from 'styled-components'
import { BackgroundColorProps, color } from 'styled-system'
import Img from 'gatsby-image'
import theme from '../../../../theme/theme'

export const StyledBanner = styled.div<BackgroundColorProps>`
  ${color}
  color: ${theme.colors.white};
`
export const Title = styled.h1<BackgroundColorProps>`
  ${color}
  color: ${theme.colors.white};
`

export const Subtitle = styled.p``

export const ResponsiveImg = styled(Img)`
  max-width: 100%;
  img {
    display: block;
  }
`
