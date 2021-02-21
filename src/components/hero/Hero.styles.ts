import styled from 'styled-components'
import { variant } from 'styled-system'
import { media } from '../../theme/media'
import { H2 } from '../typography'
import { HeroColor } from './Hero.types'

export const Wrapper = styled.div<{ image: string }>`
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  width: 100%;
  height: 100%;
  ${media.desktop`
    height: 680px;
  `};
`

export const Title = styled(H2).attrs({})<{ variant: HeroColor }>`
  ${variant({
    variants: {
      white: { color: 'indigo' },
    },
  })}
`
