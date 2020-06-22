import React from 'react'
import { Divider } from '../divider'
import { Icon } from '../icon'
import { IconName } from '../icon/Icon.types'
import { capitaliseFirst } from '../../utils/string-utils'
import {
  Wrapper,
  Content,
  UpperWrapper,
  SocialWrapper,
  Social,
  HashtagWrapper,
  Hashtag,
} from './Footer.styles'
import { FooterProps } from './Footer.types'

const SOCIALS: IconName[] = [
  'facebook',
  'twitter',
  'instagram',
  'you-tube',
  'linked-in',
  'snapchat',
]

const HASHTAGS = ['pride', 'prideinlondon', 'YouMeUsWe']

const UpperSection = ({
  socials,
}: {
  socials: { [key in IconName]?: string }
}) => (
  <UpperWrapper>
    <SocialWrapper>
      {SOCIALS.map(social => {
        const title = `Follow us on ${social
          .split('-')
          .map(capitaliseFirst)
          .join('')}`
        return (
          <Social
            key={social}
            href={socials[social]}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            aria-label={title}
          >
            <Icon name={social} variant="indigo" />
          </Social>
        )
      })}
    </SocialWrapper>
    <HashtagWrapper>
      {HASHTAGS.map(hashtag => {
        const title = `Tweet #${hashtag}`
        return (
          <Hashtag
            key={hashtag}
            href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}`}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            aria-label={title}
          >
            #{hashtag}
          </Hashtag>
        )
      })}
    </HashtagWrapper>
  </UpperWrapper>
)

const MiddleSection = () => <>middle</>
const LowerSection = () => <>lower</>

export const Footer = ({
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  snapchat,
}: FooterProps) => (
  <Wrapper>
    <Content>
      <UpperSection
        socials={{
          facebook,
          twitter,
          instagram,
          'you-tube': youtube,
          'linked-in': linkedin,
          snapchat,
        }}
      />
      <Divider />
      <MiddleSection />
      <Divider />
      <LowerSection />
    </Content>
  </Wrapper>
)
