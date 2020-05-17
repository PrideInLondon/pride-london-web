import styled from 'styled-components'
import { variant } from 'styled-system'

export const Wrapper = styled.div`
  font-size: 2em;
  display: flex;

  ${variant({
    variants: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  })}
`
