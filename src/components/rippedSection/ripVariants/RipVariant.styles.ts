import styled from 'styled-components'
import { variant } from 'styled-system'

export const StyledSvg = styled.svg<{
  variant: string
}>`
  position: absolute;
  z-index: 9;
  width: 100%;
  height: auto;

  ${variant({
    variants: {
      top: {
        top: 0,
        transform: 'rotate(180deg)',
      },
      bottom: {
        bottom: 0,
      },
    },
  })}
`
