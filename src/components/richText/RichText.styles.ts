import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import { colors } from '../../theme/colors'
import { md } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { Navigate } from '../navigate'

export const Wrapper = styled.div`
  li {
    color: ${colors.indigo};
  }

  ul,
  ol {
    p {
      margin: 0;
    }
  }

  ${compose(layout, space)}
`

export const MultiImageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  row-gap: ${md}px;

  ${mediaQueries.md} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${md}px;
  }
`

export const Hyperlink = styled(Navigate)`
  font-weight: 500;
  color: ${colors.indigo};
`
