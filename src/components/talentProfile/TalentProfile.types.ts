import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'

export interface SocialLinkProps {
  url: string
  name: IconName
}

export interface Talent {
  name: string
  website: string
  instagram: string
  email: string
  facebook: string
  twitter: string
}

export interface TalentProfileProps extends Talent, SpaceProps, LayoutProps {}
