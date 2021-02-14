import React from 'react'
import { Link } from 'gatsby' // lgtm [js/unused-local-variable]
import { H6 } from '../../components/typography'
import { Icon } from '../../components/icon'
import { handleUrl } from '../../utils/location-utils'
import { capitaliseFirst } from '../../utils/string-utils'
import { RichText } from '../richText'
import { Wrapper, ShareBar, StyledLink } from './TalentProfile.styles'
import {
  SocialProps,
  SocialLinkProps,
  TalentProfileProps,
} from './TalentProfile.types'

const SocialLink: React.FC<SocialLinkProps> = ({ url, name, talentName }) => {
  const descriptiveText = `${talentName}'s ${capitaliseFirst(name)}`
  return (
    <StyledLink<'a' | 'span' | typeof Link>
      {...handleUrl(url)}
      title={descriptiveText}
      aria-label={descriptiveText}
    >
      <Icon variant="indigo" name={name} />
    </StyledLink>
  )
}

export const TalentProfile: React.FC<TalentProfileProps> = ({
  title,
  talent: {
    name,
    bio: { json },
    website,
    email,
    facebook,
    twitter,
    instagram,
  },
  ...props
}) => {
  const Social = (props: SocialProps) => (
    <SocialLink talentName={name} {...props} />
  )

  return (
    <Wrapper {...props}>
      <H6 as="h3">{title}</H6>
      <RichText document={json} />
      {(website || email || facebook || twitter || instagram) && (
        <ShareBar data-testid="social-bar">
          {website && <Social url={website} name="website" />}
          {email && <Social url={`mailto:${email}`} name="email" />}
          {facebook && <Social url={facebook} name="facebook" />}
          {twitter && <Social url={twitter} name="twitter" />}
          {instagram && <Social url={instagram} name="instagram" />}
        </ShareBar>
      )}
    </Wrapper>
  )
}
