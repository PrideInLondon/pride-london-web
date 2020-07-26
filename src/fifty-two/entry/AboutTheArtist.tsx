import React from 'react'
import { Link } from 'gatsby' // lgtm [js/unused-local-variable]
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { lg, xl_mob } from '../../theme/space'
import { H6 } from '../../components/typography'
import { Icon } from '../../components/icon'
import { handleUrl } from '../../utils/location-utils'
import { renderMethods } from '../renderMethods'
import { Wrapper, ShareBar, StyledLink } from './AboutTheArtist.styles'
import { Artist } from './FiftyTwoEntryPage.types'
import { SocialLinkProps } from './AboutTheArtist.types'

const SocialLink: React.FC<SocialLinkProps> = ({ url, name }) => (
  <StyledLink<'a' | 'span' | typeof Link> {...handleUrl(url)}>
    <Icon variant="indigo" name={name} />
  </StyledLink>
)

export const AboutTheArtist: React.FC<Artist> = ({
  bio: { json },
  website,
  email,
  facebook,
  twitter,
  instagram,
}) => (
  <Wrapper padding={`${xl_mob}px ${lg}px`} marginTop="xxl">
    <H6>About the artist</H6>
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
