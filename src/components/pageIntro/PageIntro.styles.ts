import styled from 'styled-components'
import { space } from '../../theme/space'
import { Column } from '../grid'
import { mediaQueries } from '../../theme/mediaQueries'

export const IntroContainer = styled(Column)`
  && {
    padding-top: ${space.xl};
    padding-bottom: ${space.xl};

    ${mediaQueries.md} {
      padding-top: ${space.xxl};
      padding-bottom: ${space.xxl};
    }
  }
`
