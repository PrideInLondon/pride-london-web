import styled from 'styled-components'
import {
  compose,
  flexbox,
  layout,
  space,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
import { RichText } from '../../components/richText'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'

export const MAX_CONTENT_WIDTH = 624

export const InfoWrapper = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  ${compose(flexbox, layout, space)}
`

export const TitleWrapper = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
  ${compose(flexbox, layout, space)}
`

export const Content = styled(RichText)`
  > p:first-of-type {
    font-size: ${fontSizes.body_lg};
  }

  ${mediaQueries.md} {
    ol,
    p,
    ul {
      max-width: ${MAX_CONTENT_WIDTH}px;
    }
  }
`

export const AuthorWrapper = styled.div<
  FlexboxProps & LayoutProps & SpaceProps
>`
  ${compose(flexbox, layout, space)}
`
