import styled from 'styled-components'
import { variant } from 'styled-system'
import { mediaQueries } from '../../theme/mediaQueries'
import { H2 } from '../typography'
import { HeroColor } from './Hero.types'

export const Background = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  width: 100%;
  height: 520px;

  ${mediaQueries.md} {
    height: 560px;
  }
`

export const Title = styled(H2).attrs({})<{ variant: HeroColor }>`
  ${variant({
    variants: {
      white: { color: 'indigo' },
    },
  })}
`
