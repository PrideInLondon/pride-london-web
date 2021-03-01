import styled from 'styled-components'
import { color, variant } from 'styled-system'

export const StyledSvg = styled.svg<{
  variant: string
}>`
  position: absolute;
  z-index: 1;
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

  ${color}
`

export const StyledPath = styled.path`
  fill: currentcolor;
`
