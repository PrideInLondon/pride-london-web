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
import { spacing } from '../../theme/space'

export const MAX_CONTENT_WIDTH = 624
export const CONTENT_PADDING_X = {
  default: 'lg',
  md: 'xxl',
} as const

export const InfoWrapper = styled.div.attrs({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'xxl',
  marginBottom: 'lg',
})<FlexboxProps & LayoutProps & SpaceProps>`
  ${compose(flexbox, layout, space)}
`

export const TitleWrapper = styled.div.attrs({
  display: 'flex',
  justifyContent: 'center',
  paddingX: { default: 'lg', md: 'xxl' },
})<FlexboxProps & LayoutProps & SpaceProps>`
  ${compose(flexbox, layout, space)}
`

export const Content = styled(RichText).attrs({ paddingX: CONTENT_PADDING_X })`
  > p:first-of-type {
    font-size: ${fontSizes.body_lg};
  }

  /* RippedSection full-width image :( */
  > section {
    margin-left: -${spacing[CONTENT_PADDING_X.default]};
    margin-right: -${spacing[CONTENT_PADDING_X.default]};

    ${mediaQueries.md} {
      margin-left: -${spacing[CONTENT_PADDING_X.md]};
      margin-right: -${spacing[CONTENT_PADDING_X.md]};
    }
  }

  ${mediaQueries.md} {
    ol,
    p,
    ul {
      max-width: ${MAX_CONTENT_WIDTH}px;
    }
  }
`

export const AuthorWrapper = styled.div.attrs({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'xxl',
  marginBottom: { default: 'xl', md: 'xxl' },
  paddingX: { default: 'lg', md: 'xxl' },
})<FlexboxProps & LayoutProps & SpaceProps>`
  ${compose(flexbox, layout, space)}
`
