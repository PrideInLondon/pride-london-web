import React from 'react'
import { Link } from 'gatsby' // lgtm [js/unused-local-variable]
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { H6 } from '../../components/typography'
import { Icon } from '../../components/icon'
import { handleUrl } from '../../utils/location-utils'
import { renderMethods } from './renderMethods'
import { Wrapper, ShareBar, StyledLink } from './TalentProfile.styles'
import { SocialLinkProps, TalentProfileProps } from './TalentProfile.types'

const SocialLink: React.FC<SocialLinkProps> = ({ url, name, talentType }) => (
  <StyledLink<'a' | 'span' | typeof Link>
    {...handleUrl(url)}
    aria-label={`${name} for the ${talentType}`}
  >
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
      {website && <SocialLink url={website} name="website" talentType={type} />}
      {email && (
        <SocialLink url={`mailto:${email}`} name="email" talentType={type} />
      )}
      {facebook && (
        <SocialLink url={facebook} name="facebook" talentType={type} />
      )}
      {twitter && <SocialLink url={twitter} name="twitter" talentType={type} />}
      {instagram && (
        <SocialLink url={instagram} name="instagram" talentType={type} />
      )}
    </ShareBar>
  </Wrapper>
)
