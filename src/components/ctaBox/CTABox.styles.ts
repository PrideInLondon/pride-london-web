import styled from 'styled-components'
import { mediaQueries } from '../../theme/mediaQueries'
import { space } from '../../theme/space'
import { colors } from '../../theme/colors'
import { Column } from '../grid'

export const CTAWrapper = styled.div`
  ${mediaQueries.lgMax} {
    background-color: ${colors.indigo};
  }
`

export const CTAPanel = styled.div`
  background-color: ${colors.indigo};
  padding: ${space.lg} 0;
  color: white;
  ${mediaQueries.lg} {
    position: absolute;
    width: 33.3333%;
    right: 0;
    top: -100px;
    padding: ${space.xl_mob};
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
