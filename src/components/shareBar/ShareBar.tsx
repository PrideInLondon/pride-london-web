import React from 'react'
import { Icon } from '../icon'
import { generateShareUrl, SharePlatform } from '../../utils/share-utils'
import { Wrapper } from '../wrapper'
import { Flex, ShareText, SocialsWrapper, StyledLink } from './ShareBar.styles'
import { ShareBarProps } from './ShareBar.types'
import { generatePlatformName } from './ShareBar.utils'

const SOCIALS: { name: SharePlatform }[] = [
  { name: 'email' },
  { name: 'twitter' },
  { name: 'facebook' },
  { name: 'messenger' },
  { name: 'linked-in' },
]

export const ShareBar = ({ variant, content, ...props }: ShareBarProps) => (
  <Wrapper display="inline-block" {...props}>
    <Flex {...{ variant }}>
      <ShareText {...{ variant }}>Share</ShareText>
      <SocialsWrapper {...{ variant }}>
        {SOCIALS.map(({ name }) => (
          <StyledLink
            key={name}
            href={generateShareUrl(name, content)}
            title={`Share via ${generatePlatformName(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            {...{ variant }}
          >
            <Icon name={name} variant="indigo" />
          </StyledLink>
        ))}
      </SocialsWrapper>
    </Flex>
  </Wrapper>
)
