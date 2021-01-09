import styled from 'styled-components'
import { colors } from '../theme/colors'
import { max } from '../theme/breakpoints'

export const SiteWrapper = styled.div`
  max-width: ${max}px;
  margin: 0 auto;
  background-color: ${colors.white};
`
