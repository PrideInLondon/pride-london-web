import styled from 'styled-components'
import {
  compose,
  flexbox,
  grid,
  layout,
  space,
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
import { colors } from '../../theme/colors'
import { Navigate } from '../navigate'

export const Wrapper = styled.div<FlexboxProps & LayoutProps & SpaceProps>`
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

  ${compose(flexbox, layout, space)}
`

export const MultiImageWrapper = styled.div<
  GridProps & LayoutProps & SpaceProps
>`
  ${compose(grid, layout, space)}
`

export const Hyperlink = styled(Navigate)`
  font-weight: 500;
  color: ${colors.indigo};
`
