import styled from 'styled-components'
import { space } from 'styled-system'
import { Tag } from '../tag'
import { md } from '../../theme/space'

export const Wrapper = styled.div`
  width: fit-content;

  > *:not(:last-child) {
    margin-right: ${md}px;
    margin-bottom: ${md}px;
  }

  ${space}
`

export const StyledTag = styled(Tag)`
  cursor: pointer;
`
