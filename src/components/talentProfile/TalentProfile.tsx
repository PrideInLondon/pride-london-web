import React from 'react'
import { Link } from 'gatsby' // lgtm [js/unused-local-variable]
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { H6 } from '../../components/typography'
import { Icon } from '../../components/icon'
import { handleUrl } from '../../utils/location-utils'
import { renderMethods } from './renderMethods'
import { Wrapper, ShareBar, StyledLink } from './TalentProfile.styles'
import { SocialLinkProps, TalentProfileProps } from './TalentProfile.types'

const SocialLink: React.FC<SocialLinkProps> = ({ url, name }) => (
  <StyledLink<'a' | 'span' | typeof Link> {...handleUrl(url)}>
    <Icon variant="indigo" name={name} />
  </StyledLink>
)

export const TalentProfile: React.FC<TalentProfileProps> = ({
  type,
  bio: { json },
  website,
  email,
  facebook,
  twitter,
  instagram,
  ...props
}) => (
  <Wrapper {...props}>
    <H6 as="h3">About the {type}</H6>
    {documentToReactComponents(json, renderMethods)}
    <ShareBar>
      {website && <SocialLink url={website} name="website" />}
      {email && <SocialLink url={`mailto:${email}`} name="email" />}
      {facebook && <SocialLink url={facebook} name="facebook" />}
      {twitter && <SocialLink url={twitter} name="twitter" />}
      {instagram && <SocialLink url={instagram} name="instagram" />}
    </ShareBar>
  </Wrapper>
)
