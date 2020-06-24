import React from 'react'
import { Icon } from '../icon'
import { IconName } from '../icon/Icon.types'
import { capitaliseFirst } from '../../utils/string-utils'
import { H6 } from '../typography'
import { groupSponsorsByLevel } from '../../sponsors'
import { Sponsor, SponsorLevel } from '../../sponsors/PartnersPage.types'
import {
  Wrapper,
  Content,
  UpperWrapper,
  SocialContainer,
  Social,
  HashtagContainer,
  Hashtag,
  StyledDivider,
  LogoContainer,
  LogoWrapper,
  Logo,
  LogoImage,
} from './Footer.styles'
import { FooterProps } from './Footer.types'

const defaultLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

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
    <SocialContainer>
      {SOCIALS.map(social => {
        const title = `Follow us on ${social
          .split('-')
          .map(capitaliseFirst)
          .join('')}`
        return (
          <Social
            key={social}
            href={socials[social]}
            title={title}
            aria-label={title}
            {...defaultLinkProps}
          >
            <Icon name={social} variant="indigo" />
          </Social>
        )
      })}
    </SocialContainer>
    <HashtagContainer>
      {HASHTAGS.map(hashtag => {
        const title = `Tweet #${hashtag}`
        return (
          <Hashtag
            key={hashtag}
            href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}`}
            title={title}
            aria-label={title}
            {...defaultLinkProps}
          >
            #{hashtag}
          </Hashtag>
        )
      })}
    </HashtagContainer>
  </UpperWrapper>
)

const SPONSOR_ORDER: SponsorLevel[] = ['Headline', 'Gold', 'Silver', 'Bronze']

const MiddleSection = ({
  sponsors,
}: {
  sponsors: { [key in SponsorLevel]?: Sponsor[] }
}) => (
  <>
    <H6>Thank you to our 2020 partners</H6>
    <LogoContainer>
      {SPONSOR_ORDER.map(
        level =>
          sponsors[level] &&
          (sponsors[level] as Sponsor[]).map(({ url, logo, name }) => (
            <LogoWrapper>
              <Logo
                href={url}
                title={name}
                aria-label={name}
                {...defaultLinkProps}
              >
                <LogoImage src={logo} alt={`${name} logo`} />
              </Logo>
            </LogoWrapper>
          ))
      )}
    </LogoContainer>
  </>
)

const LowerSection = () => <>lower</>

export const Footer = ({
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  snapchat,
  data: {
    allContentfulSponsor: { edges },
  },
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
      <StyledDivider />
      <MiddleSection sponsors={groupSponsorsByLevel(edges)} />
      <StyledDivider />
      <LowerSection />
    </Content>
  </Wrapper>
)
