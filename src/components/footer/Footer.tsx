import React from 'react'
import { capitaliseFirst } from '../../utils/string-utils'
import { groupSponsorsByLevel } from '../../sponsors'
import { Sponsor, SponsorLevel } from '../../sponsors/PartnersPage.types'
import { Icon } from '../icon'
import { IconName } from '../icon/Icon.types'
import { H6 } from '../typography'
import { Button } from '../button'
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
  LinksContainer,
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
    <Button variant="tertiary" to="/subscribe">
      Subscribe to Pride
    </Button>
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
    <LinksContainer>
      <Button variant="tertiary" to="/support-us/partners">
        View all
      </Button>
      <Button variant="tertiary" to="mailto:sponsor@prideinlondon.org">
        Become a partner
      </Button>
    </LinksContainer>
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
