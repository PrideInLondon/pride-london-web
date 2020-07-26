import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'
import { Artist } from './FiftyTwoEntryPage.types'

export interface SocialLinkProps {
  url: string
  name: IconName
}

export interface AboutTheArtistProps extends Artist, SpaceProps, LayoutProps {}
