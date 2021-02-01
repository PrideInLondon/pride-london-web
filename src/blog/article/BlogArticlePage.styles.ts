import styled from 'styled-components'
import { RichText } from '../../components/richText'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'
import { spacing } from '../../theme/space'

export const MAX_CONTENT_WIDTH = 624

const CONTENT_PADDING_X = {
  default: 'lg',
  md: 'xxl',
} as const

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