import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import { H3 } from '../typography'

export const StyledBlockquote = styled(H3)`
  margin: 0;

  ${compose(space, layout)}
`
