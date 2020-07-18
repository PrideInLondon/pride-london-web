import styled from 'styled-components'
import {
  compose,
  layout,
  space,
  position,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'
import { mediaQueries } from '../../theme/mediaQueries'
import { space as spacing } from '../../theme/space'
import { colors } from '../../theme/colors'
import { Column } from '../grid'

export const CTAWrapper = styled.div`
  ${mediaQueries.lgMax} {
    background-color: ${colors.indigo};
  }
`

export const CTAPanel = styled.div<SpaceProps & LayoutProps & PositionProps>`
  background-color: ${colors.indigo};
  padding: ${spacing.lg} 0;
  color: white;
  ${mediaQueries.lg} {
    padding: ${spacing.xl_mob};
  }

  && {
    ${compose(space, layout, position)}
  }
`

export const RelativeColumn = styled(Column)`
  && {
    position: relative;
    ${mediaQueries.mdMax} {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`
