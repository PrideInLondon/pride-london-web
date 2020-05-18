import React from 'react'
import { Icon } from '../icon'
import { sm, convertToRem } from '../../theme/space'
import { Wrapper } from './ShareBar.styles'
import { ShareBarProps } from './ShareBar.types'

const SOCIALS = [
  { name: 'email' },
  { name: 'twitter' },
  { name: 'facebook' },
  { name: 'messenger' },
  { name: 'linked-in' },
]

export const ShareBar = (props: ShareBarProps) => (
  <Wrapper {...props}>
    {SOCIALS.map(({ name }) => (
      <Icon
        key={name}
        name={name}
        variant="indigo"
        margin={convertToRem(sm / 2)}
      />
    ))}
  </Wrapper>
)
