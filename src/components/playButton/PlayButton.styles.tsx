import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'
import { space } from '../../theme/space'

export const ButtonWrapper = styled.div`
  padding: ${space.lg};
  background-color: ${colors.indigo};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries.md} {
    padding: ${space.xl_mob};
  }
`
