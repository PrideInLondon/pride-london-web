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
import { colors } from '../../theme/colors'
import { md, spacing } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { Navigate } from '../navigate'

export const CONTENT_PADDING_X = {
  default: 'lg',
  md: 'xxl',
} as const

export const Wrapper = styled.div.attrs<
  FlexboxProps & LayoutProps & SpaceProps
>({
  paddingX: CONTENT_PADDING_X,
})`
  li {
    color: ${colors.indigo};
  }

  ol,
  ul {
    width: 100%;

    p {
      margin: 0;
    }
  }

  > blockquote {
    > p {
      all: unset;
    }
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

  ${compose(flexbox, layout, space)}
`

export const MultiImageWrapper = styled.div<LayoutProps & SpaceProps>`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  row-gap: ${md}px;

  ${mediaQueries.md} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${md}px;
  }

  ${compose(layout, space)}
`

export const Hyperlink = styled(Navigate)`
  font-weight: 500;
  color: ${colors.indigo};
`
