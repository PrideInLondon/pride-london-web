import React from 'react'
import { Link } from 'gatsby' // lgtm [js/unused-local-variable]
import { lg, xl_mob } from '../../theme/space'
import { H6 } from '../../components/typography'
import { Icon } from '../../components/icon'
import { handleUrl } from '../../utils/location-utils'
import { Wrapper, Content, ShareBar, StyledLink } from './TalentProfile.styles'
import { SocialLinkProps, TalentProfileProps } from './TalentProfile.types'

const SocialLink: React.FC<SocialLinkProps> = ({ url, name }) => (
  <StyledLink<'a' | 'span' | typeof Link> {...handleUrl(url)}>
    <Icon variant="indigo" name={name} />
  </StyledLink>
)

export const TalentProfile: React.FC<TalentProfileProps> = ({
  website,
  email,
  facebook,
  twitter,
  instagram,
  ...props
}) => (
  <Wrapper {...props}>
    <Content padding={`${xl_mob}px ${lg}px`} marginTop="xxl">
      <H6 as="h3">About the artist</H6>
      <ShareBar>
        {website && <SocialLink url={website} name="website" />}
        {email && <SocialLink url={`mailto:${email}`} name="email" />}
        {facebook && <SocialLink url={facebook} name="facebook" />}
        {twitter && <SocialLink url={twitter} name="twitter" />}
        {instagram && <SocialLink url={instagram} name="instagram" />}
      </ShareBar>
    </Content>
  </Wrapper>
)
