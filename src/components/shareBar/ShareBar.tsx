import React from 'react'
import { Icon } from '../icon'
import { generateShareUrl, SharePlatform } from '../../utils/share-utils'
import { Wrapper, ShareText, StyledLink } from './ShareBar.styles'
import { ShareBarProps } from './ShareBar.types'
import { generatePlatformName } from './ShareBar.utils'

const SOCIALS: { name: SharePlatform }[] = [
  { name: 'email' },
  { name: 'twitter' },
  { name: 'facebook' },
  { name: 'messenger' },
  { name: 'linked-in' },
]

export const ShareBar = ({ content, ...props }: ShareBarProps) => (
  <Wrapper {...props}>
    <ShareText>Share</ShareText>
    {SOCIALS.map(({ name }) => (
      <StyledLink
        key={name}
        href={generateShareUrl(name, content)}
        title={`Share via ${generatePlatformName(name)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={name} variant="indigo" />
      </StyledLink>
    ))}
  </Wrapper>
)
