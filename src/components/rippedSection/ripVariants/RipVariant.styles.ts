import styled from 'styled-components'
import { variant, layout, LayoutProps } from 'styled-system'

export const StyledSvg = styled.svg<
  LayoutProps & {
    variant: string
  }
>`
  position: absolute;
  z-index: 9;
  width: 100%;

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

  ${layout}
`
