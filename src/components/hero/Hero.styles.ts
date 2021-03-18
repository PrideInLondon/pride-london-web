import styled from 'styled-components'
import { variant } from 'styled-system'
import { Wrapper } from '../wrapper'
import { HeroColor } from './Hero.types'

export const Background = styled(Wrapper).attrs({
  display: 'flex',
  flexDirection: { default: 'column', lg: 'row' },
  width: '100%',
  height: { lg: '560px' },
})<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
`

export const TextWrapper = styled(Wrapper).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: { default: '0', lg: 'xxl' },
  padding: { default: 'lg', lg: '0' },
  color: 'white',
  maxWidth: { lg: '510px' },
})<{ variant: HeroColor }>`
  ${variant({
    variants: {
      white: { color: 'indigo' },
    },
  })}
`
